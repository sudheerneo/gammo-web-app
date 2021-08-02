import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'

export default function Intro() {
const [ isMobile, setMobile ] = useState(false)

useEffect(()=>{
    const fetchData = async () => {
      const winSize = await window.innerWidth;
      winSize < 764 ? this.setState({ isMobile: true}) : this.setState({ isMobile: false})

    }
    fetchData()
  }, []);



    return(
        <div>

			<section className="about section-image" id="about" data-sorder="hestia_about" style={{backgroundImage: "url('/images/donation.jpg')"}}>
				<div className="container">
					<div className="row">
						<div id="pl-5" className="panel-layout">
							<div id="pg-5-0" className="panel-grid panel-no-style">
								<div id="pgc-5-0-0" className="panel-grid-cell">
									<div id="panel-5-0-0-0" className="so-panel widget widget_sow-editor panel-first-child panel-last-child" data-index="0">
										<div className="so-widget-sow-editor so-widget-sow-editor-base">
											<div className="siteorigin-widget-tinymce textwidget">
												<p><img className=" wp-image-308 alignleft" src='/images/intro.jpg' alt="" width="657" height="481" style={{borderRadius: 50}} /></p>
												<p style={{textAlign: "center"}}><strong>Introduction</strong></p>
												<p style={{textAlign: "center"}}> </p>
												<p style={{textAlign: this.state.isMobile ? 'justify' : 'center' }}>Bro. <strong>D.Vijay Rama Rao</strong> was a young man who started JLUM journey when he was in the city of Hyderabad in India from last 10 plus years. Vijay Ramarao was probably the person who led servant to the Lord (I Tim. 1:2; II Tim. 1:2; I Cor. 4:17), In his life journey he visited the churches around india and ministered there for some time. God can do miracles in our lives in the same manner god made him as his servant. He was very happy with his responsibilities </p>
												<p style={{textAlign: "center"}}> </p>
												<Link href='/about'>
                                                                                                  <p style={{textAlign: "center"}}><strong>know more about</strong></p></Link><Link href='/about'>
												  <p style={{textAlign: "center"}}><strong>Bro D. Vijay Rama Rao</strong></p>
                                                                                                </Link>
												<p style={{textAlign: "center"}}>
													<a className="ow-button-hover" href="/"></a></p>
												<p>													
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

        </div>
    )
}
