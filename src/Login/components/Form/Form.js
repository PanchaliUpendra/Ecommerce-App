import React from 'react';
import './Form.css';
import {Link} from 'react-router-dom'
function Form(){
    return(
        <div className='loginformscontainer'>
            <div className='forminlinebox'>
            <p>Welcome Back!!!</p>
            <h1>Login</h1>
            <div className='loginmailandpass'>
            <input type='email' placeholder='user mail/email' className='formoflogin'/>
            <input type='password' placeholder='enter your password' className='formoflogin'/>
            <button>Login</button>
            </div>
            <p>Don’t have an account?<Link to='/Ecommerce-App/register'> Register</Link></p>
            
            </div>
        </div>
        
    );
}
export default Form;