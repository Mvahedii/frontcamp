import React from 'react'

import { graphql } from 'gatsby'

import Navbar from '../component/navbar/navbar'
import Posts from '../component/posts/posts'

const IndexPage = (props) => {
  return (
    <React.Fragment>
      <Navbar />
      {
        props.data.allFile.edges.map(edge => (
          <Posts
            key={edge.node.childMarkdownRemark.id}
            title={edge.node.childMarkdownRemark.frontmatter.title}
            expert
          />
        )
        )
      }
    </React.Fragment>
  )
}

export const query = graphql`
  query {
    allFile (filter: {sourceInstanceName: {eq: "content"} name: {eq: "home"}}) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              title
          }
          id
        }
      }
    }
  }
}`

export default IndexPage;