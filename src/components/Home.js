import robbypic from '../assets/images/headshot.jpg'
const Home = () => {
	return (
		<>
			<div style={{backgroundColor: 'rgb(238, 238, 238)', minHeight: '100vh'}}>
				<div className='p-3'>
					<h2 className="m-auto text-center border-top border-bottom" style={{width: '200px', boxShadow: '1px 1px 1px black', borderRadius: '4px', backgroundColor: '#FFF'}}>Biography</h2>
				</div>
				<div class='bioPage'>
					<div style={{flex: '6'}} className='text-center'>
						<img className='mt-5' src={robbypic} style={{width: '95%', border: '2px solid black', borderRadius: '10px'}}></img>
					</div>
					<div style={{flex: '6'}}>
						<p className="mt-4 pb-4 stuff mb-0">
						With over a decade of experience teaching classical guitar, Robby Brown brings a wealth of expertise and passion to his students. Based in Boston, MA, Robby is a highly accomplished classical guitarist with a distinguished educational background and a record of international recognition.
						<br></br>
						<br></br>
						Robby holds an undergraduate degree from The University of Southern Mississippi, a master’s degree from the University of Texas at Austin, and a graduate diploma from the New England Conservatory. His rigorous training and dedication to the craft have earned him notable accolades, including first prize at the 2013 Classical Minds Competition, third prize at the Florida International Guitar Competition, and fourth prize at the Columbus State Symposium and Competition.
						<br></br>
						<br></br>
						In his teaching, Robby emphasizes a comprehensive approach that blends technical precision with expressive artistry. He is dedicated to nurturing each student's individual growth and fostering a deep appreciation for classical guitar music. Whether working with beginners or advanced students, Robby’s lessons are tailored to meet each student’s unique needs, helping them achieve their personal musical goals.
						<br></br>
						<br></br>
						Robby’s commitment to excellence and his engaging teaching style make him an exceptional choice for anyone looking to elevate their classical guitar skills.
						</p>
					</div>
				</div>
			</div>
				<div className='w-100 p-2 footer' style={{border: '1px solid black', backgroundColor: '#fff'}}>
					<address className="m-2"><strong>Reach me: </strong> 
					<a href="mailto:robbybrown7@gmail.com">robbybrown7@gmail.com</a>
					</address>
				</div>
			</>
	)
}

export default Home
