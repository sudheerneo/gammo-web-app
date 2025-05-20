import { Component } from "react";
import Head from "next/head";
import Navbar from "./Navbar";

export default class Header extends Component {
  constructor() {
    super();
    this.state = { title: "Gammo | Project Demo | Developed by Sudheer Neo" };
  }

  componentDidMount() {
    const url = window.location.pathname;
    if (url === "/about") this.setState({ title: "JLUM-About" });
    if (url === "/prayer-request")
      this.setState({ title: "JLUM-Prayer request" });
    if (url === "/contact") this.setState({ title: "JLUM-Contact" });
    if (url === "/donate") this.setState({ title: "JLUM-Donate" });
  }

  render() {
    return (
      <div>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>{this.state.title}</title>
        </Head>
        <Navbar />
      </div>
    );
  }
}
