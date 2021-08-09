import {useState,useEffect} from  'react'


export default function Donate() {
	const [ismobile, setMobile] = useState(false)
	const [paySwitch, setpaySwitch] = useState(false);
	useEffect(async() =>{
		const screenWidth = await window.innerWidth;
		screenWidth < 768 ? setMobile(true) : setMobile(false)
	},[]);
	
	const handleSubmit = async () => { 
		
	}

    return(
        
		<div>

<section className="blogs" id="blog" data-sorder="hestia_blog">
				<div className="container">
					<div className="row">
						<div className="col-md-8 col-md-offset-2 text-center">
							<h2 className="title">DONATIONS</h2>
							<h5 className="description">Join with us to spread jesus love to everyone</h5> 
						</div>
					</div>
					<div className="row">
						{/* <article className="col-md-4">
							<div className="card card-plain card-blog">
								<div className="content">
									<h6 className="category"><a href="http://localhost/category/jlum/" title="View all posts in JLUM" >JLUM</a> </h6>
									<h4 className="card-title"><a className="blog-item-title-link" href="http://localhost/welcome/" title="Welcome" rel="bookmark">Welcome</a></h4>
									<p className="card-description">A warm welcome to our website. Thanks for visiting. live in JESUS and walk with JESUS and love JESUS. automatically your life become beautiful.</p>
								</div>
							</div>
						</article> */}
					</div>
				</div>
			</section>


<section className="contactus section-image" id="contact" data-sorder="hestia_contact" style={{backgroundImage: "url('/images/slide1ren.jpg')"}}>
				<div className="container">
					<div className="row">
						<div className="col-md-5">
							<p><img className=" wp-image-308 aligncenter" style={{borderRadius: 10}} src='/images/prayer.-600x600.jpg' alt="" width="657" height="481"  /></p>
						</div>
						<div className="col-md-5 col-md-offset-2">
							<div className="card card-contact">
								<div className="header header-raised header-primary text-center" style={{borderRadius: 14}}>
									<h4 className="card-title">Donation</h4> </div>
								<div className="content">
									<div className="pirate_forms_container widget-no" id="pirate_forms_container_default">
										
										<div className="pirate_forms_wrap">
											
											<form method="post" encType="application/x-www-form-urlencoded" className="pirate_forms  form_honeypot-on wordpress-nonce-on pirate-forms-contact-name-on pirate-forms-contact-email-on pirate-forms-contact-subject-on pirate-forms-contact-message-on pirate-forms-contact-submit-on pirate_forms_from_form-on">
											
												<div className="sib_signup_box_inside_3">
													<div className="col-xs-12 alert alert-info">
														<p className="text-center">And my God will supply every need of yours according to his riches in glory in Christ Jesus - Philippians 4:19</p>
											
													</div>
													<div className="btn-group col-xs-12 btn-group-toggle" data-toggle="buttons" role="group" aria-label="Basic example"  >
														{/* <button type="button" className="btn btn-secondary " >I</button>
														<button type="button" className="btn btn-secondary " >f</button> */}
														  	<label onClick={() => {setpaySwitch(false)}} style={{width: "50%"}} className={paySwitch ? "btn btn-default" : "btn btn-primary active"}><img src="/images/india-flag-icon-64.png" style={{height: 16, width: 20}}/>{ ismobile ? null :  'INDIA'}</label>
															<label onClick={() => {setpaySwitch(true)}} style={{width: "49%", color: 'white'}}  className={paySwitch ? "btn btn-primary active" : "btn btn-default"}><img src="/images/global-icon.png" style={{height: 18, width: 18}}/>{ ismobile ? null : 'GLOBAL' }</label>							 							
													</div>
													
													<div className="col-xs-12 " style={{paddingTop: 35}}>
														<div className="input-group"> <span className="input-group-addon"> { paySwitch ?  <i className="fa fa-usd"></i> :  <i className="fa fa-inr"></i>}</span>
															<input type="number" className="sib-email-area form-control" style={{textAlign: 'center'}} name="amount" required="required" placeholder="Amount" /> 
														</div>
													</div>
													{/* <div className="col-sm-12">
														<div className="input-group"> <span className="input-group-addon"><i className="fa fa-phone"></i></span>
															<input type="number" className="sib-email-area form-control" name="phnumber" required="required" placeholder="Number" /> 
														</div>
													</div> */}
													
													{/* <div className="col-sm-12">
														<div className="input-group"> <span className="input-group-addon"><i className="fa fa-pencil"></i></span>
															<textarea type="text" rows="4" cols="30" className="sib-email-area form-control" name="msg" required="required" placeholder="Write any message for us" /> 
														</div>
													</div> */}
												</div>
												
												<div className="col-xs-12 form_field_wrap contact_submit_wrap">
													<button onClick={() => {handleSubmit}} className=" btn btn-primary " placeholder="">Donate with <i className="_mi _before dashicons dashicons-heart" aria-hidden="true"></i></button>
												</div>
												{/* <div className="col-xs-12 alert alert-info text-center">
													<p style={{textAlign: "center", fontSize: 14}}>And my God will supply every need of yours according to his riches in glory in Christ Jesus - Philippians 4:19</p>
												</div> */}
												<div className="pirate_forms_clearfix"></div>
											</form>
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
