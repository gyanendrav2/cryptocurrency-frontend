import React, { Component } from "react"
import Head from "next/head"
import glossaryTerms from "../constants/glossaryTerms"

const alphabet = [..."ABCDEFGHIJKLMNOPRQSTUVWXYZ"].filter((l) => glossaryTerms.some((item) => item.label.charAt(0) == l))

export default class Glossary extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedTerm: "",
    }
  }

  componentDidMount() {
    window.onpopstate = (e) => {
      const selectedTerm = (e.state || {}).selectedTerm || ""
      if (selectedTerm) history.replaceState({ selectedTerm, url: "/glossary" }, selectedTerm)
      this.setState({ selectedTerm })
    }
  }

  render() {
    const { selectedTerm } = this.state
    let selectedTermData = {}
    if (selectedTerm !== "") {
      selectedTermData = glossaryTerms.filter((item) => item.label == selectedTerm)[0]
    }

    return (
      <div className="page-section page-wh-100 bg-white glossaryPage">
        <Head>
          <title>CoinMetro | Glossary</title>
          <meta content="CoinMetro | Glossary" property="og:title" />
          <meta content="A reference page where you can find the best definitions for some of the most important words in the world of crypto investment... An essential bookmark!" name="description" />
          <meta content="Trader, Glossary, keywords, crypto vocabulary" name="keywords" />
          <meta property="og:description" content="A reference page where you can find the best definitions for some of the most important words in the world of crypto investment... An essential bookmark!" />
          <meta property="og:url" content="https://coinmetro.com/glossary/" />
          <link rel="canonical" href="https://coinmetro.com/glossary/" />
        </Head>
        {selectedTerm == "" && (
          <div className="page-section flexCenter flex-column glossary-title">
            <img src="/img/glossary/glossary-icon.svg" alt="icon for the glossary of CoinMetro" />
            <h1>Glossary</h1>
          </div>
        )}
        {selectedTerm == "" && (
          <div className="page-section flexCenter flex-wrap letters-header">
            {alphabet.map((l, i) => <a key={i} href={`#${l}`} className="letter-selector flexCenter mb-2 mx-2">{l}</a>)}
          </div>
        )}
        {selectedTerm == "" && (
          <div className="page-section flexCenter letter-section">
            {alphabet.map((l, i) => (
              <div key={i} id={l} className="d-flex w-100 gd-container flex-wrap">
                {glossaryTerms
                  .filter((item) => item.label.charAt(0) == l)
                  .sort((a, b) => (a.label > b.label ? 1 : - 1))
                  .map((term, i, arr) => (
                    <div key={i} className={`d-flex gd-item${! arr[i + 1] ? " break" : ""}`}>
                      <div className="gd-col-1" id={term.id}>
                        {! i ? term.label.charAt(0) : ""}
                      </div>
                      <div
                        className={`gd-col-2${term.hasOwnPage ? " gd-link" : ""}`}
                        onClick={() => {
                          if (! term.hasOwnPage) return
                          history.pushState({ selectedTerm: term.label, url: "/glossary" }, selectedTerm)
                          document.getElementsByTagName("html")[0].style.scrollBehavior = "auto"
                          document.getElementsByTagName("html")[0].scrollTop = 0
                          document.getElementsByTagName("html")[0].style.scrollBehavior = "smooth"
                          this.setState({ selectedTerm: term.label })
                        }}
                      >
                        {term.label}
                      </div>
                      <div className="gd-col-1" />
                      <div className="gd-col-2 description">{term.description}</div>
                    </div>
                  ))}
              </div>
            ))}
          </div>
        )}

        {selectedTerm !== "" && (
          <div className="page-section flexCenter flex-column selected-term-container">
            <img src="/img/glossary/glossary-icon.svg" />
            <h1>What does {selectedTermData.label} mean?</h1>
            <div className="gd-paragraph">{selectedTermData.content.find((item) => item.type == "summary").text}</div>
            <iframe
              width="600"
              height="400"
              src={selectedTermData.videoLink}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            {selectedTermData.content
              .filter((item) => item.type == "section")
              .map((p, i) => {
                if (p.subtype == "paragraph") return <div key={i} className="gd-paragraph smaller">{p.text}</div>
                if (p.subtype == "list") {
                  return (
                    <div key={i} className="gd-paragraph smaller">
                      {p.text.map((line, i) => <li key={i}>{line}</li>)}
                    </div>
                  )
                }
              })}
          </div>
        )}
      </div>
    )
  }
}
