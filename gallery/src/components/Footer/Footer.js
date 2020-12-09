import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default class Footer extends Component{
    render(){
        return (
            <>
                <div className="container4">
                    <div className="row4">
                        <Link to="#" className='nav-links1'>
                            <i class="fab fa-facebook-f"></i>
                        </Link>
                        <Link to="#" className='nav-links1'>
                            <i class="fab fa-linkedin-in"></i>
                        </Link>
                        <Link to="#" className='nav-links1'>
                            <i class="fab fa-instagram"></i>
                        </Link>
                    </div>
                </div>
            </>
        );
    } 
}