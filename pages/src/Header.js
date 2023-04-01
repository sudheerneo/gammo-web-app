import { Component, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Navbar from "./Navbar";
import Homepage from "./Homepage";

export default class Header extends Component {
  constructor() {
    super();
    this.state = { title: "JLUM Nextjs Project" };
  }

  componentDidMount() {
    const url = window.location.pathname;
    url === "/about" ? this.setState({ title: "JLUM-About" }) : 0;
    url === "/prayer-request"
      ? this.setState({ title: "JLUM-Prayer request" })
      : 0;
    url === "/contact" ? this.setState({ title: "JLUM-Contact" }) : 0;
    url === "/donate" ? this.setState({ title: "JLUM-Donate" }) : 0;
  }

  render() {
    return (
      //////////////////////////////////////////////////////////////////////////
      <div>
        <Head>
          <meta charset="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          {/* <title>{this.state.title}</title> */}
          <title>Gammo - Play for Skill</title>
          <link
            rel="icon"
            type="image/png"
            href="assets/images/favicon.png"
            sizes="16x16"
          />
          <link
            rel="stylesheet"
            id="dashicons-css"
            href="/srcData_files/dashicons.min.css?ver=5.7.2"
            type="text/css"
            media="all"
          />
          <link
            rel="stylesheet"
            id="font-awesome-css"
            href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css?ver=1.10.5.1"
            type="text/css"
            media="all"
          />
          <link
            rel="stylesheet"
            id="foundation-icons-css"
            href="https://cdnjs.cloudflare.com/ajax/libs/foundicons/3.0.0/foundation-icons.css?ver=1.10.5.1"
            type="text/css"
            media="all"
          />
          <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
          <link rel="stylesheet" href="assets/css/all.min.css" />
          <link rel="stylesheet" href="assets/css/line-awesome.min.css" />
          <link rel="stylesheet" href="assets/css/nice-select.css" />
          {/* <link rel="stylesheet" href="assets/css/animate.min.css" /> */}
          <link rel="stylesheet" href="assets/css/lightcase.css" />
          <link rel="stylesheet" href="assets/css/slick.css" />
        </Head>

        {/* <Carousal /> */}

        {/* <body> */}
        <Navbar />
        {/* <Homepage /> */}
        {/* </body> */}
      </div>
      /////////////////////////////////////////////////////////////////////////////////////////////
    );
  }
}
