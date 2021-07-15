import { useRouter } from 'next/router';


export default function Navbar () {
    return(
        <div>
           <nav class="navbar navbar-default navbar-transparent navbar-fixed-top navbar-color-on-scroll">
				<div class="container">
					<div class="navbar-header">
						<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#main-navigation"> <span class="sr-only">Toggle Navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>
						<div class="title-logo-wrapper">
							<a class="navbar-brand" href="/" title="JLUM"><img src="/images/copy-copy.png" /></a>
						</div>
					</div>
					<div id="main-navigation" class="collapse navbar-collapse">
						<ul id="menu-e1-menu" class="nav navbar-nav navbar-right">
							<li id="menu-item-87" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-5 current_page_item menu-item-87 active"><a title="Home" href="http://localhost/">Home</a></li>
							<li id="menu-item-86" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-86"><a title="About us" href="http://localhost/about-us/">About us</a></li>
							<li id="menu-item-632" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-632"><a title="Live" href="http://localhost/live/">Live</a></li>
							<li id="menu-item-352" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-352"><a title="Sermons" href="http://localhost/sermons/">Sermons</a></li>
							{/* <li id="menu-item-82" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-82"><a title="My Account" href="http://localhost/my-account/">My Account</a></li> */}
							<li id="menu-item-164" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-164 dropdown"><a title="Online Bibble" href="#" data-toggle="dropdown" class="dropdown-toggle" aria-haspopup="true">Online Bibble <span class="caret"></span></a>
								<ul role="menu" class=" dropdown-menu">
									<li id="menu-item-120" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-120"><a title="English Bibble" href="http://localhost/englishbibble/">English Bibble</a></li>
									<li id="menu-item-155" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-155"><a title="Telugu bible desktop version" href="http://localhost/telugu-bibble-m/">Telugu bible desktop version</a></li>
									<li id="menu-item-144" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-144"><a title="Telugu bible mobile version" href="http://localhost/telugu-bibble-d/">Telugu bible mobile version</a></li>
									<li id="menu-item-385" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-385"><a title="Multi Language Bible" href="http://localhost/multi-language-bible/">Multi Language Bible</a></li>
								</ul>
							</li>
							<li id="menu-item-337" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-337"><a title="Prayer request" href="http://localhost/prayer-request/">Prayer request</a></li>
							<li id="menu-item-336" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-336"><a title="Contact us" href="http://localhost/contact-us/">Contact us</a></li>
							<li id="menu-item-673" class="menu-item menu-item-type-post_type menu-item-object-product menu-item-673"><a title="DONATE" href="http://localhost/shop/uncategorized/donate/">DONATE</a></li>
						</ul>
					</div>
				</div>
			</nav>
        </div>
    )
}