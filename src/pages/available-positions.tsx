import React from "react"
import { Box } from "@react-cssx/core"
import Vacancies from "../components/career/vacancies"
import { Navbar } from "../components/Navbar"
import { InitialData } from "../interfaces/initial"
import { HOMEPAGE_QUERY, prismicClient } from "../lib/prismicClient"
import RightJob from "../components/positions/rightjob"
import { Footer } from "../components/sections/Footer"
import WeCare from "../components/positions/wecare"

export interface PositionsProps {
  data: InitialData
}

function Positions({ data }: PositionsProps): React.ReactElement {
  return (
    <Box cssx={{ bg: "#F2F3F8" }}>
      <Navbar
        data={data}
        bgColor="#1D2544"
        defaultBgColor="#1D2544"
        defaultTextColor="white"
        telTextColor="white"
        defaultPading={20}
        careerPage
      />
      <Box cssx={{ pt: 90 }} />
      <Vacancies
        heading="Available positions"
        showBtnCurve
        bg="#F2F3F8"
        hideTopCurve
        buttonText="Load More"
        colColor="#D9DCE7"
      />
      <Box
        cssx={{
          display: "none",
          "@mq": {
            desktop: {
              display: "block",
            },
          },
        }}
      >
        <RightJob
          title="Did not find the right job?"
          img="/career/world_map.svg"
          btnText="Apply anyway"
        />
      </Box>
      <Box
        cssx={{
          display: "block",
          "@mq": {
            tablet: {
              display: "block",
            },
            desktop: {
              display: "none",
            },
          },
        }}
      >
        <RightJob
          title="Did not find the right job?"
          img="/career/world_map_tab.svg"
          btnText="Apply anyway"
          imgCssx={{
            "@mq": {
              tablet: {
                mt: "-7%",
                maxWidth: 385,
              },
              desktop: {
                mt: "unset",
                maxWidth: "unset",
              },
            },
          }}
        />
      </Box>
      <Box
        cssx={{
          display: "none",
          "@mq": {
            tablet: {
              display: "block",
            },
          },
        }}
      >
        <WeCare />
      </Box>
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

export default Positions
