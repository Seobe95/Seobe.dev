import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'
import { themedPalette } from '../../../styles/theme'
import { FrontMatterTypes } from '../../types/type'
import Responsive from '../common/Responsive'

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
  padding: 2rem;
  div:first-child {
    margin-right: 2rem;
  }
  h2 {
    margin: 0px;
  }
  h3 {
    margin: 0px;
    margin-top: 2rem;
  }
  h4 {
    margin-top: 0.5rem;
  }

  span {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  :hover {
    background-color: ${themedPalette.element};
  }
`

const Post = ({
  filePath,
  link,
  title,
  description,
  date,
}: {
  filePath: string
  link: string
  title: string
  description: string
  date: string
}) => {
  return (
    <article key={filePath}>
      <Link as={link} href={`/posts/[slug]`}>
        <PostBlock>
          <div>
            <Image src={'/thumbnail/test.png'} alt={`${title}의 대표이미지`} width={150} height={150}/>
          </div>
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
              date={post.data.date}
            />
          )
        })}
      </PostListBlock>
    </section>
  )
}
