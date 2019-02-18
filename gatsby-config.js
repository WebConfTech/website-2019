const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'WebConf • Córdoba 2019',
    description:
      'Estamos preparándonos para la primer conferencia de front-end y tecnologías Web del interior del país. ¿Te la vas a perder?',
    author: '@WebConfCBA'
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: [path.join(__dirname, 'src/assets/styles/_variables.scss')]
      }
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, 'src'),
        lib: path.join(__dirname, 'lib'),
        pages: path.join(__dirname, 'src/pages'),
        assets: path.join(__dirname, 'src/assets'),
        layouts: path.join(__dirname, 'src/layouts'),
        components: path.join(__dirname, 'src/components')
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: path.join(__dirname, `src/assets/images/icon.png`) // This path is relative to the root of the site.
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ]
};
