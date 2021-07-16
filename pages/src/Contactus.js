export default function Contactus() {
    return(
        <div>

        {/* //contact us sections */}
    <section className="contactus section-image" id="contact" data-sorder="hestia_contact" style={{backgroundImage: "url('/images/contact.jpg')"}}>
				<div className="container">
					<div className="row">
						<div className="col-md-5">
							<h2 className="title">Get in Touch</h2>
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
								<div className="info info-horizontal">
									<div className="icon icon-primary"><i className="fa fa-mobile"></i></div>
									<div className="description">
										<h4 className="info-title">Communicate with us</h4>
										<p>Phone Numbers <b>+ 91 9032670949,<br />7036123488, 7036123489</b>
											<br />E-mail to <b>contact@jlum.org</b></p>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-5 col-md-offset-2">
							<div className="card card-contact">
								<div className="header header-raised header-primary text-center">
									<h4 className="card-title">Contact Us</h4> </div>
								<div className="content">
									<div className="pirate_forms_container widget-no" id="pirate_forms_container_default">
										
										<div className="pirate_forms_wrap">
											
											<form method="post" enctype="application/x-www-form-urlencoded" className="pirate_forms  form_honeypot-on wordpress-nonce-on pirate-forms-contact-name-on pirate-forms-contact-email-on pirate-forms-contact-subject-on pirate-forms-contact-message-on pirate-forms-contact-submit-on pirate_forms_from_form-on">
												<div className="pirate_forms_three_inputs_wrap ">
													<div className="col-xs-12 pirate_forms_three_inputs form_field_wrap contact_name_wrap col-xs-12 col-sm-6 contact_name_wrap pirate_forms_three_inputs form_field_wrap">
														<input type="text" className="form-control" id="pirate-forms-contact-name" name="pirate-forms-contact-name" className="" placeholder="Your Name" required oninvalid="this.setCustomValidity('Enter your name')" onchange="this.setCustomValidity('')" value="" /> </div>
													<div className="col-xs-12 pirate_forms_three_inputs form_field_wrap contact_email_wrap col-xs-12 col-sm-6 contact_email_wrap pirate_forms_three_inputs form_field_wrap">
														<input type="email" className="form-control" id="pirate-forms-contact-email" name="pirate-forms-contact-email" className="" placeholder="Your Email" required oninvalid="this.setCustomValidity('Enter a valid email')" onchange="this.setCustomValidity('')" value="" />  </div>
													<div className="col-xs-12 pirate_forms_three_inputs form_field_wrap contact_subject_wrap col-xs-12 contact_subject_wrap pirate_forms_three_inputs form_field_wrap">
														<input type="text" className="form-control" id="pirate-forms-contact-subject" name="pirate-forms-contact-subject" className="" placeholder="Subject" required oninvalid="this.setCustomValidity('Please enter a subject')" onchange="this.setCustomValidity('')" value="" /> </div>
												</div>
												<div className="col-xs-12 form_field_wrap contact_message_wrap col-xs-12 contact_message_wrap pirate_forms_three_inputs form_field_wrap">
													<textarea rows="5" cols="30" className="form-control" id="pirate-forms-contact-message" name="pirate-forms-contact-message" className="" placeholder="Your message" required oninvalid="this.setCustomValidity('Enter your question or comment')" onchange="this.setCustomValidity('')"></textarea>
												</div>
												<div className="col-xs-12 form_field_wrap contact_submit_wrap">
													<button type="submit" className="pirate-forms-submit-button btn btn-primary " id="pirate-forms-contact-submit" name="pirate-forms-contact-submit" className="pirate-forms-submit-button btn btn-primary " placeholder="">Send Message</button>
												</div>
												<input type="hidden" id="pirate_forms_ajax" name="pirate_forms_ajax" className="" placeholder="" value="0" />
												<div className="form_field_wrap hidden" style={{display: "none"}}>
													<input type="text" id="form_honeypot" name="honeypot" className="" placeholder="" value="" />
												</div>
												<input type="hidden" id="pirate_forms_from_widget" name="pirate_forms_from_widget" className="" placeholder="" value="0" />
												<input type="hidden" id="wordpress-nonce" name="wordpress-nonce" className="" placeholder="" value="d02af0b2c6" />
												<input type="hidden" id="pirate_forms_from_form" name="pirate_forms_from_form" className="" placeholder="" value="626dcd66ba" /> </form>
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