import BodyClass from "./BodyClass";
import Header from "./src/Header";
import FooterWidget from "./src/FooterWidget";
import Footer from "./src/Footer";

export default function lobby() {
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
        <h1 style={{ paddingTop: "100px" }}> hello i am lobby page </h1>
        <FooterWidget />
        <Footer />
      </div>
    </div>
  );
}
