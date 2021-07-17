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
							<li id="menu-item-87" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-5 current_page_item menu-item-87 active"><Link href="/">Home</Link></li>
							<li id="menu-item-86" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-86"><Link href="/about">About</Link></li>
							<li id="menu-item-632" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-632"><a title="Live" href="http://localhost/live/">Live</a></li>
							<li id="menu-item-352" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-352"><a title="Sermons" href="http://localhost/sermons/">Sermons</a></li>
							{/* <li id="menu-item-82" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-82"><a title="My Account" href="http://localhost/my-account/">My Account</a></li> */}
							<li id="menu-item-164" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-164 dropdown"><a title="Online Bibble" href="#" data-toggle="dropdown" className="dropdown-toggle" aria-haspopup="true">Online Bibble <span className="caret"></span></a>
								<ul role="menu" className=" dropdown-menu">
									<li id="menu-item-120" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-120"><a title="English Bibble" href="http://localhost/englishbibble/">English Bibble</a></li>
									<li id="menu-item-155" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-155"><a title="Telugu bible desktop version" href="http://localhost/telugu-bibble-m/">Telugu bible desktop version</a></li>
									<li id="menu-item-144" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-144"><a title="Telugu bible mobile version" href="http://localhost/telugu-bibble-d/">Telugu bible mobile version</a></li>
									<li id="menu-item-385" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-385"><a title="Multi Language Bible" href="http://localhost/multi-language-bible/">Multi Language Bible</a></li>
								</ul>
							</li>
							<li id="menu-item-337" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-337"><a title="Prayer request" href="http://localhost/prayer-request/">Prayer request</a></li>
							<li id="menu-item-336" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-336"><a title="Contact us" href="http://localhost/contact-us/">Contact us</a></li>
							<li id="menu-item-673" className="menu-item menu-item-type-post_type menu-item-object-product menu-item-673"><Link href="/donate">donate</Link></li>
						</ul>
					</div>
				</div>
			</nav>
        </div>
    )
}