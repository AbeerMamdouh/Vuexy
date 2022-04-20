import React, { Component } from 'react'
import './Categories.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faList, faMagnifyingGlass, faBorderAll, faCartShopping } from '@fortawesome/free-solid-svg-icons';

export default class Categories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: 'Featured',
            products: this.props.products,
            searchValue: ""
        }
    }

    handleSearch = (e) => {
        this.setState({ searchValue: e.target.value });
        if (e.target.value) {
            const newProducts = this.props.products?.filter(function (el) { return el.name.includes(e.target.value) ? el : ""; });
            this.setState({ products: newProducts, searchValue: e.target.value })
        } else {
            this.setState({ products: this.props.products, searchValue: '' })
        }
    }

    handleChange = (event) => {
        this.setState({ selectedOption: event.target.value });

        if (event.target.value === "Highest") {
            const newProducts = this.props.products?.filter((product => product.price >= 500));
            this.setState({ products: newProducts })
        } else if (event.target.value === "Lowest") {
            const newProducts = this.props.products?.filter((product => product.price < 500));
            this.setState({ products: newProducts })
        } else {
            this.setState({ products: this.props.products })
        }
    }

    render() {
        return (
            <>
                <div className="container result">

                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: "10px" }}>
                        <h6>27 results found</h6>

                        <div className="btn-group">
                            <select className='form-control mx-3' name="caterers" value={this.state.selectedOption} onChange={this.handleChange}>
                                <option value="Featured">Featured</option>
                                <option value="Lowest">Lowest</option>
                                <option value="Highest">Highest</option>
                            </select>

                            <button className='btn1'><FontAwesomeIcon icon={faBorderAll}></FontAwesomeIcon></button>
                            <button className='btn2'><FontAwesomeIcon icon={faList}></FontAwesomeIcon></button>
                        </div>
                    </div>
                    <div style={{position:"relative"}}>
                      <input type="text" id="search-bar" placeholder="Search Product" value={this.state.searchValue} onChange={this.handleSearch} />
                      <a href="/" style={{position:"absolute"}}><FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon"></FontAwesomeIcon></a>
                    </div>
                    <div className="row prod">

                        {this.state.products.map((value, index) => {

                            return (

                                <div className='cardd' style={{ width: "30%" }} key={index}>
                                    <div className="car">
                                        <img className="w-100" src={value.imgUrl} />
                                        <FontAwesomeIcon icon="fa-regular fa-star" style={{ color: "black" }} />
                                        <div className="price">
                                            <div style={{display:"flex", justifyContent:"space-between", paddingLeft:"0px", paddingRight:"14px"}}>
                                            <p>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star"></span>
                                            <span className="fa fa-star"></span>
                                            <span className="fa fa-star"></span>
                                            </p>
                                            <p>{value.price}&nbsp;$</p>
                                            </div>
                                            <h6>{value.name}</h6>
                                            <p>{value.desc}</p>
                                        </div>
                                        <p className='button'><button style={{ backgroundColor: "#f6f6f6", color: "black" }}><FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>&nbsp; Wishlist</button></p>
                                        <p className='button'><button><FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>&nbsp; Add to Cart</button></p>
                                    </div>
                                </div>


                            )
                        })}

                    </div>
                    <div className="pagination">
                        <a href="/">&laquo;</a>
                        <a className="active" href="#">1</a>
                        <a href="/">2</a>
                        <a href="/">3</a>
                        <a href="/">&raquo;</a>
                    </div>
                </div>
            </>
        )
    }
}