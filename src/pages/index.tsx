import { ThemeProvider } from "@react-cssx/core"
import React from "react"
import { Homepage } from "../components/Homepage"
import theme from "../config/coinmetro.theme"
import { prismicClient, HOMEPAGE_QUERY } from "../lib/prismicClient"

export interface IIndexProps {
  data: any
}

export default function Index({ data }: IIndexProps) {
  return (
    <ThemeProvider theme={theme}>
      <Homepage data={data} />
    </ThemeProvider>
  )
}

export const getStaticProps = async () => {
  // export const getServerSideProps = async () => {
  const prismic = await prismicClient.query({
    query: HOMEPAGE_QUERY,
    variables: { lang: "en-gb" },
  })

  return {
    props: { data: prismic.data.allHomepages.edges[0].node },
    revalidate: 10, // Revalidate at most once every 10 secs
  }
}
