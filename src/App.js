import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Forgot from './components/Forgot';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Register from './components/Register';
import Reset from './components/Reset';
import VerifyOtp from './components/VerifyOtp';
import Home from './screens/Home';

function App() {
	return (
		<BrowserRouter className='App'>
			<Navbar />
			<Routes>
				<Route path='/register' element={<Register />} />
				<Route path='/login' element={<Login />} />
				<Route path='/VerifyOtp' element={<VerifyOtp />} />
				<Route path='/forgot' element={<Forgot />} />
				<Route path='/reset' element={<Reset />} />
				<Route path='/home' element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
