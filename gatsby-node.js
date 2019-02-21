/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path');
const themeVariables = require('./lib/theme.scss');

exports.onCreateWebpackConfig = ({ actions, stage, rules, plugins, loaders }) => {
  const sassRuleModules = {
    test: /\.module\.s(a|c)ss$/,
    use: [
      {
        loader: 'sass-resources-loader',
        options: {
          resources: [path.join(__dirname, 'src/assets/styles/_variables.scss')]
        }
      },
      {
        loader: 'webpack-loader-append-prepend',
        options: {
          prepend: themeVariables
        }
      }
    ]
  };

  actions.setWebpackConfig({
    module: {
      rules: [sassRuleModules]
    }
  });
};
