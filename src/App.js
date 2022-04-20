import React, { Component } from 'react'
import Navbar from './components/Navbar/Navbar'
import Categories from './components/Categories/Categories'
import SideMenu from './components/SideMenu/SideMenu'
import Filters from './components/Filters/Filters'
import './App.css'
import Breadcrumb from './components/BreadCrumb/Breadcrumb'
import { products } from './data.js';

function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}


export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      products: products,
      sideBarHovered: false,
      openSideHover: true
    }
  }

  sideBarExtendedHandler = () => {
    this.setState({sideBarHovered: true})
  }
  sideBarShrinkedHandler = () => {
    this.setState({sideBarHovered: false})
  }
  menuClickedHandler = () => {
    this.setState(prevState => {
      return {
        ...prevState,
        sideBarHovered: !prevState.sideBarHovered,
        openSideHover: !prevState.openSideHover
      }
    })
  }

  render() {

    return (
      <>
        <div className="grid-container">
          <div className={`item1 ${this.state.sideBarHovered && "push-right"}`}><Navbar openNav={openNav} closeNav={closeNav} /></div>
          <div className="item2">
            <SideMenu openNav={openNav} closeNav={closeNav} extendMenu={this.state.openSideHover && this.sideBarExtendedHandler}
                      shrinkMenu={this.state.openSideHover && this.sideBarShrinkedHandler} menuClicked={this.menuClickedHandler}
            />
          </div>

          <div className={`item5 ${this.state.sideBarHovered && "shrink"}`}><Breadcrumb /></div>
                    <div className={`item3 ${this.state.sideBarHovered && "shrink"}`}><Filters shrink={this.state.sideBarHovered}/></div>
          <div className="item4"><Categories products={this.state.products} /></div>
          <div className='buy-now'>
            <a href='/'>Buy Now</a>
          </div>
        </div>
      </>
    )
  }
}
