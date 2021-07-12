import React, { useState } from "react"
import { Box, Element } from "@react-cssx/core"
import Vacancies from "../components/career/vacancies"
import { Navbar } from "../components/Navbar"
import { InitialData } from "../interfaces/initial"
import { HOMEPAGE_QUERY, prismicClient } from "../lib/prismicClient"
import JobInfo from "../components/job-information/jobInfo"
import CareerTrust from "../components/career/trust"
import CareerAbout from "../components/career/about"
import RightJob from "../components/positions/rightjob"
import { Footer } from "../components/sections/Footer"
import { Application } from "../components/career/application"

export interface JobInformationProps {
  data: InitialData
}

function JobInformation({ data }: JobInformationProps): React.ReactElement {
  const [modal, setModal] = useState(false)
  return (
    <div>
      {modal && (
        <Box>
          <Application onClose={() => setModal(false)} heading="Let's talk" />
        </Box>
      )}
      <Navbar
        data={data}
        bgColor="#1D2544"
        defaultBgColor="#1D2544"
        defaultTextColor="white"
        telTextColor="white"
        defaultPading={20}
        careerPage
      />
      <JobInfo />
      <Vacancies
        heading="Similar jobs"
        buttonText="View all positions"
        hideTopCurve
        bg="#F2F3F8"
        postionHeading={{ color: "primary", mt: "4.5rem" }}
      />
      <Box cssx={{ pos: "relative" }}>
        <Element
          as="img"
          src="/career/jobinfotopcurve.svg"
          alt="svg"
          cssx={{ pos: "absolute", top: -5, zIndex: 1 }}
        />
        <CareerAbout />
        <Element
          as="img"
          src="/career/jobinfobtmcurve.svg"
          alt="svg"
          cssx={{ pos: "absolute", bottom: -5, zIndex: 1 }}
        />
      </Box>
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
          jobInfoPage
          title="Not the right position for you"
          img="/career/planet.svg"
          btnText="Send us a message"
        />
      </Box>
      <Box
        cssx={{
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
          jobInfoPage
          title="Not the right position for you"
          img="/career/planet_tab.png"
          btnText="Send us a message"
        />
      </Box>
      <CareerTrust />
      <Footer data={data} hideTopCurve />
    </div>
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

export default JobInformation
