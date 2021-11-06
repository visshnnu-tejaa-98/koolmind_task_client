import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BACKEND_URL } from '../apiEndpoints';

const VerifyOtp = () => {
	const [data, setData] = useState({ mobile: '', otp: '' });

	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();
	useEffect(() => {
		let mobileNumber = localStorage.getItem('number');
		console.log(mobileNumber);
		if (mobileNumber) {
			setData({ ...data, mobile: mobileNumber });
		} else {
			navigate.push('/register');
		}
	}, [navigate]);
	const handleVerify = async () => {
		if (data.otp && data.mobile) {
			setLoading(true);
			const req = await fetch(`${BACKEND_URL}/api/v1/user/verifyOtp`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			});
			const res = await req.json();
			console.log(res);
			setLoading(false);
			if (res.status) {
				const M = window.M;
				M.toast({ html: res.data });
				navigate('/login');
			} else {
				const M = window.M;
				setData({ otp: '' });
				M.toast({ html: res.data });
			}
		} else {
			const M = window.M;
			M.toast({ html: 'Enter OTP' });
		}
	};
	return (
		<div className='verify container component'>
			<div className='card card-padding card-styles '>
				{loading && (
					<div className='progress'>
						<div className='indeterminate'></div>
					</div>
				)}
				<div className='padding'>
					<h3 className='center teal-text'>Verify OTP</h3>
					<div className='input-field '>
						<input
							id='otp'
							type='number'
							className='validate'
							value={data.otp}
							onChange={(e) => setData({ ...data, otp: e.target.value })}
						/>
						<label htmlFor='otp'>OTP</label>
					</div>
					<div className='right teal-text pointer'>Resend otp</div>
					<br />
					<div className='center'>
						<Link to='' className='waves-effect waves-light btn' onClick={handleVerify}>
							<i className='material-icons right'>send</i>Verify
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default VerifyOtp;
