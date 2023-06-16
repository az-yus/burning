import React from "react";
import Header from "./header";
import Intro from "./intro";
import About from "./about";

class Burning extends React.Component {
	render() {
		return(
			<div className="react-import">
				<Header />
				<Intro />
				<main>
					<About />
				</main>
			</div>
		)
	}
}

export default Burning