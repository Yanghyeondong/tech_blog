import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import PostItem from 'components/Main/PostItem'
import { PostListItemType } from 'types/PostItem.types'
import useInfiniteScroll, { useInfiniteScrollType } from 'hooks/useInfiniteScroll'
import { Link } from 'gatsby'

const GoToMainButton = styled(Link)`
  margin: auto auto;
  font-size: 30px;
  height: 200px;
  &:hover {
    text-decoration: underline;
  }
  @media (max-width: 1200px) {
    margin: auto auto;
    height: 30px;
  }
`

type PostListProps = {
  selectedCategory: string
  posts: PostListItemType[]
  maxPostNum: number
}

const PostListWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 40px;
  width: 1080px;
  margin: 0 auto;
  padding: 50px 0;
  
  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
    width: 70%;
    padding: 50px 20px;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 70%;
    padding: 50px 20px;
  }
`

const PostList: FunctionComponent<PostListProps> = function ({
  selectedCategory,
  posts,
  maxPostNum,
}) {

  const { containerRef, postList }: useInfiniteScrollType = useInfiniteScroll(
    selectedCategory,
    posts,
    maxPostNum,
  )

  return (
    <PostListWrapper ref={containerRef}>
      {postList.map(
        ({
          node: {
            id,
            fields: { slug },
            frontmatter,
          },
        }: PostListItemType) => (
          <PostItem {...frontmatter} link={slug} key={id} />
        ),
      )}
    </PostListWrapper>
  )
}

export default PostList