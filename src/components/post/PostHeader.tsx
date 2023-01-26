import Link from 'next/link'
import styled from 'styled-components'
import responsive from '../../../styles/responsive'
import { themedPalette } from '../../../styles/theme'
import { FrontMatterTypes } from '../../types/type'

const PostHeaderBlock = styled.section`
  margin-bottom: 3rem;

  h1 {
    font-size: 2rem;
  }
`

// const TagsBlock = styled.nav`
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   flex-wrap: wrap;
//   div:first-child {
//     margin-right: 0.75rem;
//     margin-top: 0.5rem;
//   }
//   div + div {
//     margin-right: 1rem;
//     margin-top: 0.5rem;
//   }
// `

const TagContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${themedPalette.element};
  padding: 1px 5px;
  border-radius: 5px;
  :hover {
    background-color: ${themedPalette.hover};
  }
`

const TagContent = styled(Link)`
  padding: none;
  margin: none;
  font-size: 1rem;
  @media ${responsive.mobile} {
    font-size: 1rem;
  }
`

// const Tag = ({value}: {value: string}) => {
//   return (
//     <TagContainer>
//       <TagContent href={`/tags/${value}`} >{value}</TagContent>
//     </TagContainer>
//   )
// }

export default function PostHeader({title, description, tags, date}: FrontMatterTypes) {
  return (
    <PostHeaderBlock>
      <h1>{title}</h1>
      <p>{date}</p>
      {/* <TagsBlock>
        {tags.map((tag, index) => (
          <Tag value={tag} key={index} />
        ))}
      </TagsBlock> */}
    </PostHeaderBlock>
  )
}
