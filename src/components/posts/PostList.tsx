import Link from 'next/link'
import styled from 'styled-components'
import Responsive from '../common/Responsive'

interface PostListProps {
  posts: {
    data: {
      description: string
      title: string
    }
    filePath: string
  }[]
}

const PostListBlock = styled(Responsive)``

export default function PostList({ posts }: PostListProps) {
  return (
    <section>
      <PostListBlock>
        {posts.map((post) => {
          const { title, description } = post.data
          return (
            <div key={post.filePath}>
              <Link as={`/posts/${post.filePath.replace(/\.mdx?$/, '')}`} href={`/posts/[slug]`}>
                {title}
              </Link>
              <p>{description}</p>
            </div>
          )
        })}
      </PostListBlock>
    </section>
  )
}
