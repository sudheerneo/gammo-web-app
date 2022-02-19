import { Component } from "react";
import Link from 'next/link';
import { signin, signIn, signOut, useSession, getSession } from 'next-auth/client'

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
    this.state = {
		isMobile: false, 	
		menuClasses : 'menu-item menu-item-type-post_type menu-item-object-page menu-item-199 ',
		url: ''
	}
  }

  componentDidMount() {
    const windowWidth = window.innerWidth;
    windowWidth < 768 ? this.setState({isMobile : true}) : this.setState({isMobile : false}) ;

	
	const getUrl = window.location.pathname;
    getUrl === '/about' ? this.setState({ url: '/about'}) : 0 ;
    getUrl === '/prayer-request' ? this.setState({ url: '/prayer-=request'}) : 0 ;
    getUrl === '/contact' ? this.setState({ url: '/contact'}) : 0 ;
    getUrl === '/donate' ? this.setState({ url: '/donate'}) : 0 ;
	getUrl === '/' ? this.setState({ url: '/'}) : 0 ;


 }

  

  render() {  
	const {session, loading} = this.props;
  return(
        <div>
  {/* login modal */}
<div className="modal fade" id="loginModal" tabIndex="1" role="dialog" aria-hidden="true">
<div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
  <div className="modal-content bg-transparent">
    <div className="modal-body">
      <div className="account-area">
        <h3 className="title mb-4">Access your account</h3>
        <form className="account-form">
            
          <div className="text-center mt-4">
          <a href="#0" onClick={ () => {signIn('google')} }  className="google-btn mt-4 mb-3"><img src="assets/images/google.png" alt="image"/>Login with Google</a>
          {/* <p>Don't have an account? <a href="#0" data-dismiss="modal" data-toggle="modal" data-target="#signupModal">Sign up here</a></p> */}
        </div>
        </form>
        <div className="or-devider mt-5"><span>OR</span></div>
        <div className="text-center mt-4">
          <a href="#0" onClick={() => {alert('FB SDK curently unvailable . please try with Google Login' )}} className="google-btn mt-4 mb-3"><img src="assets/images/facebook.png" style={{height: "24px", width: '48px'}} alt="image"/>Login with Facebook</a>
          {/* <p>Don't have an account? <a href="#0" data-dismiss="modal" data-toggle="modal" data-target="#signupModal">Sign up here</a></p> */}
        </div>
       
         
      </div>{/* account-area end */}
    </div>
  </div> <div className="form-group">
            <p><a href="#0">Access your account with cloud logins securely</a></p>
          </div>
</div>
</div>

{/* Sign Up modal */}
<div className="modal fade" id="signupModal" tabIndex="1" role="dialog" aria-hidden="true">
<div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
  <div className="modal-content bg-transparent">
    <div className="modal-body">
      <div className="account-area">
        <h3 className="title mb-4">Let's get started</h3>
        <div className="text-center mt-4">
          <a href="#0" className="google-btn mt-4 mb-3"><img src="assets/images/google.png" alt="image"/>Sign Up with Google</a>
        </div>
        <div className="or-devider mt-4"><span>OR</span></div>
        <p className="text-center mt-2 mb-4">Sign up with your work email</p>
        <form className="account-form">
          <div className="form-group">
            <label>Your Email </label>
            <input type="email" name="login_email" placeholder="Enter Your Email" className="form-control"/>
          </div>
          <div className="text-center">
            <button type="submit" className="cmn-btn">Try It Now</button>
          </div>
        </form>
        <p className="text-center mt-3">Already have an account?<a href="#0" data-dismiss="modal" data-toggle="modal" data-target="#loginModal">Sign In</a></p>
      </div>{/* account-area end */}
    </div>
  </div>
</div>
</div>

{/* header-section start  */}
<header className="header"> 
<div className="header__bottom">
  <div className="container">
    <nav className="navbar navbar-expand-xl align-items-center">
    <Link href='/'><a className="site-logo site-title" ><img src="assets/images/logo.png" alt="site-logo"/><span className="logo-icon"><i className="flaticon-fire"></i></span></a></Link>


{/* */}

<div className=" ml-auto nav-right" style={{listStyle: 'none', paddingRight: '15px'}}>
        {
                this.state.isMobile &&
                <>
                {!this.props.session && <>
                <li className="menu_has_children" ><a style={{backgroundColor: 'transparent'}} title='Login'  data-toggle="dropdown" className="" aria-haspopup="true"><span ><i className="_mi _before dashicons dashicons-migrate" aria-hidden="true"></i></span></a>
                <ul role="menu" className="sub-menu dropdown-menu" style={{ textAlign: 'center',  left: 'auto', right: '0', backgroundImage: '-webkit-linear-gradient(89deg, #5f16a9 0%, #cf15f8 100%)'}}>
                    <li onClick={ () => {signIn('google')} } ><a style={{backgroundColor: 'transparent'}} title="Login with google" ><span>Login with </span> <i className="_mi _before dashicons dashicons-google" style={{color: 'skyblue'}}  aria-hidden="true"></i></a></li>
                    <li onClick={ () => {signIn('google')} } ><a style={{backgroundColor: 'transparent'}} title="Login with facebook" ><span>Login with </span> <i className="_mi _before dashicons dashicons-facebook" style={{color: 'blue'}}  aria-hidden="true"></i></a></li>
                </ul>
            </li>
            </>}
            {this.props.session && <>									
            <li ><a style={{backgroundColor: 'transparent'}} title={this.props.session.user.name || this.props.session.user.email}  data-toggle="dropdown" className="dropdown-toggle" aria-haspopup="true"><img className="_mi _before dashicons dashicons-admin-network"  style={{verticalAlign: "middle", width: 50, height: 50, padding: 0, borderRadius: "50%"}} src={this.props.session.user.image} alt={this.props.session.user.name} /> <span className="caret"  ></span></a>
                <ul role="menu" className=" dropdown-menu"  style={{ textAlign: 'left',  left: 'auto', right: '0', padding: '10px', backgroundImage: '-webkit-linear-gradient(89deg, #5f16a9 0%, #cf15f8 100%)'}}>
                    <p >Hello <i className="_mi _before dashicons dashicons-reddit" aria-hidden="true"> </i><br /><strong>{this.props.session.user.name || this.props.session.user.email}</strong></p>
                    <li><Link href="/dashboard"><a style={{backgroundColor: 'transparent'}} title="Show dashboard" ><i className="_mi _before dashicons dashicons-art" aria-hidden="true" style={{color: 'white'}} ></i> <span>Dashboard</span></a></Link></li>
                    <li><Link href="/settings"><a style={{backgroundColor: 'transparent'}} title="Display and manipulate settings" ><i className="_mi _before dashicons dashicons-admin-generic" style={{color: 'white'}}  aria-hidden="true"></i> <span>Settings</span></a></Link></li>
                    <li><a style={{backgroundColor: 'transparent'}} title="logout from your account" onClick={signOut}><i className="_mi _before dashicons dashicons-privacy" style={{color: 'white'}}  aria-hidden="true"></i> <span>Logout</span></a></li>
                </ul>
            </li>
            </>}</>}
        </div>
    
{/*  */}

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="menu-toggle"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav main-menu ml-auto">
          <li className="menu_has_children">
            <a href="#0">Home</a>
            <ul className="sub-menu">
              <li><a href="index.html">Home One</a></li>
              <li><a href="index-two.html">Home Two</a></li>
            </ul>
          </li>
          <li className="menu_has_children">
            <a href="#0">Games</a>
            <ul className="sub-menu">
              <li><a href="games.html">All Games</a></li>
              <li><a href="game-details.html">Game Details</a></li>
            </ul>
          </li>
          <li className="menu_has_children">
            <a href="#0">Blog</a>
            <ul className="sub-menu">
              <li><a href="blog-one.html">Blog One</a></li>
              <li><a href="blog-two.html">Blog Two</a></li>
              <li><a href="blog-details.html">Blog Details</a></li>
            </ul>
          </li>
          <li className="menu_has_children">
            <a href="#0">pages</a>
            <ul className="sub-menu">
              <li><a href="about.html">About Us</a></li>
            </ul>
          </li>
          <li><a href="contact.html">contact</a></li>
        </ul>
        <div className="nav-right">
        {!this.state.isMobile &&  <>
        {!this.props.session && <>
          {/* <a onClick={ () => {signIn('google')} }  >Access your Account</a> */}

          <a href="#0" data-toggle="modal" data-target="#loginModal">Access Your Account</a>
          </>}
          {this.props.session && <>		
            <div className=" ml-auto" style={{listStyle: 'none', paddingRight: '15px'}}>							
            <li ><a style={{backgroundColor: 'transparent'}} title={this.props.session.user.name || this.props.session.user.email}  data-toggle="dropdown" className="dropdown-toggle" aria-haspopup="true"><img className="_mi _before dashicons dashicons-admin-network"  style={{verticalAlign: "middle", width: 50, height: 50, padding: 0, borderRadius: "50%"}} src={this.props.session.user.image} alt={this.props.session.user.name} /> <span className="caret"  ></span></a>
                <ul role="menu" className=" dropdown-menu"  style={{ textAlign: 'left',  left: 'auto', right: '0', padding: '10px', backgroundImage: '-webkit-linear-gradient(89deg, #5f16a9 0%, #cf15f8 100%)'}}>
                    <p style={{color: 'white'}}>Hello <i className="_mi _before dashicons dashicons-reddit" aria-hidden="true"> </i><br /><strong>{this.props.session.user.name || this.props.session.user.email}</strong></p>
                    <li><Link href="/dashboard"><a style={{backgroundColor: 'transparent'}} title="Show dashboard" ><i className="_mi _before dashicons dashicons-art" aria-hidden="true" style={{color: 'white'}} ></i> <span>Dashboard</span></a></Link></li>
                    <li><Link href="/settings"><a style={{backgroundColor: 'transparent'}} title="Display and manipulate settings" ><i className="_mi _before dashicons dashicons-admin-generic" style={{color: 'white'}}  aria-hidden="true"></i> <span>Settings</span></a></Link></li>
                    <li><a style={{backgroundColor: 'transparent'}} title="logout from your account" onClick={signOut}><i className="_mi _before dashicons dashicons-privacy" style={{color: 'white'}}  aria-hidden="true"></i> <span>Logout</span></a></li>
                </ul>
            </li>
            </div>
            </>}</>}
        </div>
      </div>
    </nav>
  </div>
</div>{/* header__bottom end */}
</header>
{/* header-section end  */}

{/* {!this.props.session && 
     <>
     <li id="menu-item-164" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-164 dropdown " ><a title='Login'  data-toggle="dropdown" className="dropdown-toggle" aria-haspopup="true"><span ><i className="_mi _before dashicons dashicons-migrate" aria-hidden="true"></i></span></a>
         <ul role="menu" className=" dropdown-menu" >
             <li onClick={ () => {signIn('google')} } id="menu-item-120" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-120"><a title="Login with Facebook" ><i className="_mi _before dashicons dashicons-google" style={{color: 'deeppink'}} aria-hidden="true"></i><span>Login with Google</span></a></li>
         </ul>
     </li>
   </>     
}  
{this.props.session && <>									
            <li  id="menu-item-164" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-164 dropdown"><a title={this.props.session.user.name || this.props.session.user.email}  data-toggle="dropdown" className="dropdown-toggle" aria-haspopup="true"><img className="_mi _before dashicons dashicons-admin-network"  style={{verticalAlign: "middle", width: 50, height: 50, padding: 0, borderRadius: "50%"}} src={this.props.session.user.image} alt={this.props.session.user.name} /> <span className="caret"  ></span></a>
                <ul role="menu" className=" dropdown-menu">
                    <p style={{color: "black", paddingLeft: 20}}>Hello <i className="_mi _before dashicons dashicons-reddit" aria-hidden="true"> </i><br /><strong>{this.props.session.user.name || this.props.session.user.email}</strong></p>
                    <li id="menu-item-144" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-144"><Link href="/dashboard"><a title="Show dashboard" ><i className="_mi _before dashicons dashicons-art" aria-hidden="true" style={{color: 'deeppink'}} ></i><span>Dashboard</span></a></Link></li>
                    <li id="menu-item-120" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-120"><Link href="/settings"><a title="Display and manipulate settings" ><i className="_mi _before dashicons dashicons-admin-generic" style={{color: 'deeppink'}}  aria-hidden="true"></i><span>Settings</span></a></Link></li>
                    <li id="menu-item-155" role="button"  className=" menu-item menu-item-type-post_type menu-item-object-page menu-item-155"><a title="logout from your account" onClick={signOut}><i className="_mi _before dashicons dashicons-privacy" style={{color: 'deeppink'}}  aria-hidden="true"></i><span>Logout</span></a></li>
                </ul>
            </li>
            </>}



*/}



			
        </div>

		
    )
}}

const Navbar = withSession(Navbarclass)
export default Navbar;


