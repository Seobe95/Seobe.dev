import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
import GlobalStyle from '../styles/GlobalStyles'
import { ServerStyleSheet } from 'styled-components'
import { ReactElement } from 'react'

interface DocumentProps {
  styles: ReactElement
}
export default function MyDocument(): ReactElement {
  return (
    <Html lang="ko">
      <Head>
        {/* <link rel="stylesheet" href="/styles.css" /> */}
        <meta name="google-site-verification" content="IbBacN3W5LegV-0WiyvBl2hkhESqmHXxb9B1Ar39qTw" />
        <meta name="google-site-verification" content="b9_eIOOy-BaWolfTW-Zix6Yphn7WXwfcZKZkvc9MlzU" />
      </Head>
      <GlobalStyle />
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `const cookie = document.cookie.split('=')[1];
            document.body.dataset.theme = cookie;`,
          }}
        ></script>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

MyDocument.getInitialProps = async (ctx: DocumentContext) => {
  const sheet = new ServerStyleSheet()
  const originalRenderPage = ctx.renderPage

  try {
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
      })

    const initialProps = await Document.getInitialProps(ctx)
    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          {sheet.getStyleElement()}
        </>
      ),
    }
  } finally {
    sheet.seal()
  }
}