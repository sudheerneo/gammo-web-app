import { useState, useEffect } from "react";
import FooterWidget from "./FooterWidget";
import $ from "jquery";

export default function Homepage() {
  const [ismobile, setMobile] = useState(false);
  const [paySwitch, setpaySwitch] = useState(false);

  useEffect(async () => {
    const display = "block";
    const screenWidth = await window.innerWidth;
    screenWidth < 768 ? setMobile(true) : setMobile(false);
  }, []);

  return (
    <div>
      {/* hero section start */}
      <section
        className="hero bg_img"
        data-background="./src/hero.jpg"
        style={{ backgroundImage: 'url("./src/hero.jpg")' }}
      >
        <div className="hero__shape" bis_skin_checked="1">
          <img src="./src/shape.png" alt="imagefilled" />
        </div>
        <div className="el-1" bis_skin_checked="1">
          {" "}
          <img src="./src/el-1.png" alt="imagefilled" />
        </div>
        <div className="el-2" bis_skin_checked="1">
          {" "}
          <img src="./src/el-2.png" alt="imagefilled" />
        </div>
        <div
          className="el-3"
          bis_skin_checked="1"
          style={{ transform: "matrix(1, 0, 0, 1, -5.80059, -38.2964" }}
        >
          {" "}
          <img src="./src/el-3.png" alt="imagefilled" />
        </div>
        <div
          className="el-4"
          bis_skin_checked="1"
          style={{ transform: "matrix(1, 0, 0, 1, -4.06042, -26.8075" }}
        >
          {" "}
          <img src="./src/el-4.png" alt="imagefilled" />
        </div>
        <div
          className="el-5"
          bis_skin_checked="1"
          style={{ transform: "matrix(1, 0, 0, 1, -6.96071, -45.9557" }}
        >
          {" "}
          <img src="./src/el-5.png" alt="imagefilled" />
        </div>
        <div className="el-6" bis_skin_checked="1">
          {" "}
          <img src="./src/el-6.png" alt="imagefilled" />
        </div>
        <div className="el-7" bis_skin_checked="1">
          {" "}
          <img src="./src/el-7.png" alt="imagefilled" />
        </div>
        <div className="el-8" bis_skin_checked="1">
          {" "}
          <img src="./src/el-8.png" alt="imagefilled" />
        </div>
        <div className="el-9" bis_skin_checked="1">
          {" "}
          <img src="./src/el-9.png" alt="imagefilled" />
        </div>
        <div className="el-10" bis_skin_checked="1">
          {" "}
          <img src="./src/el-10.png" alt="imagefilled" />
        </div>
        <div
          className="el-11"
          bis_skin_checked="1"
          style={{ transform: "matrix(1, 0, 0, 1, -4.64047, -30.6371" }}
        >
          {" "}
          <img src="./src/el-11.png" alt="imagefilled" />
        </div>
        <div className="container" bis_skin_checked="1">
          <div className="row" bis_skin_checked="1">
            <div className="col-lg-8" bis_skin_checked="1">
              <div
                className={
                  ismobile ? "hero__content text-center" : "hero__content"
                }
                bis_skin_checked="1"
              >
                <span
                  className="hero__sub-title "
                  style={{
                    color: "greenyellow",
                    paddingTop: ismobile ? "2em" : "0em"
                  }}
                >
                  GAMMO Esports
                </span>
                <h2 className="hero__title ">Play for Skill</h2>
                <p
                  style={{
                    opacity: "0.8",
                    paddingTop: "1em"
                  }}
                  id="test"
                >
                  Your skills gonna pay you. Win and get paid instantly. If you
                  are good in strategy mixed with average skills then we will
                  pay you. Become more productive be as a gamer. Join with us
                  today
                </p>
                <a
                  href="upi://pay?pa=9640405005@MAIRTEL&pn=Gammo&tn=Payment made to Merchant&mc=7211&am=9.00"
                  className="cmn-btn "
                >
                  Take me to the lobby
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* hero section end */}

      {/* game section start */}
      <section className="pt-120 pb-120 position-relative overflow-hidden">
        <div
          className="game-el-1"
          data-paroller-factor="-0.1"
          data-paroller-type="foreground"
          data-paroller-direction="vertical"
          bis_skin_checked="1"
          style={{
            transform: "unset",
            transition: "transform 0.1s ease 0s",
            willChange: "transform"
          }}
        >
          <img src="./src/game-el-1.png" alt="imagefilled" />
        </div>
        <div
          className="game-el-2"
          data-paroller-factor="-0.1"
          data-paroller-type="foreground"
          data-paroller-direction="horizontal"
          bis_skin_checked="1"
          style={{
            transform: "unset",
            transition: "transform 0.1s ease 0s",
            willChange: "transform"
          }}
        >
          <img src="./src/game-el-2.png" alt="imagefilled" />
        </div>
        <div
          className="game-el-3"
          data-paroller-factor="0.1"
          data-paroller-type="foreground"
          data-paroller-direction="horizontal"
          bis_skin_checked="1"
          style={{
            transform: "unset",
            transition: "transform 0.1s ease 0s",
            willChange: "transform"
          }}
        >
          <img src="./src/game-el-3.png" alt="imagefilled" />
        </div>
        <div
          className="game-el-4"
          data-paroller-factor="0.25"
          data-paroller-type="foreground"
          data-paroller-direction="vertical"
          bis_skin_checked="1"
          style={{
            transform: "unset",
            transition: "transform 0.1s ease 0s",
            willChange: "transform"
          }}
        >
          <img src="./src/game-el-4.png" alt="imagefilled" />
        </div>
        <div className="container" bis_skin_checked="1">
          <div className="row justify-content-center" bis_skin_checked="1">
            <div className="col-lg-5" bis_skin_checked="1">
              <div
                className="section-header text-center has--bg"
                bis_skin_checked="1"
              >
                <div className="header-image" bis_skin_checked="1">
                  <img src="./src/header-el.png" alt="imagefilled" />
                </div>
                <h2 className="section-title">Available Games</h2>
              </div>
            </div>
          </div>
          {/* row end */}
          <div className="row mb-none-40" bis_skin_checked="1">
            <div className="col-lg-6 mb-40  " bis_skin_checked="1">
              <div className="game-card" bis_skin_checked="1">
                <div className="game-card__thumb" bis_skin_checked="1">
                  {/* <img src="./src/1.jpg" alt="imagefilled"/> */}
                  <img src="./src/bgmi.webp" alt="imagefilled" />
                </div>
                <div className="game-card__content" bis_skin_checked="1">
                  <div className="game-card__details" bis_skin_checked="1">
                    <div className="game-card__info" bis_skin_checked="1">
                      <div className="thumb" bis_skin_checked="1">
                        <img src="./src/bgmi-logo.jpg" alt="imagefilled" />
                      </div>
                      <div className="content" bis_skin_checked="1">
                        <h3 className="game-card__title">
                          <a href="https://pixner.net/ophela/demo/game-details.html">
                            BGMI
                          </a>
                        </h3>
                        <p style={{ fontSize: "14px" }}>
                          Battle Grounds Mobile India
                          <a href="https://pixner.net/ophela/demo/index.html#0"></a>
                        </p>
                      </div>
                    </div>
                    <div className="game-card__ratings" bis_skin_checked="1">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star-half-alt"></i>
                      <span>(95%) users playing...</span>
                    </div>
                  </div>
                  <div className="game-card__action" bis_skin_checked="1">
                    <p className="mb-2"></p>
                    <a href="https://apps.apple.com/in/app/battlegrounds-mobile-india/id1526436837">
                      <img src="./src/apple-btn.png" alt="imagefilled" />
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=com.pubg.imobile&hl=en&gl=US">
                      <img src="./src/google-btn.png" alt="imagefilled" />
                    </a>
                  </div>
                  <div
                    className="justify-content-center"
                    style={{
                      width: "100%",
                      paddingTop: "15px",
                      paddingBottom: "15px",
                      textAlign: "center"
                    }}
                  >
                    <a
                      href="upi://pay?pa=9640405005@MAIRTEL&pn=Gammo&tn=Payment made to Merchant&mc=7211&am=9.00"
                      className="cmn-btn "
                    >
                      Play Now for challenge
                    </a>
                  </div>
                </div>
                {/* game-card__content end */}
              </div>
              {/* game-card end */}
            </div>
            <div className="col-lg-6 mb-40 " bis_skin_checked="1">
              <div className="game-card" bis_skin_checked="1">
                <div className="game-card__thumb" bis_skin_checked="1">
                  <img src="./src/pubg-lite.jpg" alt="imagefilled" />
                </div>
                <div className="game-card__content" bis_skin_checked="1">
                  <div className="game-card__details" bis_skin_checked="1">
                    <div className="game-card__info" bis_skin_checked="1">
                      <div className="thumb" bis_skin_checked="1">
                        <img
                          src="./assets/images/pubg-lite-logo.webp"
                          alt="imagefilled"
                        />
                      </div>
                      <div className="content" bis_skin_checked="1">
                        <h3 className="game-card__title">
                          <a href="https://pixner.net/ophela/demo/game-details.html">
                            PUBGM LITE
                          </a>
                        </h3>
                        <p style={{ fontSize: "14px" }}>
                          Pubg Mobile Lite{" "}
                          <a href="https://pixner.net/ophela/demo/index.html#0"></a>
                        </p>
                      </div>
                    </div>
                    <div className="game-card__ratings" bis_skin_checked="1">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star-half-alt"></i>
                      <span>(60%) users playing...</span>
                    </div>
                  </div>
                  <div className="game-card__action" bis_skin_checked="1">
                    <p className="mb-2"></p>
                    <a href="https://pubg-mobile-lite.en.uptodown.com/android/download">
                      <img src="./src/uptodown-btn.png" alt="imagefilled" />
                    </a>
                    <a href="https://m.apkpure.com/pubg-lite-android/com.tencent.iglite">
                      <img src="./src/apkpure-btn.png" alt="imagefilled" />
                    </a>
                  </div>
                  <div
                    className="justify-content-center"
                    style={{
                      width: "100%",
                      paddingTop: "15px",
                      paddingBottom: "15px",
                      textAlign: "center"
                    }}
                  >
                    <a
                      href="upi://pay?pa=9640405005@MAIRTEL&pn=Gammo&tn=Payment made to Merchant&mc=7211&am=9.00"
                      className="cmn-btn "
                    >
                      Play Now for challenge
                    </a>
                  </div>
                </div>
                {/* game-card__content end */}
              </div>
              {/* game-card end */}
            </div>
            <div className="col-lg-6 mb-40 " bis_skin_checked="1">
              <div className="game-card" bis_skin_checked="1">
                <div className="game-card__thumb" bis_skin_checked="1">
                  <img
                    src="./assets/images/cod-mobile.webp"
                    alt="imagefilled"
                  />
                </div>
                <div className="game-card__content" bis_skin_checked="1">
                  <div className="game-card__details" bis_skin_checked="1">
                    <div className="game-card__info" bis_skin_checked="1">
                      <div className="thumb" bis_skin_checked="1">
                        <img
                          src="./src/cod-mobile-logo.jpg"
                          alt="imagefilled"
                        />
                      </div>
                      <div className="content" bis_skin_checked="1">
                        <h3 className="game-card__title">
                          <a href="https://pixner.net/ophela/demo/game-details.html">
                            CODM
                          </a>
                        </h3>
                        <p style={{ fontSize: "14px" }}>
                          Call of Duty Mobile{" "}
                          <a href="https://pixner.net/ophela/demo/index.html#0"></a>
                        </p>
                      </div>
                    </div>
                    <div className="game-card__ratings" bis_skin_checked="1">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star-half-alt"></i>
                      <span>(30%) users playing...</span>
                    </div>
                  </div>
                  <div className="game-card__action" bis_skin_checked="1">
                    <p className="mb-2"></p>
                    <a href="https://apps.apple.com/us/app/call-of-duty-mobile/id1287282214">
                      <img src="./src/apple-btn.png" alt="imagefilled" />
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=com.activision.callofduty.shooter&hl=en&gl=US">
                      <img src="./src/google-btn.png" alt="imagefilled" />
                    </a>
                  </div>
                  <div
                    className="justify-content-center"
                    style={{
                      width: "100%",
                      paddingTop: "15px",
                      paddingBottom: "15px",
                      textAlign: "center"
                    }}
                  >
                    <a
                      href="upi://pay?pa=9640405005@MAIRTEL&pn=Gammo&tn=Payment made to Merchant&mc=7211&am=9.00"
                      className="cmn-btn "
                    >
                      Play Now for challenge
                    </a>
                  </div>
                </div>
                {/* game-card__content end */}
              </div>
              {/* game-card end */}
            </div>
            <div className="col-lg-6 mb-40 " bis_skin_checked="1">
              <div className="game-card" bis_skin_checked="1">
                <div className="game-card__thumb" bis_skin_checked="1">
                  <img src="./assets/images/free-fire.webp" alt="imagefilled" />
                </div>
                <div className="game-card__content" bis_skin_checked="1">
                  <div className="game-card__details" bis_skin_checked="1">
                    <div className="game-card__info" bis_skin_checked="1">
                      <div className="thumb" bis_skin_checked="1">
                        <img src="./src/free-fire-logo.jpg" alt="imagefilled" />
                      </div>
                      <div className="content" bis_skin_checked="1">
                        <h3 className="game-card__title">
                          <a href="https://pixner.net/ophela/demo/game-details.html">
                            Free Fire
                          </a>
                        </h3>
                        <p style={{ fontSize: "14px" }}>
                          Free Fire Mobile Game
                          <a href="https://pixner.net/ophela/demo/index.html#0"></a>
                        </p>
                      </div>
                    </div>
                    <div className="game-card__ratings" bis_skin_checked="1">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star-half-alt"></i>
                      <span>(50%) users playing...</span>
                    </div>
                  </div>
                  <div className="game-card__action" bis_skin_checked="1">
                    <p className="mb-2"></p>
                    <a href="https://app.appsflyer.com/id1300146617?pid=OrganicA&c=mainpage_IOS">
                      <img src="./src/apple-btn.png" alt="imagefilled" />
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=com.dts.freefireth&referrer=af_tranid%3DW4FdviaFBH-kBI-vb8TG_Q%26pid%3DOrganicA%26c%3Dmainpage_AND">
                      <img src="./src/google-btn.png" alt="imagefilled" />
                    </a>
                  </div>
                  <div
                    className="justify-content-center"
                    style={{
                      width: "100%",
                      paddingTop: "15px",
                      paddingBottom: "15px",
                      textAlign: "center"
                    }}
                  >
                    <a
                      href="upi://pay?pa=9640405005@MAIRTEL&pn=Gammo&tn=Payment made to Merchant&mc=7211&am=9.00"
                      className="cmn-btn "
                    >
                      Play Now for challenge
                    </a>
                  </div>
                </div>
                {/* game-card__content end */}
              </div>
              {/* game-card end */}
            </div>
          </div>
        </div>
      </section>
      {/* game section end */}

      {/* about section start */}
      <section className=" pt-120 pb-120 position-relative overflow-hidden">
        <div
          className="about-obj-1"
          data-paroller-factor="-0.08"
          data-paroller-type="foreground"
          data-paroller-direction="horizontal"
          bis_skin_checked="1"
          style={{
            transform: "unset",
            transition: "transform 0.1s ease 0s",
            willChange: "transform"
          }}
        >
          <img src="./src/about-obj-1.png" alt="imagefilled" />
        </div>
        <div
          className="about-obj-2"
          data-paroller-factor="0.08"
          data-paroller-type="foreground"
          data-paroller-direction="horizontal"
          bis_skin_checked="1"
          style={{
            transform: "unset",
            transition: "transform 0.1s ease 0s",
            willChange: "transform"
          }}
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
                  <h2 className="section-title">
                    We Focus on Productivity for Skills
                  </h2>
                </div>
                <p>
                  Our main focus is to provide the best way to earn reward for
                  your mindblowing skills to our players. We encourage players
                  of their favourite games that are high quality skills in every
                  way possible. This means that we ensure that all our
                  tournaments, events are engaging, our features unique in game
                  challenginges and captivating, stunning and precise! We don’t
                  cut corners and do whatever is necessary to offer a memorable
                  gameplay experience to your dream life with the everyday prize
                  money.
                </p>
                <a
                  href="https://pixner.net/ophela/demo/about.html"
                  className="cmn-btn mt-5"
                >
                  land me on lobby to play
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

      {/* blog section start */}
      <section className="pt-120 pb-90 ">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="section-header has--bg style--two">
                <div className="header-image style--two">
                  <img src="assets/images/header-el-4.png" alt="imagefilled" />
                </div>
                <span className="section-sub-title">GAMMO LOGS</span>
                <h2 className="section-title">Users Words</h2>
              </div>
              {/* <a href="blog-one.html" className="cmn-btn">View All posts</a> */}
            </div>
            <div className="col-lg-8 mt-lg-0 mt-5">
              <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-ride="carousel"
              >
                <ol className="carousel-indicators">
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="0"
                    className="active"
                  ></li>
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="1"
                  ></li>
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="2"
                  ></li>
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="3"
                  ></li>
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="post-card">
                      <div className="post-card__thumb">
                        <img src="assets/images/1.jpg" alt="imagefilled" />
                      </div>
                      <div className="post-card__content">
                        <span className="date">Feb 15</span>
                        <h3 className="post-title">
                          <a href="blog-details.html">
                            Gammo hack - in every match earn free pass with
                            reaching top 10 on every match
                          </a>
                        </h3>
                        <div className="post-author mt-3">
                          <div className="post-author__thumb">
                            <img
                              src="assets/images/author.png"
                              alt="imagefilled"
                            />
                          </div>
                          <a href="#0" className="post-author__name">
                            RamDevPro
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* post-card end */}
                  </div>
                  <div className="carousel-item">
                    <div className="post-card">
                      <div className="post-card__thumb">
                        <img src="assets/images/2.jpg" alt="imagefilled" />
                      </div>
                      <div className="post-card__content">
                        {/* <a href="#0" className="post-type">
                      <i className="las la-file-alt"></i>
                    </a> */}
                        <span className="date">Jan 19</span>
                        <h3 className="post-title">
                          <a href="blog-details.html">
                            My all time best tornament app for BGMI - I won
                            2,000 5 times. I played 9 matches
                          </a>
                        </h3>
                        <div className="post-author mt-3">
                          <div className="post-author__thumb">
                            <img
                              src="assets/images/author.png"
                              alt="imagefilled"
                            />
                          </div>
                          <a href="#0" className="post-author__name">
                            adihtyaGaming
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* post-card end */}
                  </div>
                  <div className="carousel-item">
                    <div className="post-card">
                      <div className="post-card__thumb">
                        <img src="assets/images/1.jpg" alt="imagefilled" />
                      </div>
                      <div className="post-card__content">
                        {/* <a href="#0" className="post-type">
                      <i className="las la-file-alt"></i>
                    </a> */}
                        <span className="date">Mar 27</span>
                        <h3 className="post-title">
                          <a href="blog-details.html">
                            Its very easy to earn if you're holding
                            intelligently like a pro in game till last zone
                          </a>
                        </h3>
                        <div className="post-author mt-3">
                          <div className="post-author__thumb">
                            <img
                              src="assets/images/author.png"
                              alt="imagefilled"
                            />
                          </div>
                          <a href="#0" className="post-author__name">
                            MortalFake
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* post-card end */}
                  </div>
                  <div className="carousel-item">
                    <div className="post-card">
                      <div className="post-card__thumb">
                        <img src="assets/images/2.jpg" alt="imagefilled" />
                      </div>
                      <div className="post-card__content">
                        <span className="date">Mar 15</span>
                        <h3 className="post-title">
                          <a href="blog-details.html">
                            Wow i got free game pass tokens. participated in 8
                            matches won 2 mathes.
                          </a>
                        </h3>
                        <div className="post-author mt-3">
                          <div className="post-author__thumb">
                            <img
                              src="assets/images/author.png"
                              alt="imagefilled"
                            />
                          </div>
                          <a href="#0" className="post-author__name">
                            EnemyHunter
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* post-card end */}
                  </div>
                </div>
                <a
                  className="carousel-control-prev"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* blog section end */}

      <FooterWidget />
    </div>
  );
}
