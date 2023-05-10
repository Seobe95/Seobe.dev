import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'
import { themedPalette } from '../../../styles/theme'
import { FrontMatterTypes } from '../../types/type'
import response from '../../../styles/responsive'
import { HomePageProps } from '../../../pages'

/** 블로그 포스트 리스트 UI를 담당하는 컴포넌트입니다. - PostList
 *  각 포스트에 대한 UI도 포함되어 있습니다. - PostItem
 */

const PostListBlock = styled.div`
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
  background: ${themedPalette.post_card};
  align-items: center;
  padding: 1rem 1rem;
  div:first-child {
    margin-right: 2rem;
  }
  h2 {
    margin: 0px;
    font-size: 1.5rem;
  }
  h3 {
    margin: 0px;
    margin-top: 0.25rem;
    font-size: 1.25rem;
    font-weight: 300;
  }
  h4 {
    /* margin-top: 0.5rem; */
    font-size: 1rem;
    font-weight: 200;
    margin-bottom: 0;
  }

  span {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  @media ${response.mobile} {
    padding: 0.25px;
    h2 {
      margin: 0px;
      font-size: 1.125rem;
    }
    h3 {
      margin: 0px;
      /* margin-bottom: 0.5rem; */
      font-size: 1rem;
      font-weight: 300;
    }
    h4 {
      /* margin-top: 0.5rem; */
      font-size: 0.875rem;
      font-weight: 200;
      padding: 0;
    }
  }

  :hover {
    background-color: ${themedPalette.element};
  }
`

const TitleBox = styled.div`
  padding: 16px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const ImageContainer = styled(Image)`
  min-width: 100px;
  min-height: 90px;
  margin-right: 2rem;
  max-width: 140px;
  min-height: 90px;

  @media ${response.mobile} {
    margin-right: 1rem;
  }
`

const Post = ({
  filePath,
  link,
  data,
  imageProps,
}: {
  link: string
  data: FrontMatterTypes
  filePath: string
  imageProps: {
    img: {
      src: string
      type: string
      height: number
      width: number
    }
    blurDataURL: string
  }
}) => {
  const { date, description, title } = data
  return (
    <article key={filePath}>
      <Link as={link} href={`/posts/[slug]`} shallow>
        <PostBlock>
          <ImageContainer
            alt={`${title}의 대표이미지`}
            {...imageProps.img}
            style={{ width: 'auto', height: 'auto' }}
            blurDataURL={imageProps.blurDataURL}
            placeholder="blur"
            priority
          />
          <TitleBox>
            <div>
              <h2>{title}</h2>
              <h3>{description}</h3>
            </div>
            <div>
              <h4>{date}</h4>
            </div>
          </TitleBox>
        </PostBlock>
      </Link>
    </article>
  )
}

export default function PostList({ posts }: HomePageProps) {
  return (
    <section>
      <h1>최근 작성한 글</h1>
      <PostListBlock>
        {posts.map((post) => {
          const filePath = post.filePath
          return (
            <Post
              filePath={filePath}
              link={`/posts/${filePath.replace(/\.mdx?$/, '')}`}
              key={filePath}
              data={post.data}
              imageProps={post.imageProps}
            />
          )
        })}
      </PostListBlock>
    </section>
  )
}
