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
        : {}),
    },
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === "Mdx") {
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
  const ProjectsTemplate = path.resolve(`src/templates/ProjectPost/index.tsx`);
  const BlogPostTemplate = path.resolve(`src/templates/BlogPost/index.tsx`);

  const query = `
    query {
      site {
        siteMetadata {
          siteUrl
        }
      }

      projects: allMdx(
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

      blog: allMdx(
        filter: { frontmatter: { category: { eq: "blog" } } }
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
    }`;

  const {
    data: {
      site: { siteMetadata },
      projects: { edges: projectsCollection },
      blog: { edges: blogPostCollection },
    },
  } = await graphql(query);

  const collectionSet = [
    {
      collection: projectsCollection,
      component: ProjectsTemplate,
    },
    {
      collection: blogPostCollection,
      component: BlogPostTemplate,
    },
  ];

  collectionSet.forEach((currentItem) => {
    currentItem.collection.forEach((currentPage, index) => {
      const previous =
        index === currentItem.collection.length - 1
          ? null
          : currentItem.collection[index + 1].node;

      const next = index === 0 ? null : currentItem.collection[index - 1].node;

      createPage({
        path: `${currentPage.node.fields.slug}`,
        component: currentItem.component,
        context: {
          slug: `${currentPage.node.fields.slug}`,
          previous,
          next,
          id: `${currentPage.node.id}`,
          siteUrl: siteMetadata.siteUrl,
        },
      });
    });
  });
};
