import Link from 'next/link'
import {useState,useEffect} from  'react'
import $ from 'jquery';
export default function Footer(){
	const [ismobile, setMobile] = useState(false)
  const [cliwidth, setcliwidth] = useState(null)
  const [cliheight, setcliheight] = useState(null)
  const [rotationWarn, setrotationWarn] = useState('none')
  
	useEffect(async() =>{
    // detect rotation
		const screenWidth = window.innerWidth;
    
    window.addEventListener('resize', () => {
      setcliheight(window.innerHeight)
      setcliwidth(window.innerWidth)
    });
    const screenHeight = window.innerHeight;
    
    { cliheight < 400 ? setrotationWarn('block') : null }
    { cliheight > cliwidth ? setrotationWarn('none') : null }

    // detect mobile
		screenWidth < 768 ? setMobile(true) : setMobile(false);
	},[]); 


    return(
        <div>
        {/* hideen zorinizontal mode style={{ maxWidth: '100%', margin: 0, top: 0, bottom: 0, left: 0, right: 0, height: '100vh', display: 'flex', position: 'fixed', zIndex: 100000 }} */}
<div style={{ backgroundColor: 'red', zIndex: '999', height: '100vh', width: '100%', top: 0, bottom: 0, left: 0, right: 0, minHeight: '100%', position : 'fixed', display : 'none'}}>
<div className="modal-dialog  modal-dialog-centered modal-dialog-scrollable modal-xl " >
    <div className="modal-body">
      <div className="account-area">
        <form className="account-form">
          <div className="text-center">
            <button type="submit" className="cmn-btn">Rotaion Warning</button>
          </div>
          <div className="form-group mt-3">
            <p><a href="#">Currently we don't support horizontal mode, pls rotate your device to vertical mode. Thank you</a></p>
            <p style={{textAlign: 'center'}}> {'Screen Resolution : '+cliheight+' x '+cliwidth}  </p>
            <p style={{textAlign: 'center'}}> {'Screen Status : '+rotationWarn}  </p>
          </div> 
        </form>
      </div>{/* account-area end */}
    </div>
  </div>
</div>

  {/* footer section start  */}
  <footer className="footer-section bg_img" data-background="assets/images/footer.png">
   
<div className="container">
  <div className="row">
    <div className="col-lg-12">
      <div className="subscribe-area">
        <div className="obj"><img src="assets/images/subscribe.png" alt="image" /></div>
        <div className="subscribe-content">
          {/* <h2 className="title" id="test" >Invite your besties to get free Game pass</h2> <a href="#0" data-toggle="modal" data-target="#rotaionWarning">join now</a> */}
          <p>You will get one free game entry pass to win Rs 2,000 match for each invitaion, there no limit but only for the successfull partcipation from your request will get pass surely</p>
          <p></p>
          <form className="subscribe-form">
            <input type="email" name="subscribe_email" id="subscribe_email" placeholder="Phone number or  Email"/>
            <button type="submit">invite Now</button>
          </form>
        </div>
      </div>
    </div>
  </div>
  { 
    ismobile ? <>
    {/* mobile view */}
<div className="row footer-top mb-none-50">
    <div className="mb-50" style={{ paddingLeft: '20px '}}>
      <div className="footer-widget">
      <h3 class="footer-widget__title">ABOUT</h3>
            <ul class="short-links">
              <li><a href="#0">About Us</a></li>
              <li><a href="#0">Contact Us</a></li>
              <li><a href="#0">Customer Reviews</a></li>
              <li><a href="#0">Privacy Policy</a></li>
            </ul>
          </div>{/* footer-widget end */}
        </div>

        <div class="mb-50" style={{ paddingLeft: '30px '}}>
          <div class="footer-widget">
            <h3 class="footer-widget__title">MY ACCOUNT</h3>
            <ul class="short-links">
              <li><a href="#0">Manage My Account</a></li>
              <li><a href="#0">Account Varification</a></li>
              <li><a href="#0">Safety & Security</a></li>
            </ul>
          </div>{/* footer-widget end */}
        </div>
        <div class="mb-50" style={{ paddingLeft: '20px '}}>
          <div class="footer-widget" >
            <h3 class="footer-widget__title">HELP CENTER</h3>
            <ul class="short-links">
              <li><a href="#0">Help centre</a></li>
              <li><a href="#0">FAQ</a></li>
              <li><a href="#0">Quick Start Guide</a></li>
              <li><a href="#0">Tutorials</a></li>
            </ul>
          </div>{/* footer-widget end */}
        </div>
        <div class="mb-50" style={{ paddingLeft: '30px '}}>
          <div class="footer-widget">
            <h3 class="footer-widget__title">LEGAL INFO</h3>
            <ul class="short-links">
              <li><a href="#0">Security</a></li>
              <li><a href="#0">Terms of Service</a></li>
              <li><a href="#0">Become Affiliate</a></li>
              <li><a href="#0">Complaints Policy</a></li>
            </ul>
          </div>{/* footer-widget end */}
    </div>
  </div>
  {/* mobile view end */}
    </> : <>
    {/* desktop view */}
<div className="row footer-top mb-none-50">
    <div className="col-lg-3 col-sm-6 mb-50">
      <div className="footer-widget">
      <h3 class="footer-widget__title">ABOUT</h3>
            <ul class="short-links">
              <li><a href="#0">About Us</a></li>
              <li><a href="#0">Contact Us</a></li>
              <li><a href="#0">Customer Reviews</a></li>
              <li><a href="#0">Privacy Policy</a></li>
            </ul>
          </div>{/* footer-widget end */}
        </div>
        <div class="col-lg-3 col-sm-6 mb-50">
          <div class="footer-widget">
            <h3 class="footer-widget__title">MY ACCOUNT</h3>
            <ul class="short-links">
              <li><a href="#0">Manage Your Account</a></li>
              <li><a href="#0">Account Varification</a></li>
              <li><a href="#0">Safety & Security</a></li>
            </ul>
          </div>{/* footer-widget end */}
        </div>
        <div class="col-lg-3 col-sm-6 mb-50">
          <div class="footer-widget">
            <h3 class="footer-widget__title">HELP CENTER</h3>
            <ul class="short-links">
              <li><a href="#0">Help centre</a></li>
              <li><a href="#0">FAQ</a></li>
              <li><a href="#0">Quick Start Guide</a></li>
              <li><a href="#0">Tutorials</a></li>
            </ul>
          </div>{/* footer-widget end */}
        </div>
        <div class="col-lg-3 col-sm-6 mb-50">
          <div class="footer-widget">
            <h3 class="footer-widget__title">LEGAL INFO</h3>
            <ul class="short-links">
              <li><a href="#0">Security</a></li>
              <li><a href="#0">Terms of Service</a></li>
              <li><a href="#0">Become Affiliate</a></li>
              <li><a href="#0">Complaints Policy</a></li>
            </ul>
          </div>{/* footer-widget end */}
    </div>
  </div>
  {/* desktop view end */}
    </>
}

  <div className="row footer-bottom align-items-center">
    <div className="col-lg-7 col-md-6 text-md-left text-center">
      <p className="copy-right-text">All Rights Reserved By <a href="#0">Gammo</a> © 2022</p>
    </div>
    <div className="col-lg-5 col-md-6 mt-md-0 mt-3">
      <ul className="social-links justify-content-md-end justify-content-center">
        <li><a href="#0">G</a></li>
        <li><a href="#0">A</a></li>
        <li><a href="#0">M</a></li>
        <li><a href="#0">M</a></li>
        <li><a href="#0">O</a></li>
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

    )
}

