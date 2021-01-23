import React from "react";
import {BrowserRouter as Router, Route, Switch, useHistory,Redirect,Link, withRouter} from "react-router-dom";
import TitleSVG from "../TitleSVG";
import "./UserOnboarding.css";



export default function UserOnboarding() {

    const history = useHistory();

    return (
        <div className='min-vh-93 d-flex flex-column justify-content-end '>
            <div className='my-5 container user-select-none overflow-hidden'>
            <div className='d-flex justify-content-between align-items-center'>
                <div className='log-page-title'>
                    <TitleSVG />
                </div>
                <div>
                    <Link to='/' className='px-3 py-1 grey no-underline'>
                        Home
                    </Link>
                    <Link to='' className='px-5 py-1 no-underline'>
                        AboutUs
                    </Link>
                    <button className='btn start-btn px-3'
                            onClick={()=>{history.push('/login')}}>
                                LogIn
                    </button>
                </div>
            </div>
            </div>
            
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                    Shit goes here...
                    </div>
                    <div className='col-12 col-md-6 order-md-1'>
                    <figure className='opa-50 people-rafiki-1 mt-auto'>
                    </figure>
                </div>
                    
                </div>
                
            </div>
            <div className='bg-white px-md-5'>
                <div className='m-5 pb-md-3 pt-md-3'>
                    <Link to='/signup' className='no-underline'>
                        <button
                            className='btn mx-auto start-btn d-block'
                            type='submit'
                        >
                            Get Started
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

