import React from 'react'

import { graphql } from 'gatsby'

import Navbar from '../component/navbar/navbar'
import Posts from '../component/posts/posts'

const IndexPage = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Posts />
      <Posts />
      <Posts />
    </React.Fragment>
  )
}

export default IndexPage;