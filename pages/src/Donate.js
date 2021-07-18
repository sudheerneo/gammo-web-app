export default function Donate() {
    return(
        
		<div>

<section className="blogs" id="blog" data-sorder="hestia_blog">
				<div className="container">
					<div className="row">
						<div className="col-md-8 col-md-offset-2 text-center">
							<h2 className="title">Recent activities by us</h2>
							<h5 className="description">We update every activity in our website so keep in touch with our website</h5> 
						</div>
					</div>
					<div className="row">
						<article className="col-md-4">
							<div className="card card-plain card-blog">
								<div className="content">
									<h6 className="category"><a href="http://localhost/category/jlum/" title="View all posts in JLUM" >JLUM</a> </h6>
									<h4 className="card-title"><a className="blog-item-title-link" href="http://localhost/welcome/" title="Welcome" rel="bookmark">Welcome</a></h4>
									<p className="card-description">A warm welcome to our website. Thanks for visiting. live in JESUS and walk with JESUS and love JESUS. automatically your life become beautiful.</p>
								</div>
							</div>
						</article>
					</div>
				</div>
			</section>


<section className="contactus section-image" id="contact" data-sorder="hestia_contact" style={{backgroundImage: "url('/images/contact.jpg')"}}>
				<div className="container">
					<div className="row">
						<div className="col-md-5">
							<p><img className=" wp-image-308 alignleft" src='/images/intro.jpg' alt="" width="657" height="481"  /></p>
						</div>
						<div className="col-md-5 col-md-offset-2">
							<div className="card card-contact">
								<div className="header header-raised header-primary text-center" style={{borderRadius: 14}}>
									<h4 className="card-title">Donation Form</h4> </div>
								<div className="content">
									<div className="pirate_forms_container widget-no" id="pirate_forms_container_default">
										
										<div className="pirate_forms_wrap">
											
											<form method="post" encType="application/x-www-form-urlencoded" className="pirate_forms  form_honeypot-on wordpress-nonce-on pirate-forms-contact-name-on pirate-forms-contact-email-on pirate-forms-contact-subject-on pirate-forms-contact-message-on pirate-forms-contact-submit-on pirate_forms_from_form-on">
											
												<div className="sib_signup_box_inside_3">
													<div className="col-sm-4">
														<div className="input-group"> <span className="input-group-addon"><i className="fa fa-inr"></i></span>
															<input type="number" className="sib-email-area form-control" name="amount" required="required" placeholder="Amount" /> 
														</div>
													</div>
													<div className="col-sm-8">
														<div className="input-group"> <span className="input-group-addon"><i className="fa fa-phone"></i></span>
															<input type="number" className="sib-email-area form-control" name="phnumber" required="required" placeholder="Number" /> 
														</div>
													</div>
													<div className="col-sm-4">
														<div className="input-group"> <span className="input-group-addon"><i className="fa fa-user"></i></span>
															<input type="text" className="sib-email-area form-control" name="donatorname" required="required" placeholder="Name" /> 
														</div>
													</div>
													<div className="col-sm-8">
														<div className="input-group"> <span className="input-group-addon"><i className="fa fa-envelope"></i></span>
															<input type="email" className="sib-email-area form-control" name="email" required="required" placeholder="Email" /> 
														</div>
													</div>
													<div className="col-sm-12">
														<div className="input-group"> <span className="input-group-addon"><i className="fa fa-pencil"></i></span>
															<textarea type="text" rows="3" cols="30" className="sib-email-area form-control" name="msg" required="required" placeholder="Write any message for us" /> 
														</div>
													</div>
												</div>
												
												<div className="col-xs-12 form_field_wrap contact_submit_wrap">
													<button type="submit" className=" btn btn-success "  style={{backgroundColor: "green"}} placeholder="">Donate now</button>
												</div>
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