// eslint-disable-next-line @next/next/no-document-import-in-page
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      
      <Html lang="es">
        <Head>
          <meta name="theme-color" content="#080808" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        
      </Html>
    );
  }
}
