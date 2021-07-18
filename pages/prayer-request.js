import BodyClass from './BodyClass';
import Header from './src/Header';
import Prayer from './src/Prayer';
import Footer from './src/Footer';

export default function prayerRequest() {
  
	
	return(
		
		<div className="root conatainer-fluid">
		      <BodyClass />	
                  <div className="wrapper">
                        <Header />
                        <div className="main main-raised">
                              <Prayer />
                              <Footer />      
                        </div>                        
                  </div>  
            </div>
		
	)
}