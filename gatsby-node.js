const _ = require('lodash')
const Promise = require('bluebird')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const articleTemplate = path.resolve('./src/templates/article.js')
    resolve(
      graphql(
        `
          {
            allNodeArticle {
              edges {
                node {
                  nid
                  fields {
                    slug
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

          // Create pages for each article.
          result.data.allNodeArticle.edges.forEach(({ node }) => {
              createPage({
                  path: node.fields.slug,
                  component: articleTemplate,
                  context: {
                      slug: node.fields.slug,
                      nid: node.nid
                  },
              })
          })
      })
    )
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

    if (node.internal.type === `node__article`) {
        const slug = `/articles/${node.nid}/`
        createNodeField({
            node,
            name: `slug`,
            value: slug,
        })
    }
}
