import styled from "styled-components"
import Error404Light from '../public/svg/icon-404-light.svg'
import Error404Dark from '../public/svg/icon-404-dark.svg'
import Responsive from "../src/components/common/Responsive"
import { useTheme } from "../src/hooks/useTheme"

const ErrorBlock = styled(Responsive)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export default function Custom404() {
    const theme = useTheme()
    const isDark = theme === 'dark'
    return (
      <ErrorBlock>
        {isDark ? <Error404Dark alt="404 에러 이미지" /> : <Error404Light alt="404 에러 이미지" />}
        <h2>존재하는 페이지가 없습니다...</h2>
      </ErrorBlock>
    )
}