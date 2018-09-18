import React from "react"
import { graphql } from "gatsby"
import Layout from '../components/layout'

const articleTemplate = ({ data }) => (
    <Layout>
        <div>
            <div>
                <h2>{data.nodeArticle.title}</h2>
                <p>
                    {data.nodeArticle.body.value}
                </p>
            </div>
        </div>
        <div>
            <a href="/">Back</a>
        </div>
    </Layout>
)

export default articleTemplate

export const query = graphql`
  query articleQuery($nid: Int!) {
    nodeArticle(nid: { eq: $nid } ) {
      title,
      body {
        value
      }
    }
  }
`
