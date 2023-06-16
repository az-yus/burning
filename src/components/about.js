import React from "react";
import aboutImg1 from "../images/img1.jpg";
import aboutImg2 from "../images/img2.jpg";
import aboutImg3 from "../images/img3.jpg";

class About extends React.Component {
	render(){
		return(
			<div className="about">
				<div className="container">
					<h2 className="about__title">About the event</h2>
					<div className="about-grid">
						<div className="about__reb">
							<span>Rebuilding the society</span>
							<p>Burning Man is a network of people inspired by the values reflected in 
								the Ten Principles and united in the pursuit of a more creative and connected 
								existence in the world. Throughout the year we work to build Black Rock City, 
								home of the largest annual Burning Man gathering, and nurture the distinctive 
								culture emerging from that experience.
							</p>
							<div className="about__img-wrap">
								<img src={aboutImg1} />
								<img src={aboutImg2} />
							</div>
						</div>
						<div className="about__this">
							<span>This drives us</span>
							<p>Burning Man Project will bring experiences to people in grand, awe-inspiring and 
								joyful ways that lift the human spirit, address social problems, and inspire a 
								sense of culture, community, and civic engagement. Burning Man provides infrastructural 
								tools and frameworks to support local communities in applying the Ten Principles through 
								six interconnected program areas, including Arts, Civic Involvement, Culture, Education, 
								Philosophical Center, and Social Enterprise. 
							</p>
							<img src={aboutImg3} />
						</div>
					</div>
					<p className="about__text">©1989-2020 burning man project</p>
				</div>
			</div>
		)
	}
}

export default About;