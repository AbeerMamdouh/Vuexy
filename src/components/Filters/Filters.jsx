import React, { Component } from 'react'
import './Filters.css'


export default class Filters extends Component {

  MultiRange = [
    { id: 1, name: "fav_language", price: "All" },
    { id: 2, name: "fav_language", price: "<= $10" },
    { id: 3, name: "fav_language", price: "$10 - $100" },
    { id: 4, name: "fav_language", price: "$100 - $500" },
    { id: 5, name: "fav_language", price: ">= $500" },
  ];

  Categories = [
    { id: 1, name: "Appliances" },
    { id: 2, name: "Audio" },
    { id: 3, name: "Cell Phones" },
    { id: 4, name: "Computers & Tablets" },
    { id: 5, name: "Video Games" },
  ];

  Brands = [
    { id: 1, name: "Samsung" },
    { id: 2, name: "HP" },
    { id: 3, name: "Apple" },
    { id: 4, name: "Sony" },
    { id: 5, name: "Whirlpool" },
  ];



  render() {
    return (

      <>

        <h6 style={{ paddingBottom: "10px" }}>Filters</h6>

        <div className='filter-menu'>
          <div>
            <h6>Multi Range</h6>
            {this.MultiRange.map((value, index) => {
              return (
                <div key={index}>
                  <input type="radio" id="" name={value.name} />
                  <label htmlFor="html">{value.price}</label><br />
                </div>
              )

            })}
          </div>

          <div>
            <h6>Price Range</h6>
            <form action="/action_page.php">
              <input style={{ width: "130%" }} type="range" id="vol" name="vol" min="0" max="50" />
            </form>
          </div>

          <div>
            <h6>Categories</h6>
            {this.Categories.map((value, index) => {
              return (
                <div key={index}>
                  <input type="radio" id="" />
                  <label htmlFor="html">{value.name}</label><br />
                </div>
              )
            })}
          </div>

          <div>
            <h6>Brands</h6>
            {this.Brands.map((value, index) => {
              return (
                <div key={index}>
                  <input type="radio" id="" />
                  <label htmlFor="html">{value.name}</label><br />
                </div>
              )
            })}
          </div>

        </div>






      </>
    )
  }
}