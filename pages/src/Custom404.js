export default function Custom404() {
  return (
    <div>
      {/* about section start */}
      <section
        className=" pt-120 pb-120 position-relative overflow-hidden"
        style={{ marginTop: "70px" }}
      >
        <div
          className="about-obj-1"
          data-paroller-factor="-0.08"
          data-paroller-type="foreground"
          data-paroller-direction="horizontal"
          bis_skin_checked="1"
        >
          <img src="./src/about-obj-1.png" alt="imagefilled" />
        </div>
        <div
          className="about-obj-2"
          data-paroller-factor="0.08"
          data-paroller-type="foreground"
          data-paroller-direction="horizontal"
          bis_skin_checked="1"
        >
          <img src="./src/about-obj-2.png" alt="imagefilled" />
        </div>
        <div className="container" bis_skin_checked="1">
          <div className="row" bis_skin_checked="1">
            <div className="col-lg-8" bis_skin_checked="1">
              <div className="about-content" bis_skin_checked="1">
                <div className="section-header has--bg" bis_skin_checked="1">
                  <div className="header-image style--two" bis_skin_checked="1">
                    <img src="./src/header-el-2.png" alt="imagefilled" />
                  </div>
                  <h2 className="section-title">Error 404</h2>
                </div>
                <h5 className="description">Nothing found here</h5>
                <p>
                  Url you are looking for is <b>Not available </b>right now
                </p>
                <br />
                <h4 className="info-title">Any help please contact us</h4>
                <p>
                  <b>support@gammo.org</b>
                </p>
                <br />
                <a
                  href="https://pixner.net/ophela/demo/about.html"
                  className="cmn-btn mt-5"
                >
                  Team Gammo
                </a>
              </div>
            </div>
            <div className="col-lg-4 mt-lg-0 mt-4" bis_skin_checked="1">
              <div className="about-thumb" bis_skin_checked="1">
                <img
                  src="./src/about-player.png"
                  alt="imagefilled"
                  className="image-1"
                />
                <img
                  src="./src/about-phone.png"
                  alt="imagefilled"
                  className="image-2"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* about section end */}
    </div>
  );
}
