
import BodyClass from './BodyClass';
import Header from './src/Header';
import Donate from './src/Donate';
import Footer from './src/Footer';

export default function donate() {
  
	
	return(
		
		<div className="root conatainer-fluid">
		      <BodyClass />	
                  <div className="wrapper">
                        <Header />
                        <div className="main main-raised">
                              <Donate />
                              <Footer />      
                        </div>                        
                  </div>  
            </div>
		
	)
}