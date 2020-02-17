/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`);

const makeRequest = (graphql, request) => new Promise((resolve, reject) => {
  // Query for nodes to use in creating pages.
  resolve(
    graphql(request).then(result => {
      if (result.errors) {
        reject(result.errors)
      }

      return result;
    })
  )
});

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  const getSoins = makeRequest(graphql, `
    {
      allStrapiSoin {
        edges {
          node {
            id
          }
        }
      }
    }
    `).then(result => {
    // Create pages for each article.
      result.data.allStrapiSoin.edges.forEach(({ node }) => {
      createPage({
        path: `/soins/${node.id}`,
        component: path.resolve(`src/pages/soin.js`),
        context: {
          id: node.id,
        },
      })
    })
  });

  // Query for articles nodes to use in creating pages.
  return getSoins;
};
