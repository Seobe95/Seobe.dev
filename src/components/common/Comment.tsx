import styled from 'styled-components'
import { useComment } from '../../hooks/useComment'

interface CommentProps {}

const commentNodeId = 'Comment'

const CommentContainer = styled.div`
`

export default function Comment() {
  const { ref } = useComment(commentNodeId)

  return (
    <CommentContainer>
      <div id={commentNodeId} ref={ref} />
    </CommentContainer>
  )
}
