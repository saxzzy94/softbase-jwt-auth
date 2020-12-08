import React from "react";

const Form = () => {
	return (
		<form>
			<div className='form-row'>
				<div className='form-group col-12'>
					<label for='name'>Your Name</label>
					<input
						type='name'
						className='form-control border-radius-20 bg-light border-0'
						id=''
					/>
				</div>
				<div className='form-group col-12 '>
					<label for='inputEmail4'>Your Email</label>
					<input
						type='email'
						className='form-control border-radius-20 bg-light border-0
    '
						id='inputEmail4'
					/>
				</div>
				<div className='form-group col-12 '>
					<label for='messages'>Your Message</label>
					<textarea
						className='form-control border-radius-20 bg-light border-0'
            id='exampleFormControlTextarea1'
            placeholder='Type something if you want'
						rows='3'
					></textarea>
				</div>
			</div>

			<button
				type='submit'
				className='btn  border-radius-20 btn-block col-6 shadow-lg'
				style={{ backgroundColor: "#547FE5", color: "white" }}
			>
				Send Message
			</button>
		</form>
	);
};

export default Form;
