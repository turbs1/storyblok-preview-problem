const path = require("path");

exports.createPages = ({ graphql, actions }) => {
  const createPage = (pathname, component, context) => {
    actions.createPage({
      path: pathname,
      component,
      context,
    });
  };

  return new Promise((resolve, reject) => {
    const pageTemplate = path.resolve("src/templates/Page.tsx");
    const editorTemplate = path.resolve("src/templates/Editor.tsx");

    resolve(
      graphql(`
        {
          allStoryblokEntry {
            nodes {
              content
              name
              full_slug
              uuid
              id
              internalId
            }
          }
        }
      `).then((result) => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        const pages = result.data.allStoryblokEntry.nodes;

        pages.forEach((page) => {
          return actions.createPage({
            path: page.full_slug,
            component: pageTemplate,
            context: {
              data: page,
            },
          });
        });
      })
    );
  });
};
