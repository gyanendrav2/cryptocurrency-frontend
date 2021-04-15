import React, { ReactElement } from "react"
import { Box } from "@react-cssx/core"
import { Header } from "../components/xcm/header"
import { HOMEPAGE_QUERY, prismicClient } from "../lib/prismicClient"
import { InitialData } from "../interfaces/initial"

export interface XCMprops {
  data: InitialData
}

export default function XCM({ data }: XCMprops): ReactElement {
  return (
    <Box>
      <Header data={data} />
    </Box>
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
