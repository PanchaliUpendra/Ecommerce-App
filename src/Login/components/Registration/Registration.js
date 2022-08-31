import React from 'react';
import './Registration.css';
//import Login from '../Login/Login';
//import Form from '../Form/Form';
import Reg1 from './Reg1.png';
import {Link} from 'react-router-dom';
function Registration(){
    return(
        <div className='Registeration'>
            <div className='registeration-oops'>
            <div className='Registration-form1'>
            <div>
                <img src={Reg1} alt="reg1" className='Register-reg1'/>
            </div>
            <div className='reg-texts'>
                <h1>Welcome</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                <div className='reg-texts-btns'>
                <button><Link to='/Ecommerce-App/register' >Create Account</Link></button>
                <button><Link to='/Ecommerce-App/form'>Login</Link></button>
                </div>
            </div>
        </div>
        </div>
        </div>
        
        
    );
}
export default Registration;