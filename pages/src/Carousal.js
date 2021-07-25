import { Component } from "react"
const out = (val) => {console.log(val)}

export default class Carousal extends Component  {
    constructor() {
        super()
        this.state = {mobilePadding: 140, caniShow: 'none', carousalImage: "/images/home.jpg", carousalBtn: "block", carousalHeading: "JESUS LOVES YOU MINISTRIES"}
        this.state.staticdata = {
          carousals: {about: '/images/abouty.jpg', contact: '/images/hands-coffee-smartphone-technology.jpg', preq: '/images/prayer.jpg', donate: '/images/donation.jpg' }
        }
      }
    
    hideCarousalOnPhone(url) {
        console.log('mobile')
        url === '/' ? this.setState({caniShow: 'block', mobilePadding: 0}) : 0 ;
    }

    componentDidMount() {
        const url = window.location.pathname;
        const headings = url.replace(/[\/\\]/g,'')
        const photo = this.state.staticdata.carousals;
        url === '/about' ? this.setState({carousalImage: photo.about}) : 0
        url === '/contact' ? this.setState({carousalImage: photo.contact}) : 0
        url === '/prayer-request' ? this.setState({carousalImage: photo.preq}) : 0
        url === '/donate' ? this.setState({carousalImage: photo.donate}) : 0
        url === '/' ? 0 : this.setState({carousalHeading: headings})
        url === '/' ? 0 : this.setState({carousalBtn: "none"})
        window.innerWidth < 768 ? this.hideCarousalOnPhone(url) : this.setState({ caniShow: 'block', mobilePadding: 0 })

    }

render() {
    return(
    <div id="carousel-hestia-generic" className="carousel slide" data-ride="carousel">
        <div className="carousel slide" data-ride="carousel" style={{paddingTop: this.state.mobilePadding}} >
            <div className="carousel-inner">
                <div className="item active">
                    <div className="page-header header-filter" style={{ display: this.state.caniShow, backgroundImage: "url('"+this.state.carousalImage+"')"}}>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-8 col-md-offset-2 text-center">
                                    <h2 className="title">{this.state.carousalHeading}</h2>
                                    <h3 style={{display: this.state.carousalBtn}}>We heart fully welcome to our website in the name of Jesus </h3>
                                    <div className="buttons" style={{display: this.state.carousalBtn}}> <a href="#" className="btn btn-primary btn-lg">Join with us</a> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}}
