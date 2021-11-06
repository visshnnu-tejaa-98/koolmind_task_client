import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { BACKEND_URL } from '../apiEndpoints';
const Register = () => {
	const [data, setData] = useState({ name: '', mobile: '', password: '', conformPassword: '' });
	const [loading, setLoading] = useState(false);
	let navigate = useNavigate();
	const handleRegister = async (e) => {
		e.preventDefault();
		if (data.name && data.mobile && data.password && data.conformPassword) {
			setLoading(true);
			const req = await fetch(`${BACKEND_URL}/api/v1/user/regsiter`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			});
			const res = await req.json();
			console.log(res);
			if (res.status === false) {
				const M = window.M;
				M.toast({ html: res.data });
				setLoading(false);
			}
			if (res.status === true) {
				console.log('before');
				localStorage.setItem('number', `${data.mobile}`);
				console.log('after');
				navigate(`/verifyOtp`);
			}
		} else {
			const M = window.M;
			M.toast({ html: 'Enter all fields' });
		}
	};
	return (
		<div className='register container component'>
			<div className='card card-padding card-styles '>
				{loading && (
					<div className='progress'>
						<div className='indeterminate'></div>
					</div>
				)}
				<div className='padding'>
					<h3 className='center teal-text'>Register</h3>
					<form action=''>
						<div className='input-field '>
							<input
								id='name'
								type='text'
								className='validate'
								value={data.name}
								onChange={(e) => setData({ ...data, name: e.target.value })}
							/>
							<label htmlFor='name'>Name</label>
						</div>
						<div className='input-field '>
							<input
								id='mobile'
								type='number'
								className='validate'
								value={data.mobile}
								onChange={(e) => setData({ ...data, mobile: e.target.value })}
							/>
							<label htmlFor='mobile'>Mobile</label>
						</div>
						<div className='input-field '>
							<input
								id='password'
								type='password'
								className='validate'
								value={data.password}
								onChange={(e) => setData({ ...data, password: e.target.value })}
							/>
							<label htmlFor='password'>Password</label>
						</div>
						<div className='input-field '>
							<input
								id='conformPassword'
								type='password'
								className='validate'
								value={data.conformPassword}
								onChange={(e) => setData({ ...data, conformPassword: e.target.value })}
							/>
							<label htmlFor='conformPassword'>Conform Password</label>
						</div>
						<div>
							<Link to='/login'>
								<span className='right teal-text pointer'>Login</span>
							</Link>
						</div>
						<div className='center'>
							<Link
								to=''
								className='waves-effect waves-light btn btn-margin'
								type='submit'
								onClick={handleRegister}
							>
								<i className='material-icons right'>send</i>Register
							</Link>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Register;
