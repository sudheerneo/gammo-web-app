
import BodyClass from './BodyClass';
import Header from './src/Header';
import Custom404 from './src/Custom404';
import Footer from './src/Footer';

export default function custom404() {
  
	
	return(
		
		<div className="root conatainer-fluid">
		      <BodyClass />	
                  <div className="wrapper">
                        <Header />
                        <div className="main main-raised">
                              <Custom404 />
                              <Footer />      
                        </div>                        
                  </div>  
            </div>
		
	)
}