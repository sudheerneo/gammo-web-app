import Link from "next/link";
import { useState, useEffect } from "react";
import $ from "jquery";
export default function FooterWidget() {
    const [ismobile, setMobile] = useState(false);
    const [cliwidth, setcliwidth] = useState(null);
    const [cliheight, setcliheight] = useState(null);
    const [rotationWarn, setrotationWarn] = useState("none");

    useEffect(async () => {
        // detect rotation
        const screenWidth = await window.innerWidth;

        window.addEventListener("resize", () => {
            setcliheight(window.innerHeight);
            setcliwidth(window.innerWidth);
        });
        const screenHeight = window.innerHeight;

        {
            cliheight < 400 ? setrotationWarn("block") : null;
        }
        {
            cliheight > cliwidth ? setrotationWarn("none") : null;
        }

        // detect mobile
        screenWidth < 768 ? setMobile(true) : setMobile(false);
    }, []);

    return (
        <div>
            {/* hideen zorinizontal mode style={{ maxWidth: '100%', margin: 0, top: 0, bottom: 0, left: 0, right: 0, height: '100vh', display: 'flex', position: 'fixed', zIndex: 100000 }} */}
            <div
                style={{
                    backgroundColor: "red",
                    zIndex: "999",
                    height: "100vh",
                    width: "100%",
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    minHeight: "100%",
                    position: "fixed",
                    display: "none",
                }}
            >
                <div className="modal-dialog  modal-dialog-centered modal-dialog-scrollable modal-xl ">
                    <div className="modal-body">
                        <div className="account-area">
                            <form className="account-form">
                                <div className="text-center">
                                    <button type="submit" className="cmn-btn">
                                        Rotaion Warning
                                    </button>
                                </div>
                                <div className="form-group mt-3">
                                    <p>
                                        <a href="#">
                                            Currently we don't support
                                            horizontal mode, pls rotate your
                                            device to vertical mode. Thank you
                                        </a>
                                    </p>
                                    <p style={{ textAlign: "center" }}>
                                        {" "}
                                        {"Screen Resolution : " +
                                            cliheight +
                                            " x " +
                                            cliwidth}{" "}
                                    </p>
                                    <p style={{ textAlign: "center" }}>
                                        {" "}
                                        {"Screen Status : " + rotationWarn}{" "}
                                    </p>
                                </div>
                            </form>
                        </div>
                        {/* account-area end */}
                    </div>
                </div>
            </div>

            {/* footer section start  */}

            <div
                className="footer-section bg_img "
                data-background="assets/images/footer.png"
                style={{ backgroundImage: 'url("assets/images/footer.png")' }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="subscribe-area">
                                <div className="obj">
                                    <img
                                        src="assets/images/subscribe.png"
                                        alt="image"
                                    />
                                </div>
                                <div className="subscribe-content">
                                    <h2 className="title" id="test">
                                        Free Game Pass Invites
                                    </h2>{" "}
                                    <a
                                        href="#0"
                                        data-toggle="modal"
                                        data-target="#rotaionWarning"
                                    >
                                        Limited time reward program
                                    </a>
                                    <p>
                                        Receive a free game pass with every
                                        verified invitation for new logins and
                                        GP purchases, and get a chance to win
                                        Rs. 2,000 per match. There's no limit to
                                        the number of game passes you can earn,
                                        but the pass will only be credited to
                                        your account if the requested
                                        participation is successful
                                    </p>
                                    <p></p>
                                    <form className="subscribe-form">
                                        <input
                                            type="email"
                                            name="subscribe_email"
                                            id="subscribe_email"
                                            placeholder="Phone number or  Email"
                                        />
                                        <button type="submit">
                                            invite Now
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    {ismobile ? (
                        <>
                            {/* mobile view */}
                            <div className="row footer-top mb-none-50">
                                <div
                                    className="mb-50"
                                    style={{ paddingLeft: "20px " }}
                                >
                                    <div className="footer-widget">
                                        <h3 className="footer-widget__title">
                                            ABOUT
                                        </h3>
                                        <ul
                                            className="short-links"
                                            style={{ opacity: "0.9" }}
                                        >
                                            <li>
                                                <a href="#0">About Us</a>
                                            </li>
                                            <li>
                                                <a href="#0">Contact Us</a>
                                            </li>
                                            <li>
                                                <a href="#0">
                                                    Customer Reviews
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#0">Privacy Policy</a>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* footer-widget end */}
                                </div>

                                <div
                                    className="mb-50"
                                    style={{ paddingLeft: "30px " }}
                                >
                                    <div className="footer-widget">
                                        <h3 className="footer-widget__title">
                                            MY ACCOUNT
                                        </h3>
                                        <ul
                                            className="short-links"
                                            style={{ opacity: "0.9" }}
                                        >
                                            <li>
                                                <a href="#0">
                                                    Manage My Account
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#0">
                                                    Account Varification
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#0">
                                                    Withdwaw process
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#0">
                                                    Safety & Security
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* footer-widget end */}
                                </div>
                                <div
                                    className="mb-50"
                                    style={{ paddingLeft: "20px " }}
                                >
                                    <div className="footer-widget">
                                        <h3 className="footer-widget__title">
                                            HELP CENTER
                                        </h3>
                                        <ul
                                            className="short-links"
                                            style={{ opacity: "0.9" }}
                                        >
                                            <li>
                                                <a href="#0">Help centre</a>
                                            </li>
                                            <li>
                                                <a href="#0">FAQ</a>
                                            </li>
                                            <li>
                                                <a href="#0">
                                                    Quick Start Guide
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#0">Tutorials</a>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* footer-widget end */}
                                </div>
                                <div
                                    className="mb-50"
                                    style={{ paddingLeft: "30px " }}
                                >
                                    <div className="footer-widget">
                                        <h3 className="footer-widget__title">
                                            LEGAL INFO
                                        </h3>
                                        <ul
                                            className="short-links"
                                            style={{ opacity: "0.9" }}
                                        >
                                            <li>
                                                <a href="#0">Security</a>
                                            </li>
                                            <li>
                                                <a href="#0">
                                                    Terms of Service
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#0">
                                                    Become Affiliate
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#0">
                                                    Complaints Policy
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* footer-widget end */}
                                </div>
                            </div>
                            {/* mobile view end */}
                        </>
                    ) : (
                        <>
                            {/* desktop view */}
                            <div className="row footer-top mb-none-50">
                                <div className="col-lg-3 col-sm-6 mb-50">
                                    <div className="footer-widget">
                                        <h3 className="footer-widget__title">
                                            ABOUT
                                        </h3>
                                        <ul
                                            className="short-links"
                                            style={{ opacity: "0.9" }}
                                        >
                                            <li>
                                                <a href="#0">About Us</a>
                                            </li>
                                            <li>
                                                <a href="#0">Contact Us</a>
                                            </li>
                                            <li>
                                                <a href="#0">
                                                    Customer Reviews
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#0">Privacy Policy</a>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* footer-widget end */}
                                </div>
                                <div className="col-lg-3 col-sm-6 mb-50">
                                    <div className="footer-widget">
                                        <h3 className="footer-widget__title">
                                            MY ACCOUNT
                                        </h3>
                                        <ul
                                            className="short-links"
                                            style={{ opacity: "0.9" }}
                                        >
                                            <li>
                                                <a href="#0">
                                                    Manage Your Account
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#0">
                                                    Account Varification
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#0">
                                                    Withdwaw process
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#0">
                                                    Safety & Security
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* footer-widget end */}
                                </div>
                                <div className="col-lg-3 col-sm-6 mb-50">
                                    <div className="footer-widget">
                                        <h3 className="footer-widget__title">
                                            HELP CENTER
                                        </h3>
                                        <ul
                                            className="short-links"
                                            style={{ opacity: "0.9" }}
                                        >
                                            <li>
                                                <a href="#0">Help centre</a>
                                            </li>
                                            <li>
                                                <a href="#0">FAQ</a>
                                            </li>
                                            <li>
                                                <a href="#0">
                                                    Quick Start Guide
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#0">Tutorials</a>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* footer-widget end */}
                                </div>
                                <div className="col-lg-3 col-sm-6 mb-50">
                                    <div className="footer-widget">
                                        <h3 className="footer-widget__title">
                                            LEGAL INFO
                                        </h3>
                                        <ul
                                            className="short-links"
                                            style={{ opacity: "0.9" }}
                                        >
                                            <li>
                                                <a href="#0">Security</a>
                                            </li>
                                            <li>
                                                <a href="#0">
                                                    Terms of Service
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#0">
                                                    Become Affiliate
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#0">
                                                    Complaints Policy
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* footer-widget end */}
                                </div>
                            </div>
                            {/* desktop view end */}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
