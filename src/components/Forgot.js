import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BACKEND_URL } from '../apiEndpoints';

const Forgot = () => {
	const [loading, setLoading] = useState(false);
	const [mobile, setmobile] = useState('');
	const navigate = useNavigate();
	const handleSubmit = async () => {
		if (mobile) {
			setLoading(true);
			let req = await fetch(`${BACKEND_URL}/api/v1/user/forgot`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ mobile: mobile }),
			});
			let res = await req.json();
			setLoading(false);
			console.log(res);
			localStorage.setItem('number', `${mobile}`);
			if (res.status) {
				navigate('/verifyOtp');
			}
		} else {
			const M = window.M;
			M.toast({ html: 'Enter Number' });
		}
	};
	return (
		<div className='forgot container component'>
			<div className='card card-padding card-styles '>
				{loading && (
					<div className='progress'>
						<div className='indeterminate'></div>
					</div>
				)}
				<div className='padding'>
					<h3 className='center teal-text'>Enter Mobile Number</h3>
					<div className='input-field '>
						<input
							id='mobile'
							type='number'
							className='validate'
							value={mobile}
							onChange={(e) => setmobile(e.target.value)}
						/>
						<label for='mobile'>Mobile</label>
					</div>
					<div className='center'>
						<Link to='' className='waves-effect waves-light btn' onClick={handleSubmit}>
							<i className='material-icons right'>send</i>Send OTP
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Forgot;
