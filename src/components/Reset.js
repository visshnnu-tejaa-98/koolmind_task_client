const Reset = () => {
	return (
		<div className='reset container component'>
			<div className='card card-padding card-styles '>
				{/* <div className='progress'>
					<div className='indeterminate'></div>
				</div> */}
				<div className='padding'>
					<h3 className='center teal-text'>Reset</h3>
					<div className='input-field '>
						<input id='mobile' type='text' className='validate' />
						<label for='mobile'>Mobile</label>
					</div>
					<div className='input-field '>
						<input id='password' type='text' className='validate' />
						<label for='password'>Password</label>
					</div>
					<div className='input-field '>
						<input id='conformPassword' type='text' className='validate' />
						<label for='conformPassword'>Conform Password</label>
					</div>
					<div className='center'>
						<a className='waves-effect waves-light btn'>
							<i className='material-icons right'>send</i>Reset
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Reset;
