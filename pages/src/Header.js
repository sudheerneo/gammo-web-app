import { useRouter } from 'next/router';
import Head from  'next/head';


export default function Header() {
  return (
    //////////////////////////////////////////////////////////////////////////
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
         className="page-header header-filter"
         style={{backgroundImage: 'url("/images/slide1.jpg")'}}
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
         className="page-header header-filter"
         style={{backgroundImage:'url("/images/IMG_9814-copy.jpg")'}}
         
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