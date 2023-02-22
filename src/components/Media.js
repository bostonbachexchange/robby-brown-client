
const Media = () => {

	return (
		<div className='pb-3' style={{backgroundColor: '#EEE'}}>
			<div className='p-3'>
				<h2 className="m-auto text-center border-top border-bottom" style={{width: '200px', boxShadow: '1px 1px 1px black', borderRadius: '4px', backgroundColor: '#FFF'}}>Media</h2>
			</div>
			<div>

				<div className='mediaPage' >
					<div className='mt-auto mb-auto' style={{flex: '6'}}>
						<iframe className='rounded videoWebStyle' src="https://www.youtube.com/embed/EwGbCQMd-S4" allowFullScreen></iframe>
					</div>
					<div className='discriptionWeb'>
						<h3>Mahler - “Rheinlegendchen” | NEC Liederabend Series</h3>
						<p className="m-3 fs-5">Soprano <a href='https://www.emilysiar.com/home'>Emily Siar</a> and pianist Elias Dagher perform “Rheinlegendchen” (Little Rhine Legend) from Mahler’s Des Knaben Wunderhorn, a collection of his charming settings of German folk poems. 
						<br></br><br></br>
						</p>
					</div>
				</div>

				<div className='mediaPage mediaReverse' >
					<div className='discriptionWeb'>
						<h3>Janacek Violin Sonata</h3>
						<p className="m-3 fs-5">Violinist <a href='https://www.david-bernat.com/'>David Bernat</a> and pianist Elias Dagher perform at Burnes Hall in New England Conservatory, May 2018. Recording by Simon Yue.
						</p>
					</div>
					<div className='text-center' style={{flex: '6'}}>
						<iframe className='rounded videoWebStyle'  src="https://www.youtube.com/embed/JRrzXDe-6ZY" allowFullScreen></iframe>
					</div>
				</div>
				<div className='mediaPage' >
					<div className='text-center mt-auto mb-auto' style={{flex: '6'}}>
						<iframe className='rounded videoWebStyle' src="https://www.youtube.com/embed/E6zfq5DOCUM" allowFullScreen></iframe>
					</div>
					<div className='discriptionWeb' >
						<h3 >VAP Degree Recital <br></br> <a href="https://www.paulinetanmezzo.com/">Pauline Tan</a></h3>
						<p className="m-3 fs-5" >Bard College Conservatory Graduate Vocal Arts Program. Degree Recital on May 21, 2021 at László Z. Bitó, '60 Conservatory Building. 
						</p>
					</div>
				</div>
				<div className='mediaPage mediaReverse' >
					<div className='discriptionWeb'>
						<h3>Bach Sonata for Violin and Keyboard in E Major, BWV 1016</h3>
						<p className="m-3 fs-5">Violinist <a href='https://www.yiliangjiang.net/bio'>Yiliang Jiang</a> and pianist Elias Dagher. November 14, 2019.
						</p>
					</div>
					<div className='text-center' style={{flex: '6'}}>
						<iframe className='rounded videoWebStyle'  src="https://www.youtube.com/embed/xARcVe-sqPc" allowFullScreen></iframe>
					</div>
				</div>
			</div>

		</div>
	)
}

export default Media
