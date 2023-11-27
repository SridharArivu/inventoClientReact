import React, { useState , useEffect} from 'react'
import './SignUp.css'
import {HiOutlineMail} from 'react-icons/hi'
import {BiSolidLockAlt,BiSolidUser} from 'react-icons/bi'
import Axios from '../AxiosConfig/Axios'
import { useNavigate } from 'react-router-dom';

const SignUp = () => {

        const[MatchPasswordError, SetMatchPassError] = useState(false);

    const [UserDetails, SetUserDetails] = useState({
        username:"",
        email:"",
        password:"",
        confirmPass:""
    });

    const Navigate = useNavigate();

    useEffect(()=>{
        SetMatchPassError(false);
        if( UserDetails.confirmPass !== UserDetails.password){
        SetMatchPassError(true);
        }else{
        SetMatchPassError(false);
        }
      },[UserDetails.confirmPass,UserDetails.password])

//       https://resource-server-invento.uc.r.appspot.com/api/v1/auth/register?username=cliqInvento&email=cliqInvento@gmail.com&password=cliqInvento

      const HandleSubmit = async (e)=>{
        e.preventDefault();
  
        try {
          const Response = await Axios.get("/api/v1/auth/register?username="+UserDetails.username+"&email="+UserDetails.email+"&password="+UserDetails.password,
          {
            headers:{'Content-Type':'application/json'},
            withCredentials: true
          }
        );
        sessionStorage.setItem("clientId",Response.data.clientId);
        sessionStorage.setItem("clientSecret",Response.data.secret);
        Navigate("/client")
        } catch(err){
          console.log(err);
        }
        
  
      }




  return (
    <div className='SignUp_wrapper'>
        <div className='SignUp__box'>
                <h2>Create New Account</h2>
                <form onSubmit={HandleSubmit} className='form__filed'>
                    <div className='input__fileds'>
                        <span><BiSolidUser size={22}/></span>
                        <input onChange={(e)=>SetUserDetails({...UserDetails,username:e.target.value})} type="text" required placeholder='Username' />
                    </div>

                    <div className='input__fileds'>
                        <span><HiOutlineMail size={22}/></span>
                        <input onChange={(e)=>SetUserDetails({...UserDetails,email:e.target.value.toLowerCase()})} type="text" required placeholder='Email'/>
                    </div>

                    <div className='input__fileds'>
                        <span><BiSolidLockAlt size={22}/></span>
                        <input onChange={(e)=>SetUserDetails({...UserDetails,password:e.target.value})} type="text" required placeholder='Password' />
                    </div>

                        {
                                MatchPasswordError !== true
                                ?
                                <div className='input__fileds'>
                                        <span><BiSolidLockAlt size={22}/></span>
                                        <input onChange={(e)=>SetUserDetails({...UserDetails,confirmPass:e.target.value})} type="text" required placeholder='Confirm Password'/>
                                </div>
                                :
                                <div className='input__fileds'>
                                        <span><BiSolidLockAlt size={22}/></span>
                                        <input onChange={(e)=>SetUserDetails({...UserDetails,confirmPass:e.target.value})} type="text" required placeholder='Confirm Password'/>
                                        <h4>Password does not match</h4>
                                </div>
                        }
                    

                    <button>SignUp</button>
                </form>

                <div className='login__redirect__box'>
                        <p>already have account? <a href="/login">Login</a> </p>
                </div>
        </div>
        
    </div>
  )
}

export default SignUp