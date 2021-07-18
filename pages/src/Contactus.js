export default function Contactus() {
    return(
        <div>

        {/* //contact us sections */}

		<section className="blogs" id="blog" data-sorder="hestia_blog">
				<div className="container">
					<div className="row">
						<div className="col-md-8 col-md-offset-2 text-center">
							<h2 className="title">Contact Us</h2>
							<h5 className="description">Join with us to spread jesus love to everyone</h5> 
						</div>
					</div>
					<div className="row">
								<div >
									<div className="description">
										<h4 className="info-title">Communicate with us</h4>
										<p>Phone Numbers <b>+ 91 9032670949,<br />7036123488, 7036123489</b>
											<br />E-mail to <b>contact@jlum.org</b></p>
									</div>
								</div>	
					</div>
				</div>
			</section>
    <section className="contactus section-image" id="contact" data-sorder="hestia_contact" style={{backgroundImage: "url('/images/contact.jpg')"}}>
				<div className="container">
					<div className="row">
						<div className="col-md-5">
							<h2 className="title">Reach us</h2>
							<h5 className="description">Feel free to contact us in the name of Jesus</h5>
							<div className="description">
								<div className="info info-horizontal">
									<div className="icon icon-primary"><i className="fa fa-map-marker"></i></div>
									<div className="description">
										<h4 className="info-title">Find your Jesus loves you ministries</h4>
										<p>Bro D. Vijay Rama Rao
											<br />H.No 14-16/130 Road no-7
											<br />Kakathiyanagar, Neredmet
											<br />Secunderabad, Telangana-500056
											<br />India
											<br />
											<br />Bro D. Vijay Rama Rao
											<br />Chandramahal,
											<br />Jangareddygudem-534447
											<br />W.G Dist, Andrapradesh
											<br />India
                                        </p>
									</div>
								</div>
								{/* <div className="info info-horizontal">
									<div className="icon icon-primary"><i className="fa fa-mobile"></i></div>
									<div className="description">
										<h4 className="info-title">Communicate with us</h4>
										<p>Phone Numbers <b>+ 91 9032670949,<br />7036123488, 7036123489</b>
											<br />E-mail to <b>contact@jlum.org</b></p>
									</div>
								</div> */}
							</div>
						</div>
						<div className="col-md-5 col-md-offset-2">
							<div className="card card-contact">
								<div className="header header-raised header-primary text-center">
									<h4 className="card-title">Contact Us</h4> </div>
								<div className="content">
									<div className="pirate_forms_container widget-no" id="pirate_forms_container_default">
										
										<div className="pirate_forms_wrap">
											
										<form method="post" encType="application/x-www-form-urlencoded" className="pirate_forms  form_honeypot-on wordpress-nonce-on pirate-forms-contact-name-on pirate-forms-contact-email-on pirate-forms-contact-subject-on pirate-forms-contact-message-on pirate-forms-contact-submit-on pirate_forms_from_form-on">
											
												<div className="sib_signup_box_inside_3">
													<div className="col-sm-6">
														<div className="input-group"> <span className="input-group-addon"><i className="fa fa-user"></i></span>
															<input type="text" className="sib-email-area form-control" name="messagerName" required="required" placeholder="Name" /> 
														</div>
													</div>
													<div className="col-sm-6">
														<div className="input-group"> <span className="input-group-addon"><i className="fa fa-phone"></i></span>
															<input type="number" className="sib-email-area form-control" name="messagerPhnumber" required="required" placeholder="Number" /> 
														</div>
													</div>
													<div className="col-sm-12">
													<div className="input-group"> <span className="input-group-addon"><i className="fa fa-envelope"></i></span>
															<input type="email" className="sib-email-area form-control" name="messagerEmail" required="required" placeholder="Email" /> 
														</div>
													</div>
													<div className="col-sm-12">
													<div className="input-group"> <span className="input-group-addon"><i className="fa fa-pencil"></i></span>
															<input type="text" className="sib-email-area form-control" name="messagerSubject" required="required" placeholder="Subject" /> 
														</div>
													</div>
													<div className="col-sm-12">
														<div className="input-group"> <span className="input-group-addon"><i className="fa fa-pencil"></i></span>
															<textarea type="text" rows="6" cols="30" className="sib-email-area form-control" name="messsagerMsg" required="required" placeholder="Write a message for us" /> 
														</div>
													</div>
												</div>
												
												<div className="col-xs-12 form_field_wrap contact_submit_wrap">
													<button type="submit" className=" btn btn-primary "  placeholder="">Send now</button>
												</div>
											</form>
											<div className="pirate_forms_clearfix"></div>
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