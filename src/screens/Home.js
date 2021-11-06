import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { BACKEND_URL } from '../apiEndpoints';

const Home = () => {
	const [token, setToken] = useState('');
	const [data, setData] = useState('');
	const navigate = useNavigate();
	const getData = async () => {
		let req = await fetch(`${BACKEND_URL}/api/v1/user`, {
			headers: {
				'Content-Type': 'application/json',
				authorization: localStorage.getItem('token'),
			},
		});
		let res = await req.json();
		console.log(res);
		setData(res.auth.mobile);
	};
	useEffect(() => {
		const tokenFromLocalStorage = localStorage.getItem('token');
		if (tokenFromLocalStorage) {
			setToken(tokenFromLocalStorage);
			getData();
		} else {
			navigate('/login');
		}
	}, []);
	return (
		<div className='Home'>
			{token && (
				<div className='center'>
					<h3 className='teal-text '>Your Dashboard</h3>
					<h5 className='teal-text'>Your Mobile Number is {data}</h5>
				</div>
			)}
		</div>
	);
};

export default Home;
