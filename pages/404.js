import BodyClass from "./BodyClass";
import Header from "./src/Header";
import Custom404 from "./src/Custom404";
import FooterWidget from "./src/FooterWidget";
import Footer from "./src/Footer";

export default function custom404() {
  return (
    <div className="root conatainer-fluid">
      <BodyClass />
      {/* scroll-to-top start */}
      <div className="scroll-to-top">
        <span className="scroll-icon">
          <i className="las la-arrow-up"></i>
        </span>
      </div>
      {/* scroll-to-top end */}
      <div className="wrapper">
        <Header />
        <Custom404 />
        <FooterWidget />
        <Footer />
      </div>
    </div>
  );
}
