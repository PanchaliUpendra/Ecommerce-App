import React from 'react';
import './Login.css';
import {Link} from 'react-router-dom';
function Login(){
    const[emaildata,setemail]=React.useState('');
    const[passworddata,setpassword]=React.useState('');
    const[emailcompass,setcom]=React.useState('');
    const[regs,setreg]=React.useState({});
    const[datarr,setdatarr]=React.useState([]);

    
    


    return(
        <div  className='login-form-div1'> 
            <div className='loginformsdivs'>
                <p>Hello...</p>
                <h2>Register</h2>
                <form className='logindivsforms'>
                    <div>
                    <input type='email' placeholder='enter your email' className='loginformemail'/>
                    </div>
                    <div>
                        <input type='password'placeholder='Password' className='loginformemail'/>
                    </div>
                    <div>
                        <input type='password' placeholder='confirm password' className='loginformemail'/>
                    </div>
                    <div>
                    <button className='formsregbut'>Register</button>
                    </div>
                    
                    
                </form>
                <p >Already have account? <Link to='/Ecommerce-App/form'>Login</Link></p>
            </div>
            

        </div>
    );
}
export default Login;