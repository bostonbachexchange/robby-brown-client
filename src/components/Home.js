const Home = (props) => {
	// const { msgAlert, user } = props
	console.log('props in home', props)

	return (
		<>
			<h2 className="m-2 text-center">Biography</h2>
			<p className="m-4">Pianist Elias Dagher values music's power to tell stories and build community. He recently moved back to Quincy after a two year fellowship at Bard College. There, he worked daily with both vocalists and instrumentalists in his role as a collaborative pianist, accompanying lessons, classes, and recitals. He spent the summer of 2022 at the Tanglewood Music Center, where he met and collaborated with several inspiring colleagues. Some highlights of the summer included performing Julius Eastman's Gay Guerilla for four pianos and playing the preparatory piano rehearsals for George Benjamin's opera Lessons in Love and Violence, several of which were led by the composer himself. Some of Elias's most influential piano teachers have included Eugene Kaminsky, Jeffrey Goldberg, Jerome Lowenthal, Julian Martin, Alexander Korsantia, Vivian Weilerstein, and Cameron Stowe. At Bard, he worked closely with pianists and vocal coaches Erika Switzer and Kayo Iwama, whose deep love of art song will leave a lasting impression. Elias also plays the mbira dzavadzimu, a plucked instrument of metal keys wound over a wooden soundboard. The instrument comes from the Shona people of Zimbabwe, and can be played both as a solo instrument and in ensembles of various sizes. He often plays, and occasionally performs, alongside a Boston-based group of practitioners of this traditional Zimbabwean music. 
			</p>
			<address className="m-2"><strong>Reach me:</strong> eid2107@columbia.edu</address>
		</>
	)
}

export default Home
