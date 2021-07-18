import { useRouter } from 'next/router';
import Link from 'next/link'


export default function Navbar () {
    return(
        <div>
			 <nav className="navbar navbar-default navbar-transparent navbar-fixed-top navbar-color-on-scroll">
				<div className="container">
					<div className="navbar-header">
						<button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#main-navigation"> <span className="sr-only">Toggle Navigation</span> <span className="icon-bar"></span> <span className="icon-bar"></span> <span className="icon-bar"></span> </button>
						<div className="title-logo-wrapper">
							<a className="navbar-brand" href="/" title="JLUM"><img src="/images/copy-copy.png" /></a>
						</div>
					</div>
					<div id="main-navigation" className="collapse navbar-collapse">
						<ul id="menu-e1-menu" className="nav navbar-nav navbar-right">
							<li id="menu-item-87" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-5 current_page_item menu-item-87 active"><Link href="/"><a title="Home" ><i className="_mi _before dashicons dashicons-admin-home" aria-hidden="true"> </i><span> Home</span></a></Link></li>
							<li id="menu-item-199" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-199"><Link href="/about"><a title="test" ><i className="_mi _before dashicons dashicons-pressthis" aria-hidden="true"> </i><span> About</span></a></Link></li>
							
							<li id="menu-item-199" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-199"><Link href="/donate"><a title="test" ><i className="_mi _before dashicons dashicons-format-status" aria-hidden="true"> </i><span> Sermons</span></a></Link></li>
							<li id="menu-item-164" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-164 dropdown"><a title="Online Bibble"  data-toggle="dropdown" className="dropdown-toggle" aria-haspopup="true"><i className="_mi _before dashicons dashicons-dashboard" aria-hidden="true"> </i><span> More</span> <span className="caret"></span></a>
								<ul role="menu" className=" dropdown-menu">
									<li id="menu-item-120" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-120"><a title="English Bibble" href="http://localhost/englishbibble/"><i className="_mi _before dashicons dashicons-book" aria-hidden="true"></i><span> English Bible</span></a></li>
									<li id="menu-item-155" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-155"><a title="Telugu bible desktop version" href="http://localhost/telugu-bibble-m/"><i className="_mi _before dashicons dashicons-book" aria-hidden="true"></i><span> Telugu bible desktop version</span></a></li>
									<li id="menu-item-144" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-144"><a title="Telugu bible mobile version" href="http://localhost/telugu-bibble-d/"><i className="_mi _before dashicons dashicons-book" aria-hidden="true"></i><span> Telugu bible mobile version</span></a></li>
									<li id="menu-item-385" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-385"><a title="Multi Language Bible" href="http://localhost/multi-language-bible/"><i className="_mi _before dashicons dashicons-book" aria-hidden="true"></i><span> Multi Language Bible</span></a></li>
								</ul>
							</li>

			



						
							<li id="menu-item-199" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-199"><Link href="/donate"><a title="test" ><i className="_mi _before dashicons dashicons-groups" aria-hidden="true"> </i><span> Payer Request</span></a></Link></li>
							<li id="menu-item-199" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-199"><Link href="/donate"><a title="test" ><i className="_mi _before dashicons dashicons-location" aria-hidden="true"> </i><span> Contact</span></a></Link></li>
							<li id="menu-item-197" className="btn btn-round btn-primary menu-item menu-item-type-custom menu-item-object-custom menu-item-197"><Link href="/donate"><a title="Donate" ><i className="_mi _before dashicons dashicons-lightbulb" aria-hidden="true"></i><span>  Donate</span></a></Link></li>
              <li id="menu-item-199" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-199"><Link href="/ligin"><a title="Login" ><i className="_mi _before dashicons dashicons-admin-network" aria-hidden="true"> </i><span></span></a></Link></li>
							
						</ul>
					</div>
				</div>
			</nav> 
           
			{/* <nav className="navbar navbar-default navbar-fixed-top  hestia_left navbar-not-transparent">
  <div className="container">
    <div className="navbar-header">
      <div className="title-logo-wrapper">
        <a className="navbar-brand" href="https://demo.themeisle.com/hestia/" title="Hestia">
          <p>Hestia</p>
        </a>
      </div>
      <div className="navbar-toggle-wrapper">
        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#main-navigation">
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="sr-only">Toggle Navigation</span>
        </button>
      </div>
    </div>
    <div id="main-navigation" className="collapse navbar-collapse">
      <ul id="menu-main-menu" className="nav navbar-nav">
        <li id="menu-item-196" className="hestia-mega-menu menu-item menu-item-type-custom menu-item-object-custom menu-item-home menu-item-has-children menu-item-196 dropdown">
          <a title="Features" href="https://demo.themeisle.com/hestia/#features" className="dropdown-toggle">
            <i className="_mi _before dashicons dashicons-cloud" aria-hidden="true"></i>
            <span>Features</span>
            <span className="caret-wrap">
              <span className="caret">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down" className="svg-inline--fa fa-chevron-down fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                </svg>
              </span>
            </span>
          </a>
          <ul role="menu" className="dropdown-menu">
            <li id="menu-item-3843" className="hestia-mm-col menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-3843 dropdown dropdown-submenu">
              <a title="col-1" href="#" className="dropdown-toggle">col-1 <span className="caret-wrap">
                  <span className="caret">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down" className="svg-inline--fa fa-chevron-down fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                      <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                    </svg>
                  </span>
                </span>
              </a>
              <ul role="menu" className="dropdown-menu">
                <li id="menu-item-4264" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4264">
                  <a title="1 minute setup" href="https://demo.themeisle.com/hestia/1-minute-setup-sample-content-available/">
                    <i className="_mi _before fa fa-clock-o" aria-hidden="true"></i>
                    <span>1 minute setup</span>
                  </a>
                </li>
                <li id="menu-item-4287" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4287">
                  <a title="Live Customizer" href="https://demo.themeisle.com/hestia/live-customizer/">
                    <i className="_mi _before fa fa-eye" aria-hidden="true"></i>
                    <span>Live Customizer</span>
                  </a>
                </li>
                <li id="menu-item-4288" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4288">
                  <a title="Video Tutorials" href="https://demo.themeisle.com/hestia/video-tutorials/">
                    <i className="_mi _before fa fa-video-camera" aria-hidden="true"></i>
                    <span>Video Tutorials</span>
                  </a>
                </li>
              </ul>
            </li>
            <li id="menu-item-3844" className="hestia-mm-col menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-3844 dropdown dropdown-submenu">
              <a title="col-2" href="#" className="dropdown-toggle">col-2 <span className="caret-wrap">
                  <span className="caret">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down" className="svg-inline--fa fa-chevron-down fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                      <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                    </svg>
                  </span>
                </span>
              </a>
              <ul role="menu" className="dropdown-menu">
                <li id="menu-item-4267" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4267">
                  <a title="Custom Backgrounds" href="https://demo.themeisle.com/hestia/custom-backgrounds/">
                    <i className="_mi _before fa fa-picture-o" aria-hidden="true"></i>
                    <span>Custom Backgrounds</span>
                  </a>
                </li>
                <li id="menu-item-4290" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4290">
                  <a title="SEO Optimized" href="https://demo.themeisle.com/hestia/seo-optimized/">
                    <i className="_mi _before fa fa-search" aria-hidden="true"></i>
                    <span>SEO Optimized</span>
                  </a>
                </li>
                <li id="menu-item-4291" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4291">
                  <a title="Translation &#038; RTL Ready" href="https://demo.themeisle.com/hestia/translation-rtl-ready/">
                    <i className="_mi _before fa fa-flag" aria-hidden="true"></i>
                    <span>Translation &#038; RTL Ready</span>
                  </a>
                </li>
              </ul>
            </li>
            <li id="menu-item-3845" className="hestia-mm-col menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-3845 dropdown dropdown-submenu">
              <a title="col-3" href="#" className="dropdown-toggle">col-3 <span className="caret-wrap">
                  <span className="caret">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down" className="svg-inline--fa fa-chevron-down fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                      <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                    </svg>
                  </span>
                </span>
              </a>
              <ul role="menu" className="dropdown-menu">
                <li id="menu-item-4269" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4269">
                  <a title="Responsive Design" href="https://demo.themeisle.com/hestia/responsive-design/">
                    <i className="_mi _before dashicons dashicons-art" aria-hidden="true"></i>
                    <span>Responsive Design</span>
                  </a>
                </li>
                <li id="menu-item-4293" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4293">
                  <a title="Optimized for Speed" href="https://demo.themeisle.com/hestia/optimized-for-speed/">
                    <i className="_mi _before fa fa-fast-forward" aria-hidden="true"></i>
                    <span>Optimized for Speed</span>
                  </a>
                </li>
                <li id="menu-item-4294" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4294">
                  <a title="Fast Updates &#038; Support" href="https://demo.themeisle.com/hestia/1-click-updates-fast-support/">
                    <i className="_mi _before fa fa-rocket" aria-hidden="true"></i>
                    <span>Fast Updates &#038; Support</span>
                  </a>
                </li>
              </ul>
            </li>
            <li id="menu-item-3854" className="hestia-mm-col menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-3854 dropdown dropdown-submenu">
              <a title="col-4" href="#" className="dropdown-toggle">col-4 <span className="caret-wrap">
                  <span className="caret">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down" className="svg-inline--fa fa-chevron-down fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                      <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                    </svg>
                  </span>
                </span>
              </a>
              <ul role="menu" className="dropdown-menu">
               <li id="menu-item-4273" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4273">
                  <a title="WooCommerce Ready" href="https://demo.themeisle.com/hestia/woocommerce-ready/">
                    <i className="_mi _before fa fa-money" aria-hidden="true"></i>
                    <span>WooCommerce Ready</span>
                  </a>
                </li>
                <li id="menu-item-4295" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4295">
                  <a title="Drag-and-Drop Builder" href="https://demo.themeisle.com/hestia/build-page-like/">
                    <i className="_mi _before fa fa-arrows" aria-hidden="true"></i>
                    <span>Drag-and-Drop Builder</span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li id="menu-item-115" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-115 dropdown">
          <a title="Sections" href="#sections" className="dropdown-toggle">
            <i className="_mi _before dashicons dashicons-align-center" aria-hidden="true"></i>
            <span>Sections</span>
            <span className="caret-wrap">
              <span className="caret">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down" className="svg-inline--fa fa-chevron-down fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                </svg>
              </span>
            </span>
          </a>
          <ul role="menu" className="dropdown-menu">
            <li id="menu-item-118" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-home menu-item-118">
              <a title="Features" href="https://demo.themeisle.com/hestia/#features">
                <i className="_mi _before dashicons dashicons-admin-tools" aria-hidden="true" ></i>
                <span>Features</span>
              </a>
            </li>
            <li id="menu-item-120" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-home menu-item-120">
              <a title="Our team" href="https://demo.themeisle.com/hestia/#team">
                <i className="_mi _before dashicons dashicons-admin-users" aria-hidden="true" ></i>
                <span>Our team</span>
              </a>
            </li>
            <li id="menu-item-122" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-home menu-item-122">
              <a title="Testimonials" href="https://demo.themeisle.com/hestia/#testimonials">
                <i className="_mi _before dashicons dashicons-testimonial" aria-hidden="true"></i>
                <span>Testimonials</span>
              </a>
            </li>
            <li id="menu-item-117" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-home menu-item-117">
              <a title="Subscribe" href="https://demo.themeisle.com/hestia/#subscribe">
                <i className="_mi _before dashicons dashicons-email-alt" aria-hidden="true"></i>
                <span>Subscribe</span>
              </a>
            </li>
            <li id="menu-item-119" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-home menu-item-119">
              <a title="Blog" href="https://demo.themeisle.com/hestia/#blog">
                <i className="_mi _before dashicons dashicons-admin-customizer" aria-hidden="true"></i>
                <span>Blog</span>
              </a>
            </li>
            <li id="menu-item-198" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-home menu-item-198">
              <a title="Contact" href="https://demo.themeisle.com/hestia/#contact">
                <i className="_mi _before dashicons dashicons-phone" aria-hidden="true"></i>
                <span>Contact</span>
              </a>
            </li>
          </ul>
        </li>
        <li id="menu-item-99" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-99">
          <a title="Shop" href="https://demo.themeisle.com/hestia/shop/">
            <i className="_mi _before dashicons dashicons-cart" aria-hidden="true"></i>
            <span>Shop</span>
          </a>
        </li>
        <li id="menu-item-28" className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-23 current_page_item current_page_parent menu-item-28 active">
          <a title="Blog" href="https://demo.themeisle.com/hestia/blog/">
            <i className="_mi _before dashicons dashicons-editor-ul" aria-hidden="true"></i>
            <span>Blog</span>
          </a>
        </li>
        <li id="menu-item-199" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-199">
          <a title="Contact" href="https://demo.themeisle.com/hestia/contact-us/">
            <i className="_mi _before dashicons dashicons-email" aria-hidden="true"></i>
            <span>Contact</span>
          </a>
        </li>
        <li id="menu-item-197" className="btn btn-round btn-primary menu-item menu-item-type-custom menu-item-object-custom menu-item-197">
          <a title="Download" href="https://themeisle.com/themes/hestia/#pricing-single">
            <i className="_mi _before dashicons dashicons-download" aria-hidden="true"></i>
            <span>Download</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav> */}



        </div>
    )
}