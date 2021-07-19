export default function Subscribe() {
    return(
        <div>
            <section className="subscribe-line subscribe-line-image" id="subscribe" data-sorder="hestia_subscribe" style={{backgroundImage: "url('/images/contact.jpg')"}}>
				<div className="container">
					<div className="row text-center">
						<div className="col-md-8 col-md-offset-2 text-center">
							<h2 className="title">Subscribe to our Newsletter</h2>
							<h5 className="subscribe-description">We will send every activity to our inbox directly so please subscribe with our newsletter</h5> </div>
					</div>
					<div className="row">
						<div className="col-md-6 col-md-offset-3">
							<div className="card card-raised card-form-horizontal">
								<div className="content">
									<div className="row">
										<div className="textwidget">
											<form id="sib_signup_form_3" method="post" className="sib_signup_form">
												<div className="sib_loader" style={{display:"none"}}><img src="/images/spinner.gif" alt="loader" /></div>
												<input type="hidden" name="sib_form_action" value="subscribe_form_submit" />
												<input type="hidden" name="sib_form_id" value="3" />
												<div className="sib_signup_box_inside_3">
													<div className="sib_msg_disp"> </div>
													<div className="col-sm-8">
														<div className="input-group"> <span className="input-group-addon"><i className="fa fa-envelope"></i></span>
															<input type="email" className="sib-email-area form-control" name="email" required="required" placeholder="Your Email Here" /> </div>
													</div>
													<div className="col-sm-4">
														<input type="submit" className="btn btn-primary btn-block sib-default-btn" name="submit" value="Subscribe" /> </div>
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
