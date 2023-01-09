import Document, { DocumentContext, Html, Main, NextScript } from 'next/document'
import Head from 'next/head'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(
              <App {...props}>
                <Head>
                  <link rel="preload" href="/fonts/BMHANNAPro.ttf" as="font" type="font/ttf" crossOrigin="" />
                </Head>
              </App>,
            ),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: [initialProps.styles, sheet.getStyleElement()],
      }
    } finally {
      sheet.seal()
    }
  }
  // render() {
  //   return (
  //     <Html lang="ko">
  //       <Head>
  //         <link rel="preload" href="/fonts/BMHANNAPro.ttf" as="font" type="font/ttf" crossOrigin="" />
  //       </Head>
  //       <body>
  //         <Main />
  //         <NextScript />
  //       </body>
  //     </Html>
  //   )
  // }
}
