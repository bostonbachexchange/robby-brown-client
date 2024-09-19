// import React, { Component, Fragment } from 'react'
import React, { useState, Fragment, Component } from 'react'
import { Route, Routes } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

// import AuthenticatedRoute from './components/shared/AuthenticatedRoute'
import AutoDismissAlert from './components/shared/AutoDismissAlert/AutoDismissAlert'
import Header from './components/shared/Header'
import RequireAuth from './components/shared/RequireAuth'
import Home from './components/Home'
import Blog from './components/Blog'
import Media from './components/Media'
import SignUp from './components/auth/SignUp'
import SignIn from './components/auth/SignIn'
import SignOut from './components/auth/SignOut'
import ChangePassword from './components/auth/ChangePassword'
import Calendar from './components/Calendar'
import CreateBlog from './components/blog/CreateBlog'
import ShowBlog from './components/blog/ShowBlog'
import CreateEvent from './components/shared/event/CreateEvent'


const App = () => {

  const [user, setUser] = useState(null)
  const [msgAlerts, setMsgAlerts] = useState([])
  const [updatedBlogs, setUpdatedBlogs] = useState(true)
  const [updatedEvents, setUpdatedEvents] = useState(true)
  
  const clearUser = () => {
    // console.log('clear user ran')
    setUser(null)
  }

	const deleteAlert = (id) => {
		setMsgAlerts((prevState) => {
			return (prevState.filter((msg) => msg.id !== id) )
		})
	}

	const msgAlert = ({ heading, message, variant }) => {
		const id = uuid()
		setMsgAlerts(() => {
			return (
				[{ heading, message, variant, id }]
      )
		})
	}

		return (
			<Fragment>
				<Header user={user} />
				<Routes>
					<Route path='/robby-brown-client/' element={<Home msgAlert={msgAlert} user={user} />} />
					<Route path='/robby-brown-client/media' element={<Media msgAlert={msgAlert} user={user} />} />
					<Route path='/calendar' element={<Calendar msgAlert={msgAlert} user={user} updatedEvents={updatedEvents}/>} />
					<Route path='/blog' element={<Blog msgAlert={msgAlert} user={user} updatedBlogs={updatedBlogs}/>} />
					<Route
						path='/login'
						element={<SignIn msgAlert={msgAlert} setUser={setUser} />}
					/>
					<Route
						path='/robby-brown-client/sign-up'
						element={<SignUp msgAlert={msgAlert} setUser={setUser} />}
					/>
					<Route
						path='/sign-out'
						element={
						<RequireAuth user={user}>
							<SignOut msgAlert={msgAlert} clearUser={clearUser} user={user} />
						</RequireAuth>
						}
					/>
					<Route
						path='/change-password'
						element={
						<RequireAuth user={user}>
							<ChangePassword msgAlert={msgAlert} user={user} />
						</RequireAuth>}
					/>
					<Route
						path='/blog/:id'
						element={
							<ShowBlog msgAlert={msgAlert} user={user} />
					}
					/>
					<Route
						path='/update-blog'
						element={
						<RequireAuth user={user}>
							<CreateBlog msgAlert={msgAlert} user={user} setUpdatedBlogs={setUpdatedBlogs}/>
						</RequireAuth>}
					/>
					<Route
						path='/update-calendar'
						element={
						<RequireAuth user={user}>
							<CreateEvent msgAlert={msgAlert} user={user} setUpdatedEvents={setUpdatedEvents}/>
						</RequireAuth>} 
					/> 
				</Routes>
				{msgAlerts.map((msgAlert) => (
					<AutoDismissAlert
						key={msgAlert.id}
						heading={msgAlert.heading}
						variant={msgAlert.variant}
						message={msgAlert.message}
						id={msgAlert.id}
						deleteAlert={deleteAlert}
					/>
				))}
			</Fragment>
		)
}

export default App