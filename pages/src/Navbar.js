import { Component } from "react";
import Link from "next/link";
import $ from "jquery";
import { useEffect } from "react";
// import "../../public/js/app.js";
import {
    signin,
    signIn,
    signOut,
    useSession,
    getSession,
    getCsrfToken,
} from "next-auth/client";

const withSession = (Component) => (props) => {
    // const [session, loading] = useSession();
    const { data: session, loading } = useSession();
    // console.log("mainData: " + session?.error);
    useEffect(() => {
        if (session?.error === "RefreshAccessTokenError") {
            signIn(); // Force sign in to hopefully resolve error
        }
    }, [session]);

    // if the component has a render property, we are good
    if (Component.prototype.render) {
        return <Component session={session} loading={loading} {...props} />;
    }

    // if the passed component is a function component, there is no need for this wrapper
    throw new Error(
        [
            "You passed a function component, `withSession` is not needed.",
            "You can `useSession` directly in your component.",
        ].join("\n")
    );
};

class Navbarclass extends Component {
    constructor() {
        super();
        this.state = {
            isMobile: false,
            currentTime: new Date().toLocaleTimeString(),
            menuClasses:
                "menu-item menu-item-type-post_type menu-item-object-page menu-item-199 ",
            url: "",
            loader: "block",
            mobileMenu: "",
            menu1: false,
            menu2: false,
            menu3: false,
            menu4: false,
        };
    }

    componentDidMount() {
        //loader setup
        setTimeout(() => {
            this.setState({ loader: "none" });
        }, 1000);

        this.intervalID = setInterval(() => {
            this.setState({
                currentTime: new Date().toLocaleTimeString(),
            });
        }, 1000);

        // Animate the scroll to top
        $(".scroll-to-top").on("click", function (event) {
            event.preventDefault();
            $("html, body").animate({ scrollTop: 0 }, 300);
        });

        const windowWidth = window.innerWidth;
        windowWidth < 768
            ? this.setState({ isMobile: true })
            : this.setState({ isMobile: false });

        const getUrl = window.location.pathname;
        getUrl === "/about" ? this.setState({ url: "/about" }) : 0;
        getUrl === "/prayer-request"
            ? this.setState({ url: "/prayer-=request" })
            : 0;
        getUrl === "/contact" ? this.setState({ url: "/contact" }) : 0;
        getUrl === "/donate" ? this.setState({ url: "/donate" }) : 0;
        getUrl === "/" ? this.setState({ url: "/" }) : 0;
    }

    componentWillUnmount() {
        clearInterval(this.intervalID);
    }
    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    menuHandler = (val) => {
        val === 1 ? this.setState({ menu1: !this.state.menu1 }) : 0;
        val === 2 ? this.setState({ menu2: !this.state.menu2 }) : 0;
        val === 3 ? this.setState({ menu3: !this.state.menu3 }) : 0;
        val === 4 ? this.setState({ menu4: !this.state.menu4 }) : 0;
    };

    render() {
        const { session, loading } = this.props;
        return (
            <div>
                {/* prealoader start  */}
                {/* <div className="preloader" style={{ display: this.state.loader }}>
          <div className="spinner">
            <div className="dot1"></div>
            <div className="dot2"></div>
          </div>
        </div> */}
                {/* prealoader end */}
                {/* login modal */}
                <div
                    className="modal fade"
                    id="loginModal"
                    tabIndex="1"
                    role="dialog"
                    aria-hidden="true"
                >
                    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                        <div className="modal-content bg-transparent">
                            <div className="modal-body">
                                <div className="account-area">
                                    <h3 className="title mb-4">
                                        Access your account
                                    </h3>
                                    <form className="account-form">
                                        <div className="text-center mt-4">
                                            <a
                                                href="#0"
                                                onClick={() => {
                                                    signIn("google");
                                                }}
                                                className="google-btn mt-4 mb-3"
                                            >
                                                <img
                                                    src="assets/images/google.png"
                                                    alt="gogle loginimage"
                                                />
                                                Login with Google
                                            </a>
                                            {/* <p>Don't have an account? <a href="#0" data-dismiss="modal" data-toggle="modal" data-target="#signupModal">Sign up here</a></p> */}
                                        </div>
                                    </form>
                                    <div className="or-devider mt-5">
                                        <span>OR</span>
                                    </div>
                                    <div className="text-center mt-4">
                                        <a
                                            href="#0"
                                            onClick={() => {
                                                alert(
                                                    "FB SDK curently unvailable . please try with Google Login"
                                                );
                                            }}
                                            className="google-btn mt-4 mb-3"
                                        >
                                            <img
                                                src="assets/images/facebook.png"
                                                style={{
                                                    height: "24px",
                                                    width: "48px",
                                                }}
                                                alt="fb logo"
                                            />
                                            Login with Facebook
                                        </a>
                                        {/* <p>Don't have an account? <a href="#0" data-dismiss="modal" data-toggle="modal" data-target="#signupModal">Sign up here</a></p> */}
                                    </div>
                                </div>
                                {/* account-area end */}
                            </div>
                        </div>{" "}
                        <div className="form-group">
                            <p>
                                <a href="#0">
                                    Access your account with cloud logins
                                    securely
                                </a>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Sign Up modal */}
                <div
                    className="modal fade"
                    id="signupModal"
                    tabIndex="1"
                    role="dialog"
                    aria-hidden="true"
                >
                    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                        <div className="modal-content bg-transparent">
                            <div className="modal-body">
                                <div className="account-area">
                                    <h3 className="title mb-4">
                                        Let's get started
                                    </h3>
                                    <div className="text-center mt-4">
                                        <a
                                            href="#0"
                                            className="google-btn mt-4 mb-3"
                                        >
                                            <img
                                                src="assets/images/google.png"
                                                alt="google logo"
                                            />
                                            Sign Up with Google
                                        </a>
                                    </div>
                                    <div className="or-devider mt-4">
                                        <span>OR</span>
                                    </div>
                                    <p className="text-center mt-2 mb-4">
                                        Sign up with your work email
                                    </p>
                                    <form className="account-form">
                                        <div className="form-group">
                                            <label>Your Email </label>
                                            <input
                                                type="email"
                                                name="login_email"
                                                placeholder="Enter Your Email"
                                                className="form-control"
                                            />
                                        </div>
                                        <div className="text-center">
                                            <button
                                                type="submit"
                                                className="cmn-btn"
                                            >
                                                Try It Now
                                            </button>
                                        </div>
                                    </form>
                                    <p className="text-center mt-3">
                                        Already have an account?
                                        <a
                                            href="#0"
                                            data-dismiss="modal"
                                            data-toggle="modal"
                                            data-target="#loginModal"
                                        >
                                            Sign In
                                        </a>
                                    </p>
                                </div>
                                {/* account-area end */}
                            </div>
                        </div>
                    </div>
                </div>

                {/* header-section start  */}
                <header className="header">
                    <div className="header__bottom">
                        <div
                            className="menuBar"
                            style={
                                this.state.isMobile
                                    ? { paddingLeft: 0, paddingRight: 0 }
                                    : { display: "block" }
                            }
                        >
                            <nav className="navbar navbar-expand-xl align-items-center">
                                <Link href="/" passHref prefetch={false}>
                                    <a className="site-logo site-title">
                                        <img
                                            src="assets/images/logo.png"
                                            alt="site-logo"
                                        />
                                        <span className="logo-icon">
                                            <i className="flaticon-fire"></i>
                                        </span>
                                    </a>
                                </Link>

                                {/* */}

                                <div
                                    className=" ml-auto"
                                    style={{
                                        listStyle: "none",
                                        paddingRight: "15px",
                                    }}
                                >
                                    {this.state.isMobile && (
                                        <>
                                            {!this.props.session && (
                                                <>
                                                    <li className="menu_has_children">
                                                        <a
                                                            style={{
                                                                backgroundColor:
                                                                    "transparent",
                                                            }}
                                                            title="Login"
                                                            data-toggle="dropdown"
                                                            className=""
                                                            aria-haspopup="true"
                                                        >
                                                            <span>
                                                                <i
                                                                    className="_mi _before dashicons dashicons-admin-users"
                                                                    // className="_mi _before dashicons dashicons-migrate"
                                                                    aria-hidden="true"
                                                                    style={{
                                                                        fontSize:
                                                                            "25px",
                                                                    }}
                                                                ></i>
                                                            </span>
                                                        </a>
                                                        <ul
                                                            role="menu"
                                                            className="nav-right sub-menu dropdown-menu"
                                                            style={{
                                                                textAlign:
                                                                    "center",
                                                                left: "auto",
                                                                right: "0",
                                                                backgroundImage:
                                                                    "-webkit-linear-gradient(89deg, #5f16a9 0%, #cf15f8 100%)",
                                                            }}
                                                        >
                                                            <li
                                                                onClick={() => {
                                                                    signIn(
                                                                        "google"
                                                                    );
                                                                }}
                                                            >
                                                                <a
                                                                    style={{
                                                                        backgroundColor:
                                                                            "transparent",
                                                                    }}
                                                                    title="Login with google"
                                                                >
                                                                    <span>
                                                                        Login
                                                                        with{" "}
                                                                    </span>{" "}
                                                                    <i
                                                                        className="_mi _before dashicons dashicons-google"
                                                                        style={{
                                                                            color: "skyblue",
                                                                        }}
                                                                        aria-hidden="true"
                                                                    ></i>
                                                                </a>
                                                            </li>
                                                            <li
                                                                onClick={() => {
                                                                    signIn(
                                                                        "google"
                                                                    );
                                                                }}
                                                            >
                                                                <a
                                                                    style={{
                                                                        backgroundColor:
                                                                            "transparent",
                                                                    }}
                                                                    title="Login with facebook"
                                                                >
                                                                    <span>
                                                                        Login
                                                                        with{" "}
                                                                    </span>{" "}
                                                                    <i
                                                                        className="_mi _before dashicons dashicons-facebook"
                                                                        style={{
                                                                            color: "blue",
                                                                        }}
                                                                        aria-hidden="true"
                                                                    ></i>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </>
                                            )}
                                            {this.props.session && (
                                                <>
                                                    <li>
                                                        <a
                                                            style={{
                                                                backgroundColor:
                                                                    "transparent",
                                                            }}
                                                            title={
                                                                this.props
                                                                    .session
                                                                    .user
                                                                    .name ||
                                                                this.props
                                                                    .session
                                                                    .user.email
                                                            }
                                                            data-toggle="dropdown"
                                                            className="dropdown-toggle"
                                                            aria-haspopup="true"
                                                        >
                                                            <img
                                                                className="_mi _before dashicons dashicons-admin-network"
                                                                style={{
                                                                    verticalAlign:
                                                                        "middle",
                                                                    width: 50,
                                                                    height: 50,
                                                                    padding: 5,
                                                                    borderRadius:
                                                                        "50%",
                                                                }}
                                                                src={
                                                                    this.props
                                                                        .session
                                                                        .user
                                                                        .image
                                                                }
                                                                alt={
                                                                    this.props
                                                                        .session
                                                                        .user
                                                                        .name
                                                                }
                                                            />{" "}
                                                            <span className="caret"></span>
                                                        </a>
                                                        <ul
                                                            role="menu"
                                                            className="nav-right dropdown-menu"
                                                            style={{
                                                                textAlign:
                                                                    "left",
                                                                left: "auto",
                                                                right: "0",
                                                                padding: "10px",
                                                                backgroundImage:
                                                                    "-webkit-linear-gradient(89deg, #5f16a9 0%, #cf15f8 100%)",
                                                            }}
                                                        >
                                                            <p>
                                                                Hello{" "}
                                                                <i
                                                                    className="_mi _before dashicons dashicons-reddit"
                                                                    aria-hidden="true"
                                                                >
                                                                    {" "}
                                                                </i>
                                                                <br />
                                                                <strong>
                                                                    {this.props
                                                                        .session
                                                                        .user
                                                                        .name ||
                                                                        this
                                                                            .props
                                                                            .session
                                                                            .user
                                                                            .email}
                                                                </strong>
                                                            </p>
                                                            <li>
                                                                <Link
                                                                    href="/dashboard"
                                                                    passHref
                                                                >
                                                                    <a
                                                                        style={{
                                                                            backgroundColor:
                                                                                "transparent",
                                                                        }}
                                                                        title="Show dashboard"
                                                                    >
                                                                        <i
                                                                            className="_mi _before dashicons dashicons-art"
                                                                            aria-hidden="true"
                                                                            style={{
                                                                                color: "white",
                                                                            }}
                                                                        ></i>{" "}
                                                                        <span>
                                                                            Dashboard
                                                                        </span>
                                                                    </a>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    href="/settings"
                                                                    passHref
                                                                >
                                                                    <a
                                                                        style={{
                                                                            backgroundColor:
                                                                                "transparent",
                                                                        }}
                                                                        title="Display and manipulate settings"
                                                                    >
                                                                        <i
                                                                            className="_mi _before dashicons dashicons-admin-generic"
                                                                            style={{
                                                                                color: "white",
                                                                            }}
                                                                            aria-hidden="true"
                                                                        ></i>{" "}
                                                                        <span>
                                                                            Settings
                                                                        </span>
                                                                    </a>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    style={{
                                                                        backgroundColor:
                                                                            "transparent",
                                                                    }}
                                                                    title="logout from your account"
                                                                    onClick={
                                                                        signOut
                                                                    }
                                                                >
                                                                    <i
                                                                        className="_mi _before dashicons dashicons-privacy"
                                                                        style={{
                                                                            color: "white",
                                                                        }}
                                                                        aria-hidden="true"
                                                                    ></i>{" "}
                                                                    <span>
                                                                        Logout
                                                                    </span>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </>
                                            )}
                                        </>
                                    )}
                                </div>

                                {/* hide  */}

                                <button
                                    className="navbar-toggler"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#navbarSupportedContent"
                                    aria-controls="navbarSupportedContent"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                >
                                    <span className="menu-toggle"></span>
                                </button>
                                <div
                                    className="collapse navbar-collapse"
                                    id="navbarSupportedContent"
                                >
                                    <ul className="navbar-nav main-menu ml-auto">
                                        <li
                                            className={`menu_has_children ${
                                                this.state.menu1 === true
                                                    ? "open"
                                                    : ""
                                            }`}
                                        >
                                            <a
                                                onClick={() => {
                                                    this.menuHandler(1);
                                                }}
                                            >
                                                LOBBY
                                            </a>
                                            <ul className="sub-menu">
                                                <li>
                                                    <Link
                                                        href="/lobby"
                                                        prefetch={false}
                                                    >
                                                        <a>2K LOBBY</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <a href="blog-two.html">
                                                        4K LOBBY
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="blog-two.html">
                                                        FREE GAME PASS LOBBY
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="blog-one.html">
                                                        HOME
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li
                                            className={`menu_has_children ${
                                                this.state.menu2 === true
                                                    ? "open"
                                                    : ""
                                            }`}
                                        >
                                            <a
                                                onClick={() => {
                                                    this.menuHandler(2);
                                                }}
                                            >
                                                Games
                                            </a>
                                            <ul className="sub-menu">
                                                <li>
                                                    <a href="blog-one.html">
                                                        BGMI
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="blog-two.html">
                                                        PUBG LITE
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="blog-details.html">
                                                        COD MOBILE
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="blog-details.html">
                                                        FREE FIRE
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li
                                            className={`menu_has_children ${
                                                this.state.menu3 === true
                                                    ? "open"
                                                    : ""
                                            }`}
                                        >
                                            <a
                                                onClick={() => {
                                                    this.menuHandler(3);
                                                }}
                                            >
                                                SUPPORT
                                            </a>
                                            <ul className="sub-menu">
                                                <li>
                                                    <a href="blog-one.html">
                                                        WITHDRAWALS
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="blog-two.html">
                                                        PURCHASE BASED
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="blog-two.html">
                                                        OTHERS
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li
                                            className={`menu_has_children ${
                                                this.state.menu4 === true
                                                    ? "open"
                                                    : ""
                                            }`}
                                        >
                                            <a
                                                onClick={() => {
                                                    this.menuHandler(4);
                                                }}
                                            >
                                                REWARDS
                                            </a>
                                            <ul className="sub-menu">
                                                <li>
                                                    <a href="blog-one.html">
                                                        REWARDS
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="blog-two.html">
                                                        GAME PASS STORE
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li
                                            className={`menu_has_children ${
                                                this.state.menu4 === true
                                                    ? "open"
                                                    : ""
                                            }`}
                                        >
                                            <a
                                                style={{ color: "#66FF99" }}
                                                onClick={() => {
                                                    this.menuHandler(4);
                                                }}
                                            >
                                                {this.state.currentTime}
                                            </a>
                                        </li>
                                    </ul>
                                    <div className="nav-right">
                                        {!this.state.isMobile && (
                                            <>
                                                {!this.props.session && (
                                                    <>
                                                        {/* <a onClick={ () => {signIn('google')} }  >Access your Account</a> */}

                                                        <a
                                                            href="#0"
                                                            data-toggle="modal"
                                                            data-target="#loginModal"
                                                        >
                                                            Access Your Account
                                                        </a>
                                                    </>
                                                )}
                                                {this.props.session && (
                                                    <>
                                                        <div
                                                            className=" ml-auto"
                                                            style={{
                                                                listStyle:
                                                                    "none",
                                                                paddingRight:
                                                                    "15px",
                                                            }}
                                                        >
                                                            <li>
                                                                <a
                                                                    style={{
                                                                        backgroundColor:
                                                                            "transparent",
                                                                    }}
                                                                    title={
                                                                        this
                                                                            .props
                                                                            .session
                                                                            .user
                                                                            .name ||
                                                                        this
                                                                            .props
                                                                            .session
                                                                            .user
                                                                            .email
                                                                    }
                                                                    data-toggle="dropdown"
                                                                    className="dropdown-toggle"
                                                                    aria-haspopup="true"
                                                                >
                                                                    <img
                                                                        className="_mi _before dashicons dashicons-admin-network"
                                                                        style={{
                                                                            verticalAlign:
                                                                                "middle",
                                                                            width: 50,
                                                                            height: 50,
                                                                            padding: 0,
                                                                            borderRadius:
                                                                                "50%",
                                                                        }}
                                                                        src={
                                                                            this
                                                                                .props
                                                                                .session
                                                                                .user
                                                                                .image
                                                                        }
                                                                        alt={
                                                                            this
                                                                                .props
                                                                                .session
                                                                                .user
                                                                                .name
                                                                        }
                                                                    />{" "}
                                                                    <span className="caret"></span>
                                                                </a>
                                                                <ul
                                                                    role="menu"
                                                                    className=" dropdown-menu"
                                                                    style={{
                                                                        textAlign:
                                                                            "left",
                                                                        left: "auto",
                                                                        right: "0",
                                                                        padding:
                                                                            "10px",
                                                                        backgroundImage:
                                                                            "-webkit-linear-gradient(89deg, #5f16a9 0%, #cf15f8 100%)",
                                                                    }}
                                                                >
                                                                    <p
                                                                        style={{
                                                                            color: "white",
                                                                        }}
                                                                    >
                                                                        Hello{" "}
                                                                        <i
                                                                            className="_mi _before dashicons dashicons-reddit"
                                                                            aria-hidden="true"
                                                                        >
                                                                            {" "}
                                                                        </i>
                                                                        <br />
                                                                        <strong>
                                                                            {this
                                                                                .props
                                                                                .session
                                                                                .user
                                                                                .name ||
                                                                                this
                                                                                    .props
                                                                                    .session
                                                                                    .user
                                                                                    .email}
                                                                        </strong>
                                                                    </p>
                                                                    <li>
                                                                        <Link
                                                                            href="/dashboard"
                                                                            passHref
                                                                        >
                                                                            <a
                                                                                style={{
                                                                                    backgroundColor:
                                                                                        "transparent",
                                                                                }}
                                                                                title="Show dashboard"
                                                                            >
                                                                                <i
                                                                                    className="_mi _before dashicons dashicons-art"
                                                                                    aria-hidden="true"
                                                                                    style={{
                                                                                        color: "white",
                                                                                    }}
                                                                                ></i>{" "}
                                                                                <span>
                                                                                    Dashboard
                                                                                </span>
                                                                            </a>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link
                                                                            href="/settings"
                                                                            passHref
                                                                        >
                                                                            <a
                                                                                style={{
                                                                                    backgroundColor:
                                                                                        "transparent",
                                                                                }}
                                                                                title="Display and manipulate settings"
                                                                            >
                                                                                <i
                                                                                    className="_mi _before dashicons dashicons-admin-generic"
                                                                                    style={{
                                                                                        color: "white",
                                                                                    }}
                                                                                    aria-hidden="true"
                                                                                ></i>{" "}
                                                                                <span>
                                                                                    Settings
                                                                                </span>
                                                                            </a>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            style={{
                                                                                backgroundColor:
                                                                                    "transparent",
                                                                            }}
                                                                            title="logout from your account"
                                                                            onClick={
                                                                                signOut
                                                                            }
                                                                        >
                                                                            <i
                                                                                className="_mi _before dashicons dashicons-privacy"
                                                                                style={{
                                                                                    color: "white",
                                                                                }}
                                                                                aria-hidden="true"
                                                                            ></i>{" "}
                                                                            <span>
                                                                                Logout
                                                                            </span>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                        </div>
                                                    </>
                                                )}
                                            </>
                                        )}
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                    {/* header__bottom end */}
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
        );
    }
}

const Navbar = withSession(Navbarclass);
export default Navbar;
