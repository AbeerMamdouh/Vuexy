import React, { Component } from 'react'
import {faAngleRight, faHouse, faGear} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './BreadCrumb.css'

export default class Breadcrumb extends Component {
    render() {
        return (
            <>
             <div className="br-breadcrumb" style={{width:"100%"}}>
              <ul className="crumb-list">
                <li className="crumb shop" data-active="active"><span style={{fontSize: "25px", display:"block"}}>Shop</span></li>
                <li className="crumb home crumb2">
                  <div className="br-button circle"><span className="sr-only"></span><FontAwesomeIcon className='active' icon={faHouse}></FontAwesomeIcon></div>
                </li>
                <li className="crumb crumb2" data-active="active"><FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon><span className='active'>ECommerce</span>
                </li>
                <li className="crumb crumb2" data-active="active"><FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon><span>Shop</span>
                </li>
                <li href='/' className='sitting-tool'><FontAwesomeIcon icon={faGear} /></li>
              </ul>
            </div>



            </>
        )
    }
}
