import React from "react";
import introImg from "../images/intro.png";

class Intro extends React.Component {
	render() {
		return(
			<div className="intro">
				<img className="intro__img" src={introImg}/>
				<div className="intro__content">
					<div className="container">
						<span>Not tne event. The life</span>
						<h1>Burning MAN</h1>
						<button>Book the tickets</button>
					</div>
				</div>
			</div>
		)
	}
}

export default Intro;