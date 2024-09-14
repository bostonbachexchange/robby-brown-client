import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { faYoutube} from '@fortawesome/free-brands-svg-icons'

import { library } from '@fortawesome/fontawesome-svg-core'

library.add(faEnvelope, faYoutube)

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
	fontSize: '28px',
	fontWeight: '700'
}
const authenticatedOptions = (
	<>
		<Nav.Item className='m-2'>
			<Link to='update-blog' style={linkStyle}>
				<span className='hoverClass1'>Update Blog</span>
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
		<Fragment>
				<>
					<Nav.Item className='m-auto'>
						<Link to='/' style={linkStyle}>
						<span className='HoverClass1'>Home</span>
						</Link>
					</Nav.Item>
				</>
				<>
					<Nav.Item className='m-auto'>
						<Link to='/media' style={linkStyle}>
						<span className='HoverClass1'>Media</span>
						</Link>
					</Nav.Item>
				</>
				<>
					<Navbar.Brand className='m-auto'>
						<Link to='/' style={brandStyle}>
							Robby Brown</Link>
					</Navbar.Brand>
				</>
				<>
					<Nav.Item className='m-auto'>
						<Link to='/blog' style={linkStyle}>
						<span className='HoverClass1'>Blog</span>
						</Link>
					</Nav.Item>
				</>
				<>
					<Nav.Item className='m-auto'>
						<Link to='/calendar' style={linkStyle}>
						<span className='HoverClass1'>Calendar</span>
						</Link>
					</Nav.Item>
				</>
		</Fragment>
		
	</>
)

const Header = ({ user }) => (
	<>
			<Navbar variant='light' expand='md' className='border-bottom border-3 m-2 mb-0 linkptile'>
				<Navbar.Toggle aria-controls='basic-navbar-nav'/>
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='m-auto'>
						{/* {user && (
							<span className='navbar-text mr-2'>Welcome, {user.email}</span>
						)} */}
						{alwaysOptions}
						{/* {user ? authenticatedOptions : unauthenticatedOptions} */}
					</Nav>
				</Navbar.Collapse>
				{/* <a href="/" target="_blank">
					<FontAwesomeIcon icon={faYoutube} className='m-1 border border-4 shadow rounded' size="lg" color="darkred" />
				</a> */}
				<a href="mailto:eid2107@columbia.edu" target="_blank">
					<FontAwesomeIcon icon={faEnvelope} className='m-1 border border-4 shadow rounded' size="lg" color="darkblue" />
				</a>
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
