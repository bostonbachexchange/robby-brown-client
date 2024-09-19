
const Media = () => {

	return (
		<div className='pb-3' style={{backgroundColor: 'rgb(238, 238, 238)'}}>
			<div className='p-3'>
				<h2 className="m-auto text-center border-top border-bottom" style={{width: '200px', boxShadow: '1px 1px 1px black', borderRadius: '4px', backgroundColor: '#FFF'}}>Media</h2>
			</div>
			<div>

				<div className='mediaPage' >
					<div className='mt-auto mb-auto' style={{flex: '6'}}>
						<iframe className='rounded videoWebStyle' src="https://www.youtube.com/embed/EIoQtrMeA_o" allowFullScreen></iframe>
					</div>
					<div className='discriptionWeb'>
						<h3>Piazzolla: Café 1930</h3>
						<p className="m-3 fs-5">Violinist June Lee and guitarist Robby Brown play Astor Piazzolla's Café 1930, the middle movement of the Argentinian composer's "Histoire du Tango."  Captured in concert at a Heifetz Institute "Stars of Tomorrow" concert at Mary Baldwin University's Francis Auditorium in Staunton, VA.  
						<br></br><br></br>
						</p>
					</div>
				</div>

				<div className='mediaPage mediaReverse' >
					<div className='discriptionWeb'>
						<h3>Antonín Dvořák: Silent Woods</h3>
						<p className="m-3 fs-5">Violist Andrew Gonzalez and guitar Robby Brown, perform a stunning viola--and-guitar arrangement of Antonin Dvorak's "Silent Woods" at the debut Heifetz Institute concert of 2019 at the American Shakespeare Center's Blackfriars Playhouse in Staunton, VA.  The arrangement is by guitarist Julia Egan,  commissioned by the Heifetz Institute. 
						</p>
					</div>
					<div className='text-center' style={{flex: '6'}}>
						<iframe className='rounded videoWebStyle'  src="https://www.youtube.com/embed/gz0Iw2CTWQQ" allowFullScreen></iframe>
					</div>
				</div>
				<div className='mediaPage' >
					<div className='text-center mt-auto mb-auto' style={{flex: '6'}}>
						<iframe className='rounded videoWebStyle' src="https://www.youtube.com/embed/wSmmROwGxoo" allowFullScreen></iframe>
					</div>
					<div className='discriptionWeb' >
						<h3 >Jonas Tarm: Thoughts of Prayer</h3>
						<p className="m-3 fs-5" >Robby Brown performs Jonas Tarm's "Thoughts of Prayer." Both Brown and Tarm are students at New England Conservatory in Boston. This performance was recorded live in Jordan Hall April 19, 2016.Robby Brown performs Jonas Tarm's "Thoughts of Prayer." Both Brown and Tarm are students at New England Conservatory in Boston. This performance was recorded live in Jordan Hall April 19, 2016. 
						</p>
					</div>
				</div>

				<div className='mediaPage mediaReverse' >
					<div className='discriptionWeb'>
						<h3>Robert Beaser - Cindy (Mountain songs)</h3>
						<p className="m-3 fs-5">Violinist Onyou Kim and guitarist Robby Brown.
						</p>
					</div>
					<div className='text-center' style={{flex: '6'}}>
						<iframe className='rounded videoWebStyle'  src="https://www.youtube.com/embed/EvoakKMK9NA" allowFullScreen></iframe>
					</div>
				</div>

			</div>

		</div>
	)
}

export default Media
