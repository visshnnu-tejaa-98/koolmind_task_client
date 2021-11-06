import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BACKEND_URL } from '../apiEndpoints';

const Login = () => {
	const [data, setData] = useState({ mobile: '', password: '' });
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();
	const handleLogin = async () => {
		if (data.mobile && data.password) {
			setLoading(true);
			const req = await fetch(`${BACKEND_URL}/api/v1/user/login`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			});
			const res = await req.json();
			console.log(res);
			setLoading(true);
			if (res.status) {
				localStorage.setItem('token', res.token);
				navigate('/home');
			} else {
				const M = window.M;
				M.toast({ html: res.data });
			}
		} else {
			const M = window.M;
			M.toast({ html: 'Enter all fields' });
		}
	};
	return (
		<div className='login container component'>
			<div className='card card-padding card-styles '>
				{loading && (
					<div className='progress'>
						<div className='indeterminate'></div>
					</div>
				)}
				<div className='padding'>
					<h3 className='center teal-text'>Login</h3>
					<div className='input-field '>
						<input
							id='mobile'
							type='text'
							className='validate'
							value={data.mobile}
							onChange={(e) => setData({ ...data, mobile: e.target.value })}
						/>
						<label htmlFor='mobile'>Mobile</label>
					</div>
					<div className='input-field '>
						<input
							id='password'
							type='text'
							className='validate'
							value={data.password}
							onChange={(e) => setData({ ...data, password: e.target.value })}
						/>
						<label htmlFor='password'>Password</label>
					</div>
					<div>
						<Link to='/forgot'>
							<span className='left teal-text pointer'>Forgot Password?</span>
						</Link>
						<Link to='/register'>
							<span className='right teal-text pointer'>No Account?</span>
						</Link>
					</div>
					<div className='center '>
						<Link to='' className='waves-effect waves-light btn btn-margin' onClick={handleLogin}>
							<i className='material-icons right'>send</i>Login
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
