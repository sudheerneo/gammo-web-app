import BodyClass from './BodyClass';
import Header from './src/Header';
import Contactus from './src/Contactus';
import Footer from './src/Footer';

export default function contact() {
  
	
	return(
		
		<div className="root conatainer-fluid">
		      <BodyClass />	
                  <div className="wrapper">
                        <Header />
                        <div className="main main-raised">
                              <Contactus />
                              <Footer />      
                        </div>                        
                  </div>  
            </div>
		
	)
}