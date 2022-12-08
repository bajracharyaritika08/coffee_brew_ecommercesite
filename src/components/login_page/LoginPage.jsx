import React from 'react'
import { AddToCartBtn } from '../../common/AddToCartBtn'
import "../../styles/loginpage/LoginPage.css"

export const LoginPage = () => {
  return (
    <div className='login_form_container'>
        <div className="form_title">
            <h2>Welcome to BrewMix</h2>
        </div>
        <div className="form">
            <div className="email_login">
            <form action="">
                <label htmlFor="uname">User Name:</label><br />
                <input type="text" name="uname" id="uname" className='uname' placeholder='Please enter your username'/><br />
                <label htmlFor="password">Password:</label><br />
                <input type="password" name="password" id="password" placeholder='Please enter your password' />
                <AddToCartBtn title="Login" className="login_btn"/>
            </form>
            </div>
            <div className="login_other_platforms">
                
            </div>
        </div>
    </div>
  )
}
