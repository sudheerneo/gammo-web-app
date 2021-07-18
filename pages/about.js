
import BodyClass from './BodyClass';
import Header from './src/Header';
import About from './src/About';
import Footer from './src/Footer';

export default function about() {
  
	
	return(
		
		<div className="root conatainer-fluid">
		      <BodyClass />	
                  <div className="wrapper">
                        <Header />
                        <div className="main main-raised">
                              <About />
                              <Footer />
                        </div>
                  </div>  
            </div>
		
	)
}