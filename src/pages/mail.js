import React, { Component } from "react"
import Head from "next/head"

export default class Mail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      page: "intro",
      reason: "",
      askReason: false,
    }
  }

  api = async (action, reason) => {
    const urlParams = new URLSearchParams(window.location.search)
    const subId = urlParams.get("subId")
    if (! subId) return

    return fetch(`https://api.coinmetro.com/mail/${subId}/${action}`, {
      method: "PUT",
      body: JSON.stringify({ reason }),
      headers: {
        "Content-Type": "application/json",
      },
    })
  }

  componentDidMount() {
    window.onpopstate = (e) => this.setState({ page: "intro" })
  }

  snooze = async () => {
    await this.api("snooze")
    this.setState({ page: "snooze" })
    history.pushState({ page: "snooze" }, "snooze")
  }

  unsub = async (reason) => {
    if (! reason) { return this.form.reportValidity() }

    await this.api("unsubscribe", reason)
    this.setState({ page: "unsub" })
    history.pushState({ page: "unsub" }, "unsub")
  }

  stay = async () => {
    await this.api("resubscribe")
    this.setState({ page: "stay" })
    history.pushState({ page: "stay" }, "stay")
  }

  resub = async () => {
    await this.api("resubscribe")
    this.setState({ page: "resub" })
    history.pushState({ page: "resub" }, "resub")
  }

  question = () => {
    this.setState({ page: "question" })
    history.pushState({ page: "question" }, "question")
  }

  render() {
    return (
      <div className="io-container">
        <Head>
          <title>Unsubscription | CoinMetro</title>
        </Head>
        <div>
          <div className="io-header-anim">
            <img className="io-header-anim-shape" src="/img/mail/shape.png" alt="" />
            <img className="io-header-anim-mail-1" src="/img/mail/mail-icn.svg" alt="" />
            <img className="io-header-anim-mail-2" src="/img/mail/mail-icn.svg" alt="" />
            {this.state.page == "stay" || this.state.page == "resub"
              ? <img className="io-header-anim-sad-mail" src="/img/mail/happy-mail-icn.png" alt="" />
              : <img className="io-header-anim-sad-mail" src="/img/mail/sad-mail-icn.svg" alt="" />}
            <img className="io-header-anim-logo-table" src="/img/mail/logo-table.svg" alt="" />
            <img className="io-header-anim-tree" src="/img/mail/tree.svg" alt="" />
            <img className="io-header-anim-bird-1 floater anim-dur3-5" src="/img/mail/bird.svg" alt="" />
            <img className="io-header-anim-bird-2 floater anim-dur3-7" src="/img/mail/bird.svg" alt="" />
            <img className="io-header-anim-cloud-1 cloudmove anim-dur4-1" src="/img/mail/cloud-1.svg" alt="" />
            <img className="io-header-anim-cloud-2 cloudmove anim-dur4" src="/img/mail/cloud-2.svg" alt="" />
            <img className="io-header-anim-cloud-3 cloudmove anim-dur3-7" src="/img/mail/cloud-3.svg" alt="" />
          </div>
          {this.state.page === "intro" && (
            <>
              <div className="io-title">
                <h2>Unsubscribe Here</h2>
                <p>Why unsubscribe and miss out on all the important things when you can simply choose one of the following options:</p>
              </div>
              <div className="io-questions">
                <a onClick={this.snooze}><div><span>Take a break for 30 days</span><i className="fas fa-chevron-right" /></div></a>
                <a onClick={this.stay}><div><span>I still want to get your emails</span><i className="fas fa-chevron-right" /></div></a>
              </div>
              <p className="io-text">Not much help? Sorry to hear that! To unsubscribe completely, click the button below.</p>,
              <div className="io-unsubscribe">
                <a onClick={this.question}><i className="fas fa-ban" /> UNSUBSCRIBE FROM ALL MARKETING EMAILS</a>
              </div>
            </>
          )}
          {this.state.page === "resub" && (
            <div className="io-title">
              <h2>Resubscribed</h2>
              <p>Thanks for staying with us!</p>
            </div>
          )}
          {this.state.page === "snooze" && (
            <>
              <div className="io-title">
                <h2>Snoozed</h2>
                <p>Success! Your subscription has now been snoozed for 30 days.</p>
              </div>,
              <div className="io-completed">
                <p>If you change your mind, we'll always be here for you. </p>
                <p>To resubscribe, <a onClick={this.resub} className="colv">click here</a></p>
              </div>
            </>
          )}

          {this.state.page === "question" && (
            <>
              <div key="0" className="io-title">
                <h2>Reason for Unsubscribing</h2>
                <p>We're sad to see you go, but a little hint would be nice.</p>
              </div>,
              <div key="1" className="io-questions">
                <a onClick={() => this.unsub("neverSubscribed")}>
                  <div><span>I never subscribed/agreed to receive emails</span><i className="fas fa-chevron-right" /></div>
                </a>
                <a onClick={() => this.unsub("tooManyEmails")}>
                  <div><span>There are too many emails</span><i className="fas fa-chevron-right" /></div>
                </a>
                <a onClick={() => this.unsub("contentNotUseful")}>
                  <div><span>I don't find the content useful</span><i className="fas fa-chevron-right" /></div>
                </a>
                <a className={this.state.askReason ? "active" : ""} onClick={() => this.setState({ askReason: ! this.state.askReason })}>
                  <div><span>Other</span><i className="fas fa-chevron-right" /></div>
                  <div className="io-input">
                    <form ref={(ref) => { this.form = ref }}>
                      <textarea placeholder="Please specify here" required onClick={(e) => e.stopPropagation()} onChange={(e) => this.setState({ reason: e.target.value })} />
                      <div><i onClick={(e) => { e.stopPropagation(); this.unsub(this.state.reason) }} className="fas fa-chevron-right" style={{ color: "#000" }} /></div>
                    </form>
                  </div>
                </a>
              </div>
              <p className="io-text">Thank you for your input!</p>
            </>
          )}
          {this.state.page === "stay" && (
            <div className="io-title">
              <p>Thank you for staying with us!</p>
            </div>
          )}
          {this.state.page === "unsub" && (
            <>
              <div className="io-title">
                <h2>Unsubscribed</h2>
                <p>All done! You're now successfully unsubscribed.</p>
              </div>,
              <div className="io-completed">
                <p>If you change your mind, we'll always be here for you. </p>
                <p>To resubscribe, <a onClick={this.resub} className="colv">click here</a></p>
              </div>
            </>
          )}
        </div>
      </div>
    )
  }
}
