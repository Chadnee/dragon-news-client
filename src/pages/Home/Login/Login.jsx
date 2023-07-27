import React, { useContext, useRef, useState } from 'react';
import { Container } from 'react-bootstrap';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import NavBar from '../../Shared/Header/Navbar';

const Login = () => {
    const {user, signIn, resetPasswordemail } = useContext(AuthContext)
    const emailRef = useRef()
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")
    const navigate = useNavigate()

    const handleSubmit = event =>{
       event.preventDefault();
       const form = event.target;
       const email = form.email.value;
       const password = form.password.value;
       const user = {email, password};
       console.log(user)
       setError("")
       setSuccess("")

       signIn(email, password)
       .then(result =>{
        const user = result.user
        console.log(user)
        navigate("/")
        setSuccess("User has been logged in successfully")
        event.target.reset()
        
       })
       .catch(error =>{ 
          console.log(error.message)
          setError(error.message)
       })
    }
    
    const handleReset = () =>{
      const email = emailRef.current.value;
      if (!email){
        alert('please provide you email address to reset password')
      }
      resetPasswordemail(email)
      .then(()=>{
       alert('please check your email')
      })
    }
    return (
        <div>
          <Container className='mt-3'>
            <NavBar></NavBar>
          </Container>
          <Container className="card fluid mb-10 bg-warning-subtle mt-5" style={{ width: '30rem' }}>
  <div className="card-body  my-10">
    <h4 className='fw-bold text-center'>Login your account</h4>
    <hr />
    <center>
            <form onSubmit={handleSubmit} className='mx-auto' >
                <div>
                    <p className='fw-bold  pl-'>Email address</p>
                    <input type="email" ref = {emailRef} className='rounded text-center w-75 mb-3' placeholder='Enter your email address' name="email" id="" required/>
                </div>
                <div>
                    <p className='fw-bold '>Password</p>
                    <input type="password" className='rounded text-center w-75' placeholder='Enter your password' name="password" id="" required />
                 </div>
                 <div>
                 <p className='text-danger'>{error}</p>
                    <input type="submit" className='btn btn-dark mt-3 w-75'  value="Login" />
                 </div>
                 <p className='pb-3 fw-bolder '> Forget your password? <br /> <a className='ps-2 text-danger btn-link' onClick={handleReset}>Reset password</a></p>
            </form>
            <p className='fw-bolder'>Create an account? <Link to = "/register" className='text-decoration-none'>Register</Link></p>
            <p className='text-success'>{success}</p>
            </center>
  </div>      
</Container>
</div>

    );
};

export default Login;
