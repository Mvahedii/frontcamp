import React from 'react'

import { graphql } from 'gatsby'

import Navbar from '../component/navbar/navbar'
import Posts from '../component/posts/posts'

const IndexPage = (props) => {
  console.log(props)
  return (
    <React.Fragment>
      <Navbar />
      <Posts />
      <Posts />
      <Posts />
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
              intro
              image
          }
        }
      }
    }
  }
}`


export default IndexPage;