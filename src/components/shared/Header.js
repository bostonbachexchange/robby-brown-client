import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'

const linkStyle = {
    color: 'black',
    textDecoration: 'none',
	fontSize: '24px',
	justifyContent: 'space-between',
	marginLeft: '12px',
	marginRight: '12px',
}
const brandStyle = {
    color: 'black',
	padding: '0px',
    textDecoration: 'none',
	justifyContent: 'center',
	fontSize: '28px'
}
const authenticatedOptions = (
	<>
		<Nav.Item className='m-2'>
			<Link to='update-blog' style={linkStyle}>
				Update Blog
			</Link>
		</Nav.Item>
		<Nav.Item className='m-2'>
			<Link to='update-calendar' style={linkStyle}>
				Update Calendar
			</Link>
		</Nav.Item>
		<Nav.Item className='m-2'>
			<Link to='change-password' style={linkStyle}>
				Change Password
			</Link>
		</Nav.Item>
		<Nav.Item className='m-2'>
			<Link to='sign-out' style={linkStyle}>
				Log Out
			</Link>
		</Nav.Item>
	</>
)

// const unauthenticatedOptions = (
// 	<>
//         <Nav.Item className='m-2'>
// 		    <Link to='sign-up' style={linkStyle}>Sign Up</Link>
//         </Nav.Item>
//         <Nav.Item className='m-2'>
// 		    <Link to='sign-in' style={linkStyle}>Sign In</Link>
//         </Nav.Item>
// 	</>
// )

const alwaysOptions = (
	<>

				<>
					<Nav.Item className='m-2'>
						<Link to='/' style={linkStyle}>
							Home
						</Link>
					</Nav.Item>
				</>
				<>
					<Nav.Item className='m-2'>
						<Link to='/media' style={linkStyle}>
							Media
						</Link>
					</Nav.Item>
				</>
				<>
					<Navbar.Brand className='m-auto'>
						<Link to='/' style={brandStyle}>
							<strong>Elias Dagher</strong>
						</Link>
					</Navbar.Brand>
				</>
				<>
					<Nav.Item className='m-2'>
						<Link to='/blog' style={linkStyle}>
							Blog
						</Link>
					</Nav.Item>
				</>
				<>
					<Nav.Item className='m-2'>
						<Link to='/calendar' style={linkStyle}>
							Calendar
						</Link>
					</Nav.Item>
				</>
	</>
)

const Header = ({ user }) => (
	<>
			<Navbar bg='light' variant='dark' expand='md' className='border-bottom border-3'>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='m-auto'>
						{/* {user && (
							<span className='navbar-text mr-2'>Welcome, {user.email}</span>
						)} */}
						{alwaysOptions}
						{/* {user ? authenticatedOptions : unauthenticatedOptions} */}
					</Nav>
				</Navbar.Collapse>
			</Navbar>
			{user && 
			<Navbar bg='light' variant='dark' expand='md' className='border-bottom border-3'>
				<Nav className='m-auto'>
					{user ? authenticatedOptions : null}
				</Nav>
			</Navbar>}
	</>
)

export default Header
