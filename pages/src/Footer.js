import { useState, useEffect } from "react";
import Script from "next/script";

export default function Footer() {
  const [ismobile, setMobile] = useState(false);
  const [cliwidth, setCliWidth] = useState(null);
  const [cliheight, setCliHeight] = useState(null);
  const [rotationWarn, setRotationWarn] = useState("none");

  useEffect(() => {
    function handleResize() {
      setCliHeight(window.innerHeight);
      setCliWidth(window.innerWidth);

      // rotation warning logic
      if (window.innerHeight < 400) {
        setRotationWarn("block");
      } else if (window.innerHeight > window.innerWidth) {
        setRotationWarn("none");
      }

      // detect mobile
      setMobile(window.innerWidth < 768);
    }

    // initialize values
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <footer>
        <div className="container">
          <div className="row footer-bottom align-items-center">
            <div className="col-lg-7 col-md-6 text-md-left text-center">
              <p className="copy-right-text">
                All Rights Reserved By <a href="#0">Gammo</a> ©{" "}
                {new Date().getFullYear()}
              </p>
            </div>
            <div className="col-lg-5 col-md-6 mt-md-0 mt-3">
              <ul className="social-links justify-content-md-end justify-content-center">
                {["G", "A", "M", "M", "O"].map((letter, idx) => (
                  <li key={idx}>
                    <a href="#0">{letter}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </footer>

      {/* Load scripts properly with Next.js Script */}
      <Script
        src="/assets/js/jquery-3.5.1.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="/assets/js/bootstrap.bundle.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="/assets/js/jquery.nice-select.min.js"
        strategy="afterInteractive"
      />
      <Script src="/assets/js/lightcase.js" strategy="afterInteractive" />
      <Script src="/assets/js/wow.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/slick.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/TweenMax.min.js" strategy="afterInteractive" />
      {/* <Script src="/assets/js/contact.js" strategy="afterInteractive" /> */}
      <Script
        src="/assets/js/jquery.paroller.min.js"
        strategy="afterInteractive"
      />
      <Script src="/assets/js/app.js" strategy="afterInteractive" />
    </>
  );
}
