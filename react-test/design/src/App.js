import "./App.css";
import Form from "./components/Form";
import msgArt from "./assets/mailbox.jpg";

function App() {
	return (
		<div
			className='container gradient p-5 '
			style={{
				backgroundImage:
					"linear-gradient(to bottom, rgb(84,127,229),rgb(0,33,122))",
			}}
		>
		
				<div className='row shadow p-5 m-4 bg-white fancy-corner'>
					<div className='col-lg-5 col-md-4 ml-5 mr-3 bg-white'>
						<div className='title mb-3 mt-3'>Let's talk</div>
						<h6 className='reg-text text-grey mb-3'>
							To request a quote or want to meet up for coffee, contact us
							directly or fill out the form and we will get back to you promptly
						</h6>
						<Form />{" "}
					</div>

					<div className='col-lg-5 col-md-4 mr-5 pl-5 pr-5'>
						<div className=''>
							<img src={msgArt} className='img-fluid' alt='' />
						</div>
						<div className='contact'>
							<div className='mb-3'>
								<i className='fas fa-map-marker-alt mr-4'></i>
								<span>151 New Park Ave, Hartford, CT O6106 United Sates</span>
							</div>
							<div>
								<i className='fas fa-phone-alt mr-4'></i>
								<span>+1(203)302-9545</span>
							</div>
							<div>
								<i className='fas fa-envelope mr-4'></i>
								<span>contactus@inveritasoft.com</span>
							</div>
						</div>
						<div className='social'>
							<div className='fb'>
              <i class="fab fa-facebook fa-10x "></i>
							</div>
							<div className='twitter'>
              <i class="fab fa-twitter-square"></i>
							</div>
							<div className='instagram'>
              <i class="fab fa-instagram-square"></i>
							</div>
						</div>
					</div>
				</div>
		
		</div>
	);
}

export default App;
