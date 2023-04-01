import axios from "axios";
import Router from "next/router";
import React, { useState, useEffect } from "react";
import BodyClass from "./BodyClass";
import Header from "./src/Header";  
//import Bodydata from './src/Bodydata';
import Footer from "./src/Footer";
import Homepage from "./src/Homepage";
import { useRouter } from "next/router";

export default function testApi() {
  const [resp, setRes] = useState(null);
 
  const fetchApi = async (payload) => {
    const bot = "cpRequest";
    const res = await axios.post(`/api/fbase/${bot}`, { payload });
    const dataRec = await res.data;
    console.log(dataRec);
    // setRes(dataRec);
    // Router.push(dataRec.payment_request.longurl);
  };

  //working here
  const userReq = async () => {
    const bot = "firedbCreate";
    const res = await axios.get(`/api/fbase/${bot}`);
    const dataRec = await res.data;
    console.log(dataRec);
  };

  // const fetcher = async (payload) => {
  //   const bot = "cpRequest";
  //   const res = await axios.post(`/api/instamojo/${bot}`, { payload });
  //   const dataRec = await res.data;
  //   setRes(dataRec);
  //   Router.push(dataRec.payment_request.longurl);
  // };

  const headers = {
    "X-Api-Key": "test_e396650e951cdbcc3f3b2aa719b",
    "X-Auth-Token": "test_dc5af79bfc8d3d2354274ea912e"
  };
  const payload = {
    // purpose: "FIFA 16",
    // amount: "2500",
    // phone: "9640405005",
    // buyer_name: "John Doe",
    // send_email: true,
    // redirect_url: "https://447nyg.sse.codesandbox.io/api/instamojo/redirect/",
    // webhook: "https://447nyg.sse.codesandbox.io/api/instamojo/webhook/",
    // send_sms: true,
    // email: "mailtobsudheer@gmail.com",
    // allow_repeated_payments: true
  };

  const redirectApi = async (redData) => {
    const bot = "redirect";
    const res = await axios.get(
      "/api/instamojo/redirect?payment_id=MOJO1803405N95752852&payment_status=Credit&payment_request_id=39b8e3a1293d431d91f191df9767a4b2"
    );
    const dataRec = await res.data;
    console.log(dataRec);
  };

  const getPayData = async (headers) => {
    const given = await axios.get(
      "https://www.instamojo.com/api/1.1/payments/MOJO5a06005J21512197/",
      { headers }
    );
    const dataRec = await res.data;
    console.log(dataRec);
  };
  return (
    <div className="root conatainer-fluid">
      <div className="scroll-to-top">
        <span className="scroll-icon">
          <i className="las la-arrow-up"></i>
        </span>
      </div>
      <div className="wrapper">
        <Header />
        {/* bel;ow code  */}
        <div
          className="container"
          style={{ paddingTop: 200, paddingBottom: 300 }}
        >
          <button
            className="cmn-btn mt-5"
            onClick={() => {
              fetchApi(payload);
            }}
          >
            TestMe
          </button>
          <br></br>
          <button
            className="cmn-btn mt-5"
            onClick={() => {
              redirectApi();
            }}
          >
            redirectAPI test
          </button>
          <br></br>
          <button
            className="cmn-btn mt-5"
            onClick={() => {
              userReq();
            }}
          >
            Test FireBase
          </button>
        </div>
        {/* bel;ow code  */}
        <Footer />
      </div>
    </div>
  );
}
