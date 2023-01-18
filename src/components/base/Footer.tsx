import styled from "styled-components";
import GithubWhite from '../../../public/svg/icon-github-light.svg'
import GithubDark from '../../../public/svg/icon-github-dark.svg' 
import MailWhite from '../../../public/svg/icon-mail-light.svg'
import MailDark from '../../../public/svg/icon-mail-dark.svg'
import { useTheme } from "../../hooks/useTheme";
import Link from "next/link";

const FooterBlock = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100px;
  position: relative;
  transform: translateY(-100%);
  a {
    &:first-of-type {
      margin-right: 0.5rem;
      padding-right: 0.5rem;
    }
  }
`


const StyledGithubWhite = styled(GithubWhite)`
    width : 2.5rem;
`

const StyledGithubDark = styled(GithubDark)`
  width: 2.5rem;
`

const StyledMailWhite = styled(MailWhite)`
    width :2.5rem;
`

const StyledMailDark = styled(MailDark)`
  width: 2.5rem;
`

export default function Footer () {
  const theme = useTheme()
  const isDark = theme === 'dark'
  return (
    <FooterBlock>
        <div>
          <nav>
            <Link href={'https://github.com/Seobe95'}>{isDark ? <StyledGithubWhite /> : <StyledGithubDark />}</Link>
            <Link href={'mailto:seobe95@gmail.com'}>{isDark ? <StyledMailWhite /> : <StyledMailDark />}</Link>
          </nav>
        </div>
        <p>2023 @Seobe.dev</p>
    </FooterBlock>
  )
}