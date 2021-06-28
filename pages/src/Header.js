import { useRouter } from 'next/router';
import Head from  'next/head';


export default function Header() {
  return (
    //////////////////////////////////////////////////////////////////////////
    <div>
    <Head>

      <link rel="icon" href="https://dinermanager.com/wp-content/uploads/2017/01/N.png" sizes="32x32" />
      <link rel="icon" href="https://dinermanager.com/wp-content/uploads/2017/01/N.png" sizes="192x192" />
      <link rel="apple-touch-icon-precomposed" href="https://dinermanager.com/wp-content/uploads/2017/01/N.png" />
      <title>Sudheer New Projectr</title>
      <link rel="dns-prefetch" href="https://cdnjs.cloudflare.com/"/>
      <link rel="dns-prefetch" href="https://maxcdn.bootstrapcdn.com/"/>
      <link rel="dns-prefetch" href="https://fonts.googleapis.com/"/>
      <link rel="dns-prefetch" href="https://s.w.org/"/>
      <script type="text/javascript" src="/srcData_files/jquery.js.download"></script>
      <script type="text/javascript" src="/srcData_files/jquery-migrate.min.js.download"></script>
      <link rel="stylesheet" id="foundation-icons-css" href="/srcData_files/foundation-icons.css" type="text/css" media="all"/>
      <link rel="stylesheet" id="font-awesome-css" href="/srcData_files/font-awesome.min.css" type="text/css" media="all"/>
      <link rel="stylesheet" id="fl-builder-layout-156-css" href="/srcData_files/156-layout.css" type="text/css" media="all"/>
      <link rel="stylesheet" id="pirate_forms_front_styles-css" href="/srcData_files/front.css" type="text/css" media="all"/>
      <link rel="stylesheet" id="bootstrap-css" href="/srcData_files/bootstrap.min.css" type="text/css" media="all"/>
      <link rel="stylesheet" id="font_awesome-css" href="/srcData_files/font-awesome.min(1).css" type="text/css" media="all"/>
      <link rel="stylesheet" id="hestia_style-css" href="/srcData_files/style.css" type="text/css" media="all"/>   
      <link rel="stylesheet" id="fl-builder-google-fonts-d8b6cbcd8e179c5f8061d31801bcddf6-css" href="/srcData_files/css" type="text/css" media="all"/>
      
          
    </Head>
          
    <header className="header">
    <nav className="navbar navbar-default navbar-fixed-top navbar-color-on-scroll">
     <div className="container">
      <div className="navbar-header">
       <button
        type="button"
        className="navbar-toggle"
        data-toggle="collapse"
        data-target="#main-navigation"
       >
        <span className="sr-only">Toggle Navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
       </button>
       <div className="title-logo-wrapper">
        <a
         className="navbar-brand"
         href="https://dinermanager.com/"
         title="DinerManager"
         ><img src="./srcData_files/NiemIT.png"
        /></a>
       </div>
      </div>
      <div id="main-navigation" className="collapse navbar-collapse">
       <ul id="menu-primary-menu" className="nav navbar-nav navbar-right">
        <li
         id="menu-item-170"
         className="
          menu-item
          menu-item-type-post_type
          menu-item-object-page menu-item-home
          current-menu-item
          page_item page-item-156
          current_page_item
          menu-item-170
         "
        >
         <a title="Home" href="https://dinermanager.com/">Home</a>
        </li>
        <li
         id="menu-item-172"
         className="
          menu-item
          menu-item-type-post_type
          menu-item-object-page menu-item-172
         "
        >
         <a title="Chi Siamo" href="https://dinermanager.com/niemit-dinermanager/"
          >Chi Siamo</a
         >
        </li>
        <li
         id="menu-item-655"
         className="
          menu-item
          menu-item-type-custom
          menu-item-object-custom
          menu-item-has-children
          menu-item-655
          dropdown
         "
        >
         <a
          title="Prodotti"
          href="https://dinermanager.com/#"
          data-toggle="dropdown"
          className="dropdown-toggle"
          aria-haspopup="true"
          aria-expanded="false"
          >Prodotti <span className="caret"></span
         ></a>
         <ul role="menu" className="dropdown-menu">
          <li
           id="menu-item-670"
           className="
            menu-item
            menu-item-type-post_type
            menu-item-object-page menu-item-670
           "
          >
           <a title="Allergeni Smart" href="https://dinermanager.com/allergeni/"
            >Allergeni Smart</a
           >
          </li>
          <li
           id="menu-item-693"
           className="
            menu-item
            menu-item-type-post_type
            menu-item-object-page menu-item-693
           "
          >
           <a
            title="Allergeni Plus"
            href="https://dinermanager.com/dinermanager-allergeni-plus/"
            >Allergeni Plus</a
           >
          </li>
          <li
           id="menu-item-759"
           className="
            menu-item
            menu-item-type-post_type
            menu-item-object-page menu-item-759
           "
          >
           <a
            title="Digital menuboard"
            href="https://dinermanager.com/dinermanager-digital-menuboard/"
            >Digital menuboard</a
           >
          </li>
         </ul>
        </li>
        <li
         id="menu-item-166"
         className="
          menu-item
          menu-item-type-post_type
          menu-item-object-page menu-item-166
         "
        >
         <a title="News" href="https://dinermanager.com/blog/">News</a>
        </li>
        <li
         id="menu-item-171"
         className="
          menu-item
          menu-item-type-post_type
          menu-item-object-page menu-item-171
         "
        >
         <a title="Contattaci" href="https://dinermanager.com/contattaci/"
          >Contattaci</a
         >
        </li>
        <li
         id="menu-item-237"
         className="
          menu-item
          menu-item-type-post_type
          menu-item-object-page menu-item-237
         "
        >
         <a title="FAQ" href="https://dinermanager.com/faq/">FAQ</a>
        </li>
       </ul>
      </div>
     </div>
    </nav>
    <div id="carousel-hestia-generic" className="carousel slide" data-ride="carousel">
     <div className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
       <div className="item next left">
        <div
         className="page-header header-filter slide1"
        >
         <div className="container">
          <div className="row">
           <div className="col-md-8 col-md-offset-2 text-center">
            <h2 className="title">DinerManager</h2>
            <h4>
             Soluzioni semplici ma efficaci per la ristorazione, food retail e
             locali al pubblico. Il cloud è il suo piatto forte !
            </h4>
           </div>
          </div>
         </div>
        </div>
       </div>
       <div className="item active left">
        <div
         className="page-header header-filter slide2"
         
        >
         <div className="container">
          <div className="row">
           <div className="col-md-8 col-md-offset-2 text-center">
            <h2 className="title">Diner Manager</h2>
            <h4>
             Soluzioni semplici ma efficaci per la ristorazione, food retail e
             locali al pubblico. Finalmente tutto sotto controllo !
            </h4>
           </div>
          </div>
         </div>
        </div>
       </div>
      </div>
      <a
       className="left carousel-control"
       href="https://dinermanager.com/#carousel-hestia-generic"
       data-slide="prev"
      >
       <i className="fa fa-angle-left"></i>
      </a>
      <a
       className="right carousel-control"
       href="https://dinermanager.com/#carousel-hestia-generic"
       data-slide="next"
      >
       <i className="fa fa-angle-right"></i>
      </a>
     </div>
    </div>
   </header>
   </div>
/////////////////////////////////////////////////////////////////////////////////////////////
  )}
const Link = ({ children, href }) => {
  const router = useRouter()
  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault()
        router.push(href)
      }}
    >
      {children}
      <style jsx>{`
        a {
          margin-right: 10px;
        }
      `}</style>
    </a>
  )
}