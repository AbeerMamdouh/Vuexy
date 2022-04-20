
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react'
import { faStar, faCalendar, faMessage, faEnvelope, faSquareCheck, faMoon, faBell } from '@fortawesome/free-regular-svg-icons';
import { faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css'

export default class Navbar extends Component {

	constructor(props) {
		super(props)
		console.log(props);
	}

	render() {

		const { openNav } = this.props;

		return (
			<>
				<div className="navbar">
					<a id="btn" onClick={openNav}>
						<span></span>
						<span></span>
						<span></span>
					</a>
					<div id="menu">
						<a href="/"><FontAwesomeIcon icon={faCalendar}></FontAwesomeIcon></a>
						<a href="/"><FontAwesomeIcon icon={faMessage}></FontAwesomeIcon></a>
						<a href="/"><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon></a>
						<a href="/"><FontAwesomeIcon icon={faSquareCheck}></FontAwesomeIcon></a>
						<a href="/"><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></a>
					</div>
					<div className='nav-menu'>
						<a>
							<img style={{ width: "22px", height: "14" }} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAA1CAMAAACA7r40AAAA/FBMVEWyIjNPN2Y8O27///8/PnBOTXxycpY9PG9RUX5HR3dIR3dLSnlPTny4uMpWVYFFRHVwb5VlZIx7e52DgqOIh6aIiKc+PXBJSHhTUn9hYYqyIjReXohgX4lYV4Lr6/C2tcjPdYB0c5haWYRYV4Nra5GJiac+PW/FxdTHYG1RUH3eoajltbtOTXvty89BQHHg3+hSUX6GYoC6usyVlbFycZa7u8yUk6+sq8FCQXO0tMe1tMhiYYpMS3pDQnNvbpTExNN8fJ7GxdTGxtWCgqLHx9WXlrLXi5SYl7Kiobrg4Oiiorrn5u3n5+2jo7ukpLvw8PTx8fX09Pf19firqsC5sMNxAAAAAnRSTlPQ9qN1Xw4AAAGlSURBVHhe7ZXFiiRBFEVjznvp5W7t7j3u7m7//y8D1dAMGbnI4jW5KOpsgjibCxFcrrtVEmcBGAGQJHB98d3EgEM/ygsg/nwRAy15rxQ4Ywh3JQX49hVgKA/Ad1hDkkGTMSQJjGkOEmo133FmwAEQyl8FfSj3gFgkzjsQAw6AZ796AP2fGcDBS8/ZQ7ZQlJ2d+bEFqp6zhuh9Cf9/pDtKkTs04KBTD4jgx3eICOodoshz1p7M6UUAUQ+Ap2Pf2UMI5UBBX18/Ut7ZQ84Jui10QKsbcA7dt77jxIBDt+sxMNzrD4HL+rZS4Iw9iTZkCjRFmsBUHkcUOGMI7dkpKezuQsrprM3zR76zN572ekdBX623gaONJ0d5B5sGHAA1+QTwRQJgX2Q/7+w9GZGlDZKERpoxgkbDc8s0WscGSo+WGMiNVlgwWuFNjdafPsDe7wzg3RvP2UNCFGVtbX6EoOo7PhgoO1rGnswHiquB4mqgfIcxpBTGkNslMf2JVMAShRxXgJtUwBKFbFbAqicL4U4qYNWThXCHFbDqyUK4swpY9WQhXBX8A2rVjaQ6HWXmAAAAAElFTkSuQmCC" />&nbsp;<span style={{ color: "#6e6b7b", fontSize: "12px" }}>English</span></a>
						<a className='moon' href="/"><FontAwesomeIcon icon={faMoon}></FontAwesomeIcon></a>
						<a href="/"><FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon></a>
						<a href="/" style={{position:"relative"}}><FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon><span className="w3-badge badgee">4</span></a>
						<a href="/" style={{position:"relative"}}><FontAwesomeIcon icon={faBell}></FontAwesomeIcon><span className="w3-badge">8</span></a>
						<a className='person-name' style={{ display: "inline-grid", justifyItems: "end" }}>
							<span style={{ color: "#6e6b7b", fontSize: "12px" }}>John Deo</span>
							<span style={{ color: "rgb(158 157 163)", fontSize: "11px" }}>admin</span>
						</a>
						<a style={{ marginLeft: "10px" }}><img style={{ width: "35px", height: "14", borderRadius: "50%" }} src="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/13-small.d796bffd.png" /></a>
					</div>
				</div>

			</>
		)
	}
}
