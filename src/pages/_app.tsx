import React, { ReactElement } from "react"
import { AppProps } from "next/app"
import { ThemeProvider } from "@react-cssx/core"
import { ApolloProvider } from "@apollo/client"
import Head from "next/head"
import theme from "../config/coinmetro.theme"
import { prismicClient } from "../lib/prismicClient"
import "./legal.scss"
import "./mail.scss"
import "./glossary.scss"
import "../styles/xcm.scss"

export default function App({ Component, pageProps }: AppProps): ReactElement {
  return (
    <>
      <Head>
        <title>CoinMetro – The Best Crypto Exchange for Beginners and Pros</title>

        {/* <!-- TrustBox script */}
        <script
          type="text/javascript"
          src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
          async
        />
        {/* End TrustBox script */}
      </Head>
      <ThemeProvider theme={theme}>
        <ApolloProvider client={prismicClient}>
          <Component {...pageProps} />
        </ApolloProvider>
      </ThemeProvider>
    </>
  )
}
