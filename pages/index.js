
import BodyClass from './BodyClass';
import Header from './src/Header';
import Middle from './src/Middle';
import Footer from './src/Footer';

export default function Home() {
  
	
	return(
		
		<div className="root conatainer-fluid">
		      <BodyClass />	
                  <div className="wrapper">
                        <Header />
                        <Middle />
                        <Footer />
                  </div>  
            </div>
		
	)
}