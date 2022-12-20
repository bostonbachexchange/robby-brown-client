import eliaspic from '../assets/images/elias-pic.jpeg'

const Home = (props) => {
	// const { msgAlert, user } = props
	console.log('props in home', props)
const pageStyle = {
	display: 'flex',
}


	return (
		<>
			<div className='p-3'>
			<i class="fa fa-google" aria-hidden="true" position='absolute'></i>

				<h2 className="m-auto text-center border-top border-bottom" style={{width: '200px', boxShadow: '1px 1px 1px black'}}>Biography</h2>
			</div>
			<div class='bioPage'>
				<div style={{flex: '6'}}>
					<img className='m-4 mt-5' src={eliaspic} style={{width: '95%', border: '2px solid black', borderRadius: '10px'}}></img>
				</div>
				<div style={{flex: '6'}}>
					<p className="m-4 mt-5 fs-5">Pianist Elias Dagher values music's power to tell stories and build community. He lives in  Quincy, MA. Elias recently completed a two year fellowship at Bard College, where he worked daily with both vocalists and instrumentalists in his role as a collaborative pianist, accompanying lessons, classes, and recitals. The program is headed by pianists and vocal coaches Erika Switzer and Kayo Iwama, whose deep love of art song will leave a lasting impression on Elias. 
					<br></br>
					<br></br>He spent the summer of 2022 at the Tanglewood Music Center, where he met and collaborated with several inspiring colleagues. Some highlights of the summer included performing Julius Eastman's Gay Guerilla for four pianos and playing the preparatory piano rehearsals for George Benjamin's opera Lessons in Love and Violence, several of which were led by the composer himself. Some of Elias's most influential piano teachers have included Eugene Kaminsky, Jeffrey Goldberg, Jerome Lowenthal, Julian Martin, Alexander Korsantia, Vivian Weilerstein, and Cameron Stowe. 
					<br></br>
					<br></br>
					Elias also plays the mbira dzavadzimu, a plucked instrument of metal keys wound over a wooden soundboard. The instrument comes from the Shona people of Zimbabwe, and can be played both as a solo instrument and in ensembles of various sizes. He often plays, and occasionally performs, alongside a Boston-based group of practitioners of this traditional Zimbabwean music. 
					</p>

				</div>
			</div>
			<div className='w-100 p-2' style={{border: '1px solid black', }}>
				<address className="m-2"><strong>Reach me: </strong> 
				<a href="mailto:eid2107@columbia.edu">eid2107@columbia.edu</a>
				</address>
			</div>
		</>
	)
}

export default Home
