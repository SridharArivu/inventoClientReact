import React,{useState} from 'react'
import './Login.css'
import {HiOutlineMail} from 'react-icons/hi'
import {BiSolidLockAlt} from 'react-icons/bi'
import Axios from '../AxiosConfig/Axios'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Login = () => {

    const [UserDetails, SetUserDetails] = useState({
        email:"",
        password:"",
    });

    const Navigate = useNavigate();

    const UserNotFound = () =>{
      Swal.fire({
          icon: 'error',
          position: 'top',
          title: "User Not Found",
        })
    }

  

    const HandleSubmit = async (e)=>{
        e.preventDefault();
  
        try {
          const Response = await Axios.get("/api/v1/auth/login?email="+UserDetails.email.toLowerCase()+"&password="+UserDetails.password,
          {
            headers:{'Content-Type':'application/json'},
            withCredentials: true
          }
        );
        sessionStorage.setItem("clientId",Response.data.clientId);
        sessionStorage.setItem("clientSecret",Response.data.secret);
        Navigate("/client")
        } catch(err){
          
            UserNotFound();
          
        }
        
  
      }


  return (
    <div className='SignUp_wrapper'>
        <div className='Login__box'>
                <h2>Log-in to your account</h2>
                <form onSubmit={HandleSubmit} className='form__filed'>

                    <div className='input__fileds'>
                        <span><HiOutlineMail size={22}/></span>
                        <input onChange={(e)=>SetUserDetails({...UserDetails,email:e.target.value})} type="text" required placeholder='Email'/>
                    </div>

                    <div className='input__fileds'>
                        <span><BiSolidLockAlt size={22}/></span>
                        <input onChange={(e)=>SetUserDetails({...UserDetails,password:e.target.value})} type="text" required placeholder='Password' />
                    </div>


                    <button>Login</button>
                </form>

                <div className='login__redirect__box'>
                        <p>New to us? <a href="/">Sign Up</a> </p>
                </div>
        </div>
        
    </div>
  )
}

export default Login