import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'
import { themedPalette } from '../../../styles/theme'
import { FrontMatterTypes } from '../../types/type'
import Responsive from '../common/Responsive'
import response from '../../../styles/responsive'

/** 블로그 포스트 리스트 UI를 담당하는 컴포넌트입니다. - PostList
 *  각 포스트에 대한 UI도 포함되어 있습니다. - PostItem
 */

interface PostListProps {
  posts: {
    data: FrontMatterTypes
    filePath: string
  }[]
}

const PostListBlock = styled(Responsive)`
  margin-top: 2rem;
  article:first-child {
    margin-bottom: 2rem;
  }

  article + article {
    margin-bottom: 2rem;
  }
`

const PostBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1rem;
  div:first-child {
    margin-right: 2rem;
  }
  h2 {
    margin: 0px;
    font-size: 1.5rem;
  }
  h3 {
    margin: 0px;
    margin-top: 2rem;
    font-size: 1.25rem;
    font-weight: 300;
  }
  h4 {
    margin-top: 0.5rem;
    font-size: 1rem;
    font-weight: 200;
  }

  span {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  @media ${response.mobile} {
    h2 {
      margin: 0px;
      font-size: 1.125rem;
    }
    h3 {
      margin: 0px;
      margin-top: 0.75rem;
      font-size: 1rem;
      font-weight: 300;
    }
    h4 {
      margin-top: 0.5rem;
      font-size: 0.875rem;
      font-weight: 200;
    }
  }

  :hover {
    background-color: ${themedPalette.element};
  }
`

const ImageContainer = styled.div`
  position: relative;
  display: block;
  width : 120px;
  height : 90px;

  @media ${response.mobile} {
    max-width: 100px;
    min-width: 100px;
  }
`

const Post = ({
  filePath,
  link,
  title,
  description,
  date,
  thumbnail,
}: {
  filePath: string
  link: string
  title: string
  description: string
  date: string
  thumbnail: string
}) => {
  return (
    <article key={filePath}>
      <Link as={link} href={`/posts/[slug]`}>
        <PostBlock>
          <ImageContainer>
            <Image src={thumbnail} alt={`${title}의 대표이미지`} fill priority/>
          </ImageContainer>
          <div>
            <h2>{title}</h2>
            <h4>{date}</h4>
            <h3>{description}</h3>
          </div>
        </PostBlock>
      </Link>
    </article>
  )
}

export default function PostList({ posts }: PostListProps) {
  return (
    <section>
      <h1>최근 작성한 글</h1>
      <PostListBlock>
        {posts.map((post) => {
          const { title, description } = post.data
          return (
            <Post
              description={description}
              filePath={post.filePath}
              link={`/posts/${post.filePath.replace(/\.mdx?$/, '')}`}
              title={title}
              key={post.filePath}
              thumbnail={post.data.thumbnail}
              date={post.data.date}
            />
          )
        })}
      </PostListBlock>
    </section>
  )
}
