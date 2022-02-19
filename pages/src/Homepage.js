
import {useState,useEffect} from  'react'


export default function Homepage() {
	const [ismobile, setMobile] = useState(false)
	const [paySwitch, setpaySwitch] = useState(false);
	useEffect(async() =>{
		const screenWidth = await window.innerWidth;
		screenWidth < 768 ? setMobile(true) : setMobile(false)
	},[]);
	
	const handleSubmit = async () => { 
		
	}

    return(
        
		<div>
 {/* hero section start */}
 <section className="hero bg_img" data-background="./hero.jpg" style={{backgroundImage: 'url("./hero.jpg")' }}>
 <div className="hero__shape" bis_skin_checked="1">
    <img src="./src/shape.png" alt="image"/>
  </div>
  <div className="el-1" bis_skin_checked="1" style= {{ transform: 'matrix(1, 0, 0, 1, -5.22053, -34.4668' }}> <img src="./src/el-1.png" alt="image"/></div>
  <div className="el-2" bis_skin_checked="1" style= {{ transform: 'matrix(1, 0, 0, 1, -2.9003, -19.1482' }}> <img src="./src/el-2.png" alt="image"/></div>
  <div className="el-3" bis_skin_checked="1" style= {{ transform: 'matrix(1, 0, 0, 1, -5.80059, -38.2964' }}> <img src="./src/el-3.png" alt="image"/></div>
  <div className="el-4" bis_skin_checked="1" style= {{ transform: 'matrix(1, 0, 0, 1, -4.06042, -26.8075' }}> <img src="./src/el-4.png" alt="image"/></div>
  <div className="el-5" bis_skin_checked="1" style= {{ transform: 'matrix(1, 0, 0, 1, -6.96071, -45.9557' }}> <img src="./src/el-5.png" alt="image"/></div>
  <div className="el-6" bis_skin_checked="1" style= {{ transform: 'matrix(1, 0, 0, 1, -4.64047, -30.6371' }}> <img src="./src/el-6.png" alt="image"/></div>
  <div className="el-7" bis_skin_checked="1" style= {{ transform: 'matrix(1, 0, 0, 1, -5.22053, -34.4668' }}> <img src="./src/el-7.png" alt="image"/></div>
  <div className="el-8" bis_skin_checked="1" style= {{ transform: 'matrix(1, 0, 0, 1, -4.06042, -26.8075' }}> <img src="./src/el-8.png" alt="image"/></div>
  <div className="el-9" bis_skin_checked="1" style= {{ transform: 'matrix(1, 0, 0, 1, -5.80059, -38.2964' }}> <img src="./src/el-9.png" alt="image"/></div>
  <div className="el-10" bis_skin_checked="1" style= {{ transform: 'matrix(1, 0, 0, 1, -4.06042, -26.8075' }}> <img src="./src/el-10.png" alt="image"/></div>
  <div className="el-11" bis_skin_checked="1" style= {{ transform: 'matrix(1, 0, 0, 1, -4.64047, -30.6371' }}> <img src="./src/el-11.png" alt="image"/></div>
  <div className="container" bis_skin_checked="1">
    <div className="row" bis_skin_checked="1">
      <div className="col-lg-8" bis_skin_checked="1">
        <div className="hero__content" bis_skin_checked="1">
          <span className="hero__sub-title wow fadeInUp" data-wow-duration="0.5s" data-wow-delay="0.3s" style={{ visibility: 'visible', animationDuration: '0.5s', animationDelay: '0.3s', animationName: 'fadeInUp'}}>GAMMO Esports</span>
          <h2 className="hero__title wow fadeInUp" data-wow-duration="'0.5s'" data-wow-delay="0.5s" style={{visibility: 'visible', animationDuration: '0.5s', animationDelay: '0.5s', animationName: 'fadeInUp'}}>Play for Skill</h2>
          <p className="wow fadeInUp" data-wow-duration="0.5s" data-wow-delay="0.7s" style={{visibility: 'visible', animationDuration: '0.5s', animationDelay: '0.7s', animationName: 'fadeInUp' }} id="test">Win & get paid instantly</p>
          <a href="upi://pay?pa=9640405005@MAIRTEL&pn=Gammo&tn=Payment made to Merchant&mc=7211&am=9.00" className="cmn-btn wow fadeInUp" data-wow-duration="0.5s" data-wow-delay="0.9s" style={{visibility: 'visible', animationDuration: '0.5s', animationDelay: '0.9s', animationName: 'fadeInUp'}}>Take me to the lobby</a>
        </div>
      </div>
    </div>
  </div>
</section>
{/* hero section end */}


{/* game section start */}
<section className="pt-120 pb-120 position-relative overflow-hidden">
  <div className="game-el-1" data-paroller-factor="-0.1" data-paroller-type="foreground" data-paroller-direction="vertical" bis_skin_checked="1" style= {{ transform: 'unset', transition: 'transform 0.1s ease 0s', willChange: 'transform' }}><img src="./src/game-el-1.png" alt="image"/></div>
  <div className="game-el-2" data-paroller-factor="-0.1" data-paroller-type="foreground" data-paroller-direction="horizontal" bis_skin_checked="1" style= {{ transform: 'unset', transition: 'transform 0.1s ease 0s', willChange: 'transform' }}><img src="./src/game-el-2.png" alt="image"/></div>
  <div className="game-el-3" data-paroller-factor="0.1" data-paroller-type="foreground" data-paroller-direction="horizontal" bis_skin_checked="1" style= {{ transform: 'unset', transition: 'transform 0.1s ease 0s', willChange: 'transform' }}><img src="./src/game-el-3.png" alt="image"/></div>
  <div className="game-el-4" data-paroller-factor="0.25" data-paroller-type="foreground" data-paroller-direction="vertical" bis_skin_checked="1" style= {{ transform: 'unset', transition: 'transform 0.1s ease 0s', willChange: 'transform' }}><img src="./src/game-el-4.png" alt="image"/></div>
  <div className="container" bis_skin_checked="1">
    <div className="row justify-content-center" bis_skin_checked="1">
      <div className="col-lg-5" bis_skin_checked="1">
        <div className="section-header text-center has--bg" bis_skin_checked="1">
          <div className="header-image" bis_skin_checked="1"><img src="./src/header-el.png" alt="image"/></div>
          <h2 className="section-title">Available Games</h2>
        </div>
      </div>
    </div>{/* row end */}
    <div className="row mb-none-40" bis_skin_checked="1">
      <div className="col-lg-6 mb-40  wow 'fadeInUp'" data-wow-duration="0.3s" data-wow-delay="0.3s" bis_skin_checked="1" style={{visibility: 'hidden', animationDuration: '0.3s', animationDelay: '0.3', animationName: 'none' }}>
        <div className="game-card" bis_skin_checked="1">
          <div className="game-card__thumb" bis_skin_checked="1">
            {/* <img src="./src/1.jpg" alt="image"/> */}
            <img src="./src/bgmi.webp" alt="image"/>
          </div>
          <div className="game-card__content" bis_skin_checked="1">
            <div className="game-card__details" bis_skin_checked="1">
              <div className="game-card__info" bis_skin_checked="1">
                <div className="thumb" bis_skin_checked="1"><img src="./src/bgmi-logo.jpg" alt="image"/></div>
                <div className="content" bis_skin_checked="1">
                  <h3 className="game-card__title"><a href="https://pixner.net/ophela/demo/game-details.html">BGMI</a></h3>
                  <p>Battle Grounds Mobile India<a href="https://pixner.net/ophela/demo/index.html#0"></a></p>
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
              <a href="https://apps.apple.com/in/app/battlegrounds-mobile-india/id1526436837"><img src="./src/apple-btn.png" alt="image"/></a>
              <a href="https://play.google.com/store/apps/details?id=com.pubg.imobile&hl=en&gl=US" ><img src="./src/google-btn.png" alt="image"/></a>
            </div>
            <div className="justify-content-center" style={{width: '100%', paddingTop: '15px', paddingBottom: '15px', textAlign: 'center' }}>
              <a href="upi://pay?pa=9640405005@MAIRTEL&pn=Gammo&tn=Payment made to Merchant&mc=7211&am=9.00" className="cmn-btn " >Play Now for challenge</a>
            </div>
            
          </div>{/* game-card__content end */}
        </div>{/* game-card end */}
      </div>
      <div className="col-lg-6 mb-40  wow fadeInUp" data-wow-duration="0.3s" data-wow-delay="0.5s" bis_skin_checked="1" style={{visibility: 'hidden', animationDuration: '0.3s', animationDelay: '0.5s', animationName: 'none' }}>
        <div className="game-card" bis_skin_checked="1">
          <div className="game-card__thumb" bis_skin_checked="1">
            <img src="./src/pubg-lite.jpg" alt="image"/>
          </div>
          <div className="game-card__content" bis_skin_checked="1">
            <div className="game-card__details" bis_skin_checked="1">
              <div className="game-card__info" bis_skin_checked="1">
                <div className="thumb" bis_skin_checked="1"><img src="./src/pubg-lite-logo.jpg" alt="image"/></div>
                <div className="content" bis_skin_checked="1">
                  <h3 className="game-card__title"><a href="https://pixner.net/ophela/demo/game-details.html">PUBGM LITE</a></h3>
                  <p >Pubg Mobile Lite <a href="https://pixner.net/ophela/demo/index.html#0"></a></p>
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
              <a href="https://pubg-mobile-lite.en.uptodown.com/android/download"><img src="./src/uptodown-btn.png" alt="image"/></a>
              <a href="https://m.apkpure.com/pubg-lite-android/com.tencent.iglite" ><img src="./src/apkpure-btn.png" alt="image"/></a>
            </div>
            <div className="justify-content-center" style={{width: '100%', paddingTop: '15px', paddingBottom: '15px', textAlign: 'center' }}>
              <a href="upi://pay?pa=9640405005@MAIRTEL&pn=Gammo&tn=Payment made to Merchant&mc=7211&am=9.00" className="cmn-btn " >Play Now for challenge</a>
            </div>
            
          </div>{/* game-card__content end */}
        </div>{/* game-card end */}
      </div>
      <div className="col-lg-6 mb-40  wow 'fadeInUp'" data-wow-duration="0.3s" data-wow-delay="0.3s" bis_skin_checked="1" style={{visibility: 'hidden', animationDuration: '0.3s', animationDelay: '0.3s', animationName: 'none' }}>
        <div className="game-card" bis_skin_checked="1">
          <div className="game-card__thumb" bis_skin_checked="1">
            <img src="./src/cod-mobile.png" alt="image"/>
          </div>
          <div className="game-card__content" bis_skin_checked="1">
            <div className="game-card__details" bis_skin_checked="1">
              <div className="game-card__info" bis_skin_checked="1">
                <div className="thumb" bis_skin_checked="1"><img src="./src/cod-mobile-logo.jpg" alt="image"/></div>
                <div className="content" bis_skin_checked="1">
                  <h3 className="game-card__title"><a href="https://pixner.net/ophela/demo/game-details.html">CODM</a></h3>
                  <p>Call of Duty Mobile <a href="https://pixner.net/ophela/demo/index.html#0"></a></p>
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
              <a href="https://apps.apple.com/us/app/call-of-duty-mobile/id1287282214"><img src="./src/apple-btn.png" alt="image"/></a>
              <a href="https://play.google.com/store/apps/details?id=com.activision.callofduty.shooter&hl=en&gl=US" ><img src="./src/google-btn.png" alt="image"/></a>
            </div>
            <div className="justify-content-center" style={{width: '100%', paddingTop: '15px', paddingBottom: '15px', textAlign: 'center' }}>
              <a href="upi://pay?pa=9640405005@MAIRTEL&pn=Gammo&tn=Payment made to Merchant&mc=7211&am=9.00" className="cmn-btn " >Play Now for challenge</a>
            </div>
            
          </div>{/* game-card__content end */}
        </div>{/* game-card end */}
      </div>
      <div className="col-lg-6 mb-40  wow 'fadeInUp'" data-wow-duration="0.3s" data-wow-delay="'0.5s'" bis_skin_checked="1" style={{visibility: 'hidden', animationDuration: '0.3s', animationDelay: '0.5s', animationName: 'none' }}>
        <div className="game-card" bis_skin_checked="1">
          <div className="game-card__thumb" bis_skin_checked="1">
            <img src="./src/free-fire.jpg" alt="image"/>
          </div>
          <div className="game-card__content" bis_skin_checked="1">
            <div className="game-card__details" bis_skin_checked="1">
              <div className="game-card__info" bis_skin_checked="1">
                <div className="thumb" bis_skin_checked="1"><img src="./src/free-fire-logo.jpg" alt="image"/></div>
                <div className="content" bis_skin_checked="1">
                  <h3 className="game-card__title"><a href="https://pixner.net/ophela/demo/game-details.html">Free Fire</a></h3>
                  <p>Free fire mobile game<a href="https://pixner.net/ophela/demo/index.html#0"></a></p>
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
              <a href="https://app.appsflyer.com/id1300146617?pid=OrganicA&c=mainpage_IOS"><img src="./src/apple-btn.png" alt="image"/></a>
              <a href="https://play.google.com/store/apps/details?id=com.dts.freefireth&referrer=af_tranid%3DW4FdviaFBH-kBI-vb8TG_Q%26pid%3DOrganicA%26c%3Dmainpage_AND" ><img src="./src/google-btn.png" alt="image"/></a>
            </div>
            <div className="justify-content-center" style={{width: '100%', paddingTop: '15px', paddingBottom: '15px', textAlign: 'center' }}>
              <a href="upi://pay?pa=9640405005@MAIRTEL&pn=Gammo&tn=Payment made to Merchant&mc=7211&am=9.00" className="cmn-btn " >Play Now for challenge</a>
            </div>
            
          </div>{/* game-card__content end */}
        </div>{/* game-card end */}
      </div>
    </div>
  </div>
</section>
{/* game section end */}


{/* about section start */}
<section className=" pt-120 pb-120 position-relative overflow-hidden">
  <div className="about-obj-1" data-paroller-factor="-0.08" data-paroller-type="foreground" data-paroller-direction="horizontal" bis_skin_checked="1" style= {{ transform: 'unset', transition: 'transform 0.1s ease 0s', willChange: 'transform' }}><img src="./src/about-obj-1.png" alt="image"/></div>
  <div className="about-obj-2" data-paroller-factor="0.08" data-paroller-type="foreground" data-paroller-direction="horizontal" bis_skin_checked="1" style= {{ transform: 'unset', transition: 'transform 0.1s ease 0s', willChange: 'transform' }}><img src="./src/about-obj-2.png" alt="image"/></div>
  <div className="container" bis_skin_checked="1">
    <div className="row" bis_skin_checked="1">
      <div className="col-lg-8" bis_skin_checked="1">
        <div className="about-content" bis_skin_checked="1">
          <div className="section-header has--bg" bis_skin_checked="1">
            <div className="header-image style--two" bis_skin_checked="1"><img src="./src/header-el-2.png" alt="image"/></div>
            <h2 className="section-title">We Focus on Productivity for Skills</h2>
          </div>
          <p>Our main focus is to provide the best way to earn reward for your mindblowing skills for our players. We encourage players of their favourite games that are of a high quality skills in every way possible. This means that we ensure that all our tournaments are engaging, our features unique in game challenginges and captivating, stunning and precise! We don’t cut corners and do whatever is necessary to offer a memorable gameplay experience to your dream life with the prize money.</p>
          <a href="https://pixner.net/ophela/demo/about.html" className="cmn-btn mt-5">learn more</a>
        </div>
      </div>
      <div className="col-lg-4 mt-lg-0 mt-4" bis_skin_checked="1">
        <div className="about-thumb" bis_skin_checked="1">
          <img src="./src/about-player.png" alt="image"  className="image-1"/>
          <img src="./src/about-phone.png" alt="image"  className="image-2"/>
        </div>
      </div>
    </div>
  </div>
</section>
{/* about section end */}


  {/* blog section start */}
  <section className="pt-120 pb-90">
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
          <div className="section-header has--bg style--two">
            <div className="header-image style--two"><img src="assets/images/header-el-4.png" alt="image"/></div>
            <span className="section-sub-title">RECENT POSTS</span>
            <h2 className="section-title">Game News</h2>
          </div>
          {/* <a href="blog-one.html" className="cmn-btn">View All posts</a> */}
        </div>
        <div className="col-lg-8 mt-lg-0 mt-5">
          <div className="blog-slider">
            <div className="post-card">
              <div className="post-card__thumb">
                <img src="assets/images/1.jpg" alt="image"/>
              </div>
              <div className="post-card__content">
                <span className="date">Feb 15</span>
                <h3 className="post-title"><a href="blog-details.html">Benefits of Gammo - for room mathes and tournaments</a></h3>
                <div className="post-author mt-3">
                  <div className="post-author__thumb">
                    <img src="assets/images/author.png" alt="image"/>
                  </div>
                  <a href="#0" className="post-author__name">RamDevPro</a>
                </div>
              </div>
            </div>{/* post-card end */}
            <div className="post-card">
              <div className="post-card__thumb">
                <img src="assets/images/2.jpg" alt="image"/>
              </div>
              <div className="post-card__content">
                <a href="#0" className="post-type"><i className="las la-file-alt"></i></a>
                <span className="date">Jan 19</span>
                <h3 className="post-title"><a href="blog-details.html">My all time best tornament app for BGMI - I won 2,000 two times</a></h3>
                <div className="post-author mt-3">
                  <div className="post-author__thumb">
                    <img src="assets/images/author.png" alt="image"/>
                  </div>
                  <a href="#0" className="post-author__name">adihtyaGaming</a>
                </div>
              </div>
            </div>{/* post-card end */}
            <div className="post-card">
              <div className="post-card__thumb">
                <img src="assets/images/1.jpg" alt="image"/>
              </div>
              <div className="post-card__content">
                <span className="date">Sep 15, 2020</span>
                <h3 className="post-title"><a href="blog-details.html">Wow i got free game pass tokens</a></h3>
                <div className="post-author mt-3">
                  <div className="post-author__thumb">
                    <img src="assets/images/author.png" alt="image"/>
                  </div>
                  <a href="#0" className="post-author__name">EnemyHunter</a>
                </div>
              </div>
            </div>{/* post-card end */}
            <div className="post-card">
              <div className="post-card__thumb">
                <img src="assets/images/2.jpg" alt="image"/>
              </div>
              <div className="post-card__content">
                <a href="#0" className="post-type"><i className="las la-file-alt"></i></a>
                <span className="date">Sep 15, 2020</span>
                <h3 className="post-title"><a href="blog-details.html">Its very easy to earn if you're holding like a pro in gametill last zone</a></h3>
                <div className="post-author mt-3">
                  <div className="post-author__thumb">
                    <img src="assets/images/author.png" alt="image"/>
                  </div>
                  <a href="#0" className="post-author__name">Andres Todd</a>
                </div>
              </div>
            </div>{/* post-card end */}
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* blog section end */}

    </div>
    )
}
