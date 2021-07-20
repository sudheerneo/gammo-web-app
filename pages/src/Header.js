import { Component, useEffect, useState } from "react";
import { useRouter } from 'next/router';
import Head from  'next/head';
import Navbar from './Navbar'
import Carousal from  './Carousal';

const out = (val) => console.log(val);

export default class Header extends Component  {
  constructor(){
    super()
    this.state = {title: 'JLUM Nextjs Project'};
  }

  
  componentDidMount() {
    const url = window.location.pathname;
    url === '/about' ? this.setState({title: 'JLUM-About'}) : 0
    url === '/prayer-request' ? this.setState({title: 'JLUM-Prayer request'}) : 0
    url === '/contact' ? this.setState({title: 'JLUM-Contact'}) : 0
    url === '/donate' ? this.setState({title: 'JLUM-Donate'}) : 0
  }
 
render(){
  return (
    //////////////////////////////////////////////////////////////////////////
    <div>
   <Head>

      <link rel="icon" href='/images/cropped-logo-192x192.png' sizes="32x32" />
      <link rel="icon" href='/images/cropped-logo-192x192.png' sizes="192x192" />
      <link rel="apple-touch-icon-precomposed" href='images/cropped-logo-180x180.png' />
      <meta name="msapplication-TileImage" content='/images/cropped-logo-270x270.png' />
      <title>{this.state.title}</title>
      <link rel="dns-prefetch" href="https://cdnjs.cloudflare.com/"/>
      <link rel="dns-prefetch" href="https://maxcdn.bootstrapcdn.com/"/>
      <link rel="dns-prefetch" href="https://fonts.googleapis.com/"/>
      <link rel="dns-prefetch" href="https://s.w.org/"/>
      <script type="text/javascript" src="/srcData_files/jquery.js.download"></script>
      <script type="text/javascript" src="/srcData_files/jquery-migrate.min.js.download"></script>
      <link rel='stylesheet' id='foundation-icons-css'  href='https://cdnjs.cloudflare.com/ajax/libs/foundicons/3.0.0/foundation-icons.css?ver=1.10.5.1' type='text/css' media='all' />
      <link rel='stylesheet' id='font-awesome-css'  href='https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css?ver=1.10.5.1' type='text/css' media='all' />
      <link rel="stylesheet" id="fl-builder-layout-156-css" href="/srcData_files/156-layout.css" type="text/css" media="all"/>
      <link rel="stylesheet" id="pirate_forms_front_styles-css" href="/srcData_files/front.css" type="text/css" media="all"/>
      <link rel="stylesheet" id="bootstrap-css" href="/srcData_files/bootstrap.min.css" type="text/css" media="all"/>
      <link rel="stylesheet" id="font_awesome-css" href="/srcData_files/font-awesome.min(1).css" type="text/css" media="all"/>
      <link rel="stylesheet" id="hestia_style-css" href="/srcData_files/style.css" type="text/css" media="all"/>   
      <link rel="stylesheet" id="fl-builder-google-fonts-d8b6cbcd8e179c5f8061d31801bcddf6-css" href="/srcData_files/css" type="text/css" media="all"/>
      <link rel='stylesheet' id='dashicons-css'  href='/srcData_files/dashicons.min.css?ver=5.7.2' type='text/css' media='all' />
    
    </Head>
          
    <header className="header">
    <Navbar />
    <Carousal />
   </header>
   </div>
/////////////////////////////////////////////////////////////////////////////////////////////
  )
}}

