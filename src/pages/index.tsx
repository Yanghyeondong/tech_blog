import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import Introduction from 'components/Main/Introduction'
import PostList from 'components/Main/PostList'
import { graphql } from 'gatsby'
import { PostListItemType } from 'types/PostItem.types'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import Template from 'components/Common/Template'
import { Link } from 'gatsby'

const GoToPostButton = styled(Link)`
  margin: 50px auto;
  margin-bottom: 0px;
  font-size: 30px;
  padding: 10px;
  font-weight: 800;
  height: auto;
  color: #433E49;
  border-bottom-style: dotted;

  &:hover {
    transition: 0.5s;
    background-color: #433E49;
    color: #ffffff;
    border-radius: 10px;
    border-bottom-style: solid;
  }

  @media (max-width: 1200px) {
  }
`
const Title = styled.div`
  margin: auto;
  margin-top: 100px;
  margin-bottom: 10px;
  font-size: 45px;
  font-weight: 800;
  @media (max-width: 768px) {
    font-size: 30px;
    margin-top: 50px;
  }
`

type IndexPageProps = {
  location: {
    search: string
  }
  data: {
    site: {
      siteMetadata: {
        title: string
        description: string
        siteUrl: string
      }
    }
    allMarkdownRemark: {
      edges: PostListItemType[]
    }
    file: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData
      }
      publicURL: string
    }
  }
}

const IndexPage: FunctionComponent<IndexPageProps> = function ({
  data: {
    site: {
      siteMetadata: { title, description, siteUrl },
    },
    allMarkdownRemark: { edges },
    file: {
      childImageSharp: { gatsbyImageData },
      publicURL,
    },
  },
}) {

  return (
    <Template
      title={title}
      description={description}
      url={siteUrl}
      image={publicURL}
    >
      <Introduction profileImage={gatsbyImageData} />
      <Title>🥃 New drinks!</Title>
      <PostList selectedCategory={'all'} posts={edges} maxPostNum={6} />
      <GoToPostButton to="/post">🥂 Order more drinks?</GoToPostButton>
    </Template>
  )
}

export default IndexPage

export const getShortPostList = graphql`
  query getShortPostList {
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            summary
            date(formatString: "YYYY.MM.DD.")
            categories
            thumbnail {
              childImageSharp {
                gatsbyImageData(width: 768, height: 400)
              }
            }
          }
        }
      }
    }
    file(name: { eq: "profile-image" }) {
      childImageSharp {
        gatsbyImageData(width: 120, height: 120)
      }
      publicURL
    }
  }
`