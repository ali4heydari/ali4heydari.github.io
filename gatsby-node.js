/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

// https://github.com/gatsbyjs/gatsby/issues/11934#issuecomment-646966955
exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, `src`), `node_modules`],
      ...(stage.startsWith("develop")
        ? {
            alias: {
              "react-dom": "@hot-loader/react-dom",
            },
          }
        : null),
    },
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const projectTemplate = path.resolve(`src/templates/ProjectPost/index.tsx`);

  const res = await graphql(`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { category: { eq: "project" } } }
        sort: { fields: frontmatter___endDate, order: DESC }
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              description
              startDate
              endDate
              tags
            }
            id
          }
        }
      }
      site {
        siteMetadata {
          siteUrl
        }
      }
    }
  `);

  const projects = res.data.allMarkdownRemark.edges;
  const siteMetadata = res.data.site.siteMetadata;

  projects.forEach((project, index) => {
    const previous =
      index === projects.length - 1 ? null : projects[index + 1].node;
    const next = index === 0 ? null : projects[index - 1].node;

    createPage({
      path: `${project.node.fields.slug}`,
      component: projectTemplate,
      context: {
        slug: `${project.node.fields.slug}`,
        previous,
        next,
        id: `${project.node.id}`,
        siteUrl: siteMetadata.siteUrl,
      },
    });
  });
};
