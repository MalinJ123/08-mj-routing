import { Outlet, Link, NavLink } from 'react-router-dom'

const Root = () => (
	<div>
		<header>
			<nav>
				<NavLink to="/"> Start </NavLink>
				<NavLink to="/products"> Products </NavLink>
				<NavLink to="/about"> About </NavLink>
				<NavLink to="/booking"> Booking </NavLink>
				<NavLink to="/error"> Error </NavLink>
				<NavLink to="/details/1">DykDator</NavLink>
			</nav>
		</header>
		<main>
			<Outlet />
		</main>
	</div>
)

export default Root
