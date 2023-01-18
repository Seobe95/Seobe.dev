import Link from 'next/link'
import styled from 'styled-components'
import { themedPalette } from '../../../styles/theme'
import { FrontMatterTypes } from '../../types/type'

const PostHeaderBlock = styled.div`
  margin-bottom: 3rem;

  h1 {
    font-size: 3rem;
  }
`

const TagsBlock = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;

  div:first-child {
    margin-right: 1rem;
    margin-left: 2rem;
  }
  div + div {
    margin-right: 1rem;
  }
`

const TagContainer = styled.div`
  background-color: ${themedPalette.element};
  padding : 0.35rem;
  border-radius: 10%;
  :hover {
    background-color: ${themedPalette.hover};
  }
`

const TagContent = styled(Link)`
  padding: none;
  margin: none;
  font-size: 1rem;
`

const Tag = ({value}: {value: string}) => {
  return (
    <TagContainer>
      <TagContent href={`/tags/${value}`}>{value}</TagContent>
    </TagContainer>
  )
}

export default function PostHeader({title, description, tags, date}: FrontMatterTypes) {
  return (
    <PostHeaderBlock>
      <h1>{title}</h1>
      <TagsBlock>
        {date}
        {tags.map((tag) => (
          <Tag value={tag} />
        ))}
      </TagsBlock>
    </PostHeaderBlock>
  )
}
