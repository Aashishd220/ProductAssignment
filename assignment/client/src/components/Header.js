import React from 'react'
import {Link} from 'react-router-dom'
import GoogleAuth from './GoogleAuth'

const Header=()=>{
    return(
        <div className="ui secondary pointing menu" style={{alignItems:"center"}}>
            <Link to="/" className="item">
               <h1> All in One Store</h1>
            </Link>
            <div className="right menu">
            <GoogleAuth/>
            </div>  
        </div>
    )
}

export default Header