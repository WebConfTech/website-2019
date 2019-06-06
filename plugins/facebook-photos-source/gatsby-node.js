const crypto = require('crypto');
const graph = require('fbgraph');

const getData = (from, params = {}) => {
  return new Promise((resolve, reject) => {
    graph.get(from, params, (err, res) => {
      if (err) {
        return reject(err);
      } else if (!res) {
        return reject(new Error('Response is empty!'));
      }

      resolve(res);
    });
  });
};

exports.sourceNodes = async ({ actions, createNodeId }, { token, albums }) => {
  const { createNode, createTypes } = actions;

  const typeDefs = `
    type FacebookPhoto implements Node @infer {
      id: String!
      alt_text: String
      images: [FacebookPhotoImage!]
    }

    type FacebookPhotoImage @infer {
      width: Int!,
      source: String!,
    }
  `;
  createTypes(typeDefs);

  if (token == null) {
    // short circuit when no token
    return;
  }

  graph.setAccessToken(token);

  const processData = (album, photo) => {
    const nodeId = createNodeId(`${album}_${photo.id}`);
    const nodeContent = JSON.stringify(photo);
    const nodeContentDigest = crypto
      .createHash('md5')
      .update(nodeContent)
      .digest('hex');

    const nodeData = Object.assign({}, photo, {
      id: nodeId,
      parent: null,
      children: [],
      internal: {
        type: `FacebookPhoto`,
        content: nodeContent,
        contentDigest: nodeContentDigest
      }
    });

    return nodeData;
  };

  for (const album of albums) {
    const fields = 'id,images,alt_text';
    let next;
    let offset = 0;

    do {
      const { data, paging } = await getData(`${album}/photos`, { fields, offset });
      offset += data.length;
      next = paging.next;

      for (const photo of data) {
        createNode(processData(album, photo));
      }
    } while (next != null);
  }
};
