import React from "react";
import logo from "../images/logo.png";

class Header extends React.Component {
	render() {
		return (
			<header className="header">
				<div className="container">
					<span className="header__btn"></span>
					<nav className="header__nav">
						<div className="header__nav-wrap">
							<a href="" className="header__logo">
								<img className="header__logo-img" src={logo} alt=""/>
							</a>
							<ul className="header__list">
								<li><a href="" className="header__list-link">Home</a></li>
								<li><a href="" className="header__list-link">About</a></li>
								<li><a href="" className="header__list-link">Tickets</a></li>
								<li><a href="" className="header__list-link">Contacts</a></li>
							</ul>
						</div>
						<a href="" className="header__list-link">+1 893 839-23-64</a>
					</nav>
				</div>
			</header>
		)
	}
}

export default Header