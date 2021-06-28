import  { Component } from 'react';

class BodyClass extends Component {

    componentDidMount() {

        if ( 1 = 1) {
            //this.setBodyClass('home page-template page-template-page-templates page-template-template-fullwidth page-template-page-templatestemplate-fullwidth-php page page-id-156 wp-custom-logo fl-builder blog-post');
            document.body.classList.add("home","page-template","page-template-page-templates","page-template-template-fullwidth","page-template-page-templatestemplate-fullwidth-php","page","wp-custom-logo","fl-builder","blog-post");
            
        } else if (1 != 1) {
            // this.setBodyClass('locations');
            return null;
        } 
    }

    setBodyClass(className) {
        // remove other classes
        document.body.className ='';

        // assign new class
        document.body.classList.add(className);
    }

    render() { 
        return null;
    }

}
 
export default BodyClass;
