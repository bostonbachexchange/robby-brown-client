// import YoutubeEmbed from './shared/YouTubeEmbed'
// import YoutubeEmbed from '../shared/YoutubeEmbed'
// import YouTube from 'react-youtube';

const Media = (props) => {
	// const { msgAlert, user } = props
	console.log('props in home', props)

	return (
		<>
			<h2 className="text-center"><strong>Video</strong></h2>
			<>
				<div className="text-center">
					<div className='m-2' >
						<h3>VAP Degree Recital: Pauline Tan</h3>
						<iframe style={{width: '80%', height: '500px'}} src="https://www.youtube.com/embed/E6zfq5DOCUM"></iframe>
					</div>
					<div className='m-2' >
						<h3>Mahler - “Rheinlegendchen” | NEC Liederabend Series</h3>
						<iframe style={{width: '80%', height: '500px'}} src="https://www.youtube.com/embed/EwGbCQMd-S4"></iframe>
					</div>
					<div className='m-2' >
						<h3>Janacek Violin Sonata</h3>
						<iframe style={{width: '80%', height: '500px'}} src="https://www.youtube.com/embed/JRrzXDe-6ZY"></iframe>
					</div>
					<div className='m-2' >
						<h3>Bach Sonata for Violin and Keyboard in E Major, BWV 1016</h3>
						<iframe style={{width: '80%', height: '500px'}} src="https://www.youtube.com/embed/xARcVe-sqPc"></iframe>
					</div>
				</div>

			</>
		</>
	)
}

export default Media
