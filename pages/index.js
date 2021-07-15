
import BodyClass from './BodyClass';
import Header from './src/Header';
import Body from './src/Body';
import Footer from './src/Footer';

export default function Home() {
  
	
	return(
		
		<div className="root conatainer-fluid">
		      <BodyClass />	
                  <div className="wrapper">
                        <Header />
                        <Body />
                        <Footer />
                  </div>  
            </div>
		
	)
}