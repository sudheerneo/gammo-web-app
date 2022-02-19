
import BodyClass from './BodyClass';
import Header from './src/Header';
import Bodydata from './src/Bodydata';
import Footer from './src/Footer';
import Homepage from './src/Homepage'

export default function Home() {
  
	
	return(
		
		<div className="root conatainer-fluid">
		      <BodyClass />
                  {/* prealoader start  */}
                  <div className="preloader">
                  <div className="spinner">
                  <div className="dot1"></div> 
                  <div className="dot2"></div>
                  </div>
                  </div>
                  {/* prealoader end */}

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
                        {/* <Bodydata /> data from old website*/}
                        <Homepage />
                        <Footer />
                  </div>  
            </div>
		
	)
}