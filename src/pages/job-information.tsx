import React, { useState } from "react"
import { Box } from "@react-cssx/core"
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
      <JobInfo modal={modal} />
      <Vacancies heading="Similar jobs" hidePosBtn hideTopCurve bg="#F2F3F8" />
      <CareerAbout />
      <RightJob />
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
