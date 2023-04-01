import Link from "next/link";
import { useState, useEffect } from "react";
import $ from "jquery";
export default function Footer() {
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
            <footer>
                <div className="container">
                    <div className="row footer-bottom align-items-center">
                        <div className="col-lg-7 col-md-6 text-md-left text-center">
                            <p className="copy-right-text">
                                All Rights Reserved By <a href="#0">Gammo</a> ©{" "}
                                {new Date().getFullYear}
                            </p>
                        </div>
                        <div className="col-lg-5 col-md-6 mt-md-0 mt-3">
                            <ul className="social-links justify-content-md-end justify-content-center">
                                <li>
                                    <a href="#0">G</a>
                                </li>
                                <li>
                                    <a href="#0">A</a>
                                </li>
                                <li>
                                    <a href="#0">M</a>
                                </li>
                                <li>
                                    <a href="#0">M</a>
                                </li>
                                <li>
                                    <a href="#0">O</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>

            {/* <script data-cfasync="false" src="assets/js/email-decode.min.js"></script> */}
            {/* <script src="assets/js/email-decode.min.js"></script> */}
            <script src="assets/js/jquery-3.5.1.min.js"></script>
            <script src="assets/js/bootstrap.bundle.min.js"></script>
            <script src="assets/js/jquery.nice-select.min.js"></script>
            <script src="assets/js/lightcase.js"></script>
            <script src="assets/js/wow.min.js"></script>
            <script src="assets/js/slick.min.js"></script>
            <script src="assets/js/TweenMax.min.js"></script>
            {/* <script src="assets/js/contact.js"></script> */}
            <script src="assets/js/jquery.paroller.min.js"></script>
            <script src="assets/js/app.js"></script>
        </div>
    );
}
