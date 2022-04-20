import React, { Component } from 'react'
import './SideMenu.css'



export default class SideMenu extends Component {
  constructor(props) {
    super(props);
  }


   menuClickHandler = (e) => {
    e.preventDefault();
    document.querySelector("html").classList.toggle("openNav");
    document.querySelector(".nav-toggle").classList.toggle("active");
    this.props.menuClicked()
  }

  render() {
    const { openNav, closeNav } = this.props;

    return (
      <>
        {/* <div id="mySidebar" class="sidebar">
        <a><img src='https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/logo.36f34a9f.svg'/>
         Vuexy
         <a href="##" class="closebtn" onClick={closeNav}>×</a>
         </a>
          <a href="##">About</a>
          <a href="##">Services</a>
          
          <a href="##" id='myDropdown' onClick={myFunction}>Dropdown 
            <i class="fa fa-caret-down"></i>
          </a>
          <div class="dropdown-container" style={{visibility:"hidden"}}>
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
          
          <a href="#contact">Search</a>
          <a href="##">Clients</a>
          <a href="##">Contact</a>
        </div>

        <div id="main">
          <button class="openbtn" onClick={openNav}>☰</button>
        </div> */}

<div className="primary-nav">

<button href="/" className="hamburger open-panel nav-toggle openbtn" onClick={this.menuClickHandler}>
  <span className="screen-reader-text">Menu</span>
</button>

<div role="navigation" className="menu" onMouseOver={this.props.extendMenu} onMouseLeave={this.props.shrinkMenu}>

  <a href="/" className="logotype"><img src='https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/logo.36f34a9f.svg' style={{maxWidth:"36px"}}/><span style={{color: "#7367f0", paddingLeft:"1rem", fontSize: "1.3rem", fontWeight:"600"}}>Vuexy</span></a>

  <div className="overflow-container">

    <ul className="menu-dropdown">


      <li><a href="/">Dashboard</a><span className="icon"><i className="fa fa-dashboard"></i></span></li>

       <li><h6>Apps & pages</h6></li>
      <li className="menu-hasdropdown">
        <a href="/">Settings</a><span className="icon"><i className="fa fa-gear"></i></span>

        <label title="toggle menu" htmlFor="settings">
          <span className="downarrow"><i className="fa fa-caret-down"></i></span>
        </label>
        <input type="checkbox" className="sub-menu-checkbox" id="settings" />

        <ul className="sub-menu-dropdown">
          <li><a href="">Profile</a></li>
          <li><a href="">Security</a></li>
          <li><a href="">Account</a></li>
        </ul>
      </li>

      <li><a href="/">Favourites</a><span className="icon"><i className="fa fa-heart"></i></span></li>

      <li><a href="/">Messages</a><span className="icon"><i className="fa fa-envelope"></i></span></li>

    </ul>

  </div>

</div>

</div>
      </>
    )
  }
}
