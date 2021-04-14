import React from "react"
import Head from "next/head"
import { Homepage } from "../components/Homepage"
import { prismicClient, HOMEPAGE_QUERY } from "../lib/prismicClient"

export interface IIndexProps {
  data: any
}

export default function Index({ data }: IIndexProps) {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <Homepage data={data} />
    </>
  )
}

export const getStaticProps = async () => {
// export const getServerSideProps = async () => {
  const prismic = await prismicClient.query({
    query: HOMEPAGE_QUERY,
    variables: { lang: "sv-se" },
  })

  return {
    props: {
      data: prismic.data.allHomepages.edges[0].node,
    },
    revalidate: 10, // Revalidate at most once every 10 secs
  }
}
