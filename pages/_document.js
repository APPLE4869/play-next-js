import Document, { Head, Main, NextScript } from 'next/document'
import "../scss/app.scss"
import Header from '../components/header.js'
import Footer from '../components/footer.js'

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
        </Head>
        <body>
          <Header />
          <Main />
          <Footer />
          <NextScript />
        </body>
      </html>
    )
  }
}
