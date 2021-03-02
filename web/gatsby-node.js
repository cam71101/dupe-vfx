const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      newsPosts: allSanityNewsPost {
        nodes {
          _id
          title
          slug {
            current
          }
        }
      }
    }
  `);

  result.data.newsPosts.nodes.forEach((post) => {
    const slug = post.slug ? post.slug.current : `/`;

    createPage({
      path: `news/${slug}`,
      component: path.resolve(`./src/templates/newsPost.js`),
      context: {
        _id: post._id,
        slug: slug,
      },
    });
  });

  const resultWork = await graphql(`
    query {
      workPosts: allSanityWorkPost {
        nodes {
          _id
          title
          slug {
            current
          }
        }
      }
    }
  `);

  resultWork.data.workPosts.nodes.forEach((post) => {
    const slug = post.slug ? post.slug.current : `/`;

    createPage({
      path: `work/${slug}`,
      component: path.resolve(`./src/templates/workPost.js`),
      context: {
        _id: post._id,
        slug: slug,
      },
    });
  });
};
