import React, { ReactElement } from "react"
import { Box } from "@react-cssx/core"
import { Header } from "../components/affiliates/header"
import { HOMEPAGE_QUERY, prismicClient } from "../lib/prismicClient"
import { InitialData } from "../interfaces/initial"
import { Footer } from "../components/sections/Footer"
import HowWorks from "../components/affiliates/howWorks"
import Reward from "../components/affiliates/reward"
import Commission from "../components/affiliates/commission"
import TrackCommission from "../components/affiliates/trackCommission"
import ValueTrust from "../components/affiliates/valueTrust"

export interface XCMprops {
  data: InitialData
}

export default function Affiliates({ data }: XCMprops): ReactElement {
  return (
    <Box>
      <Header data={data} />
      <HowWorks />
      <Reward />
      <Commission />
      <TrackCommission />
      <ValueTrust />
      <Footer data={data} hideTopCurve />
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
