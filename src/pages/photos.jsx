import * as R from 'ramda';
import React from 'react';
import { graphql } from 'gatsby';
import ModalLayout from 'layouts/modal';
import { PhotoGallery } from 'components/PhotoGallery';

const PhotosPage = ({ data }) => {
  const photos = R.pluck('node', data.allFacebookPhoto.edges);

  return (
    <ModalLayout>
      <PhotoGallery photos={photos} />
    </ModalLayout>
  );
};

export default PhotosPage;
export const query = graphql`
  query {
    allFacebookPhoto {
      edges {
        node {
          id
          alt_text
          images {
            width
            source
          }
        }
      }
    }
  }
`;
