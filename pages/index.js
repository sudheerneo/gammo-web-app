import BodyClass from "./BodyClass";
import Header from "./src/Header";
//import Bodydata from './src/Bodydata';
import Footer from "./src/Footer";
import Homepage from "./src/Homepage";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const [url, setUrl] = useState("/");
  const router = useRouter();

  useEffect(() => {}, []);

  return (
    <div className="root conatainer-fluid">
      {/* <BodyClass /> */}

      {/* scroll-to-top start */}
      <div className="scroll-to-top">
        <span className="scroll-icon">
          <i className="las la-arrow-up"></i>
        </span>
      </div>
      {/* scroll-to-top end */}

      {/* page-wrapper start */}
      <div className="wrapper">
        <Header />
        {/* <Bodydata />  //data from old website*/}
        <Homepage />
        <Footer />
      </div>
    </div>
  );
}
