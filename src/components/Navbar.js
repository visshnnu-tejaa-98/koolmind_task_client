import { useEffect } from 'react';
const Navbar = () => {
	useEffect(() => {
		const M = window.M;
		M.AutoInit();
	}, []);
	return (
		<div className='navbar'>
			<nav className='teal'>
				<div className='nav-wrapper container '>
					<a href='#!' className='brand-logo'>
						<strong>MY APP</strong>
					</a>
					<a href='#' data-target='mobile-demo' className='sidenav-trigger'>
						<i className='material-icons'>menu</i>
					</a>
					<ul className='right hide-on-med-and-down'>
						<li>
							<a className='waves-effect waves-dark btn-flat white'>
								<i className='material-icons right'>forward</i>Register
							</a>
						</li>
					</ul>
				</div>
			</nav>

			<ul className='sidenav' id='mobile-demo'>
				<li>
					<a href='sass.html'>Login</a>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
