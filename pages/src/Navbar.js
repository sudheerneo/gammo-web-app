import { Component } from "react";
import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/client'
const out = (val) => {console.log(val)}

const withSession = Component => props => {
	const [session, loading] = useSession()
  
	  // if the component has a render property, we are good
	  if (Component.prototype.render) { 
		return <Component session={session} loading={loading} {...props} />
	  }
  
	  // if the passed component is a function component, there is no need for this wrapper
	  throw new Error([
	   "You passed a function component, `withSession` is not needed.",
	   "You can `useSession` directly in your component."
	  ].join("\n"))
  };

class Navbarclass extends Component {
  constructor() {
    super()
    this.state = {donateBtn: false}
  }
	
  componentDidMount() {
	 const url = window.location.pathname;
	 url === '/donate' ? this.setState({donateBtn: "green"}) :  0

  }
  

  render() {  
	const {session, loading} = this.props;
  return(
        <div>
			 <nav className="navbar navbar-default navbar-transparent navbar-fixed-top navbar-color-on-scroll">
				<div className="container">
					<div className="navbar-header">
						<button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#main-navigation"> <span className="sr-only">Toggle Navigation</span> <span className="icon-bar"></span> <span className="icon-bar"></span> <span className="icon-bar"></span> </button>
						<div className="title-logo-wrapper">
							<a className="navbar-brand" href="/" title="JLUM"><img src="/images/navlogo.png" /></a>
						</div>
					</div>
					<div id="main-navigation" className="collapse navbar-collapse">
						<ul id="menu-e1-menu" className="nav navbar-nav navbar-right">
							<li id="menu-item-87" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-5 current_page_item menu-item-87 active"><Link href="/"><a title="Home page" ><i className="_mi _before dashicons dashicons-admin-home" aria-hidden="true"> </i><span> Home</span></a></Link></li>
							<li id="menu-item-199" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-199"><Link href="/about"><a title="About JLUM journey" ><i className="_mi _before dashicons dashicons-pressthis" aria-hidden="true"> </i><span> About</span></a></Link></li>
							<li id="menu-item-164" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-164 dropdown"><a title="other services of JLUM"  data-toggle="dropdown" className="dropdown-toggle" aria-haspopup="true"><i className="_mi _before dashicons dashicons-dashboard" aria-hidden="true"> </i><span> Sermons</span> <span className="caret"></span></a>
								<ul role="menu" className=" dropdown-menu">
									<li id="menu-item-144" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-144"><Link href="/sermons"><a title="sermons" ><i className="_mi _before dashicons dashicons-format-status" aria-hidden="true"></i><span> Sermons</span></a></Link></li>
									<li id="menu-item-120" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-120"><Link href="/english-bible"><a title="Display English Bibble" ><i className="_mi _before dashicons dashicons-book" aria-hidden="true"></i><span> English Bible</span></a></Link></li>
									<li id="menu-item-155" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-155"><Link href="/telugu-bible"><a title="Display Telugu bible"><i className="_mi _before dashicons dashicons-book-alt" aria-hidden="true"></i><span> Telugu bible desktop version</span></a></Link></li>
								</ul>
							</li>
							<li id="menu-item-199" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-199"><Link href="/prayer-request"><a title="ask or create prayer request" ><i className="_mi _before dashicons dashicons-groups" aria-hidden="true"> </i><span> Payer Request</span></a></Link></li>
							<li id="menu-item-199" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-199"><Link href="/contact"><a title="contact details of JLUM" ><i className="_mi _before dashicons dashicons-location" aria-hidden="true"> </i><span> Contact</span></a></Link></li>
							<li id="menu-item-197" style={{backgroundColor: this.state.donateBtn}} className="btn btn-round btn-primary menu-item menu-item-type-custom menu-item-object-custom menu-item-197"><Link href="/donate"><a title="Donate to JLUM" ><i className="_mi _before dashicons dashicons-awards" aria-hidden="true"></i><span>  Donate <i className="_mi _before dashicons dashicons-awards" aria-hidden="true"></i></span></a></Link></li>
              				
							{/* if user not logged in display login */}
							{!this.props.session && <>
								<li id="menu-item-199" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-199"><Link href="/api/auth/signin"><a title="Login to account" ><i className="_mi _before dashicons dashicons-admin-network" aria-hidden="true"> </i><span></span></a></Link></li>
							</>}
							{/* if user logged in display menu*/}
							{this.props.session && <>									
							<li id="menu-item-164" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-164 dropdown"><a title={this.props.session.user.name || this.props.session.user.email}  data-toggle="dropdown" className="dropdown-toggle" aria-haspopup="true"><img style={{verticalAlign: "middle", width: 30, borderRadius: "50%"}} src={this.props.session.user.image} alt={this.props.session.user.name} /> <span className="caret"></span></a>
								<ul role="menu" className=" dropdown-menu">
									<p style={{color: "black", paddingLeft: 20}}>Hello <i className="_mi _before dashicons dashicons-reddit" aria-hidden="true"> </i><br /><strong>{this.props.session.user.name || this.props.session.user.email}</strong></p>
									<li id="menu-item-144" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-144"><Link href="/dashboard"><a title="Show dashboard" ><i className="_mi _before dashicons dashicons-art" aria-hidden="true"></i><span>Dashboard</span></a></Link></li>
									<li id="menu-item-120" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-120"><Link href="/settings"><a title="Display and manipulate settings" ><i className="_mi _before dashicons dashicons-admin-generic" aria-hidden="true"></i><span>Settings</span></a></Link></li>
									<li id="menu-item-155" role="button"  className=" menu-item menu-item-type-post_type menu-item-object-page menu-item-155"><a title="logout from your account" onClick={signOut}><i className="_mi _before dashicons dashicons-privacy" aria-hidden="true"></i><span>Logout</span></a></li>
								</ul>
							</li>
							</>}
							
						</ul>
					</div>
				</div>
			</nav> 
           
		
        </div>
    )
}}

const Navbar = withSession(Navbarclass)
export default Navbar;


