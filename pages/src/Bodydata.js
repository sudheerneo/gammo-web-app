import { Component } from "react";
import Contactus from './Contactus'
import Blogupdate from './Blogupdate'
import Features from './Features'
import Intro from './Intro'
import Subscribe from './Subscribe'

class Bodydata extends Component  {
    constructor(){
        super()
        this.state = {toglle : 'false'}
    }
    render(){
        return(
            <div className="main main-raised">

                <Features />
                <Intro />
                <Blogupdate />
                <Subscribe />
                <Contactus />
        
            </div>
        )
    }
}
export default Bodydata;