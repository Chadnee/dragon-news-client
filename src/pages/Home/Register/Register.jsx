import React, { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';
import NavBar from '../../Shared/Header/Navbar';



const Register = () => {
    const {user, signUp, updateUserData, emailVerification} = useContext(AuthContext)
    const [error , setError] = useState("")
    const [success , setSuccess] = useState("")

    const [ accepted, setAccepted] = useState(false)
    

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        const user = {name, email, password, confirmPassword}
        console.log(user);
        setError("")
        setSuccess("")

        if (password !== confirmPassword){
            return setError("Your password didn't match ")
        }
        else if (!/(?=.*[0-9].*[0-9])/.test(password)){
            return setError("Please provide at least two digit")
        }
        else if (!/(?=.*[A-B].*[A-B])/.test(password)){
            return setError("Please provide at least two uppercase")
            }
        else if(password.length < 6){
            return setError("Please provide at least 6 character or longer")
        }
        signUp(email, password)
        .then(result =>{
            const user = result.user
            console.log(user)
            setSuccess("User has been added successfuly. Please log in now.")
            event.target.reset()
        })
        .catch(error => {
            console.log(error.message);
           return setError(error.message)
        })
        
        emailVerification()
        .then((result) => {
         console.log(result)
         alert('please verify your email')
        })
        .catch(error => {
            console.log(error.message)
        })
        /*updateUserData
        .then(() => {
            console.log('User name updated')
        })
        .catch(error => {
            console.log(error.message)
        })*/
    }

    const handleCheckBox = event =>{
        console.log(event.target.checked)
        setAccepted(event.target.checked)
    }

    return (
        <div>
            <Container className='mt-3'>
            <NavBar></NavBar>
          </Container>
        <Container className="card fluid bg-warning-subtle mb-10 mt-5" style={{ width: '35rem' }}>
  <center>
    <div className="card-body my-10 ">
    <h4 className='fw-bold'>Register your account</h4>
    <hr />
    
            <form onSubmit={handleRegister} className='mx-auto'>
                <div className='mb-3'>
                    <p className='fw-bold  pl-'>Your name</p>
                   <input type="text" className='w-75 text-center rounded' placeholder='Enter your name' name="name" id="" required/>
                </div>
                <div className='mb-3'>
                    <p className='fw-bold '>Email address</p>
                   <input type="email" className='w-75 text-center rounded' placeholder='Enter your email address' name="email" id="" required/>
                </div>
                <div className='mb-3'>
                <p className='fw-bold'>Password</p>
                <input type="password" className='w-75 text-center rounded' placeholder='Enter your password' name="password" id="" required />
                 </div>
                <div className='mb-3'>
                <p className='fw-bold '>Confirm password</p>
                <input type="password" className='w-75 text-center rounded' placeholder='Re-enter your password' name="confirmPassword" id="" required />
                 </div>
                 <div>
                    <input onClick = {handleCheckBox} type="checkbox" name="checkbox" id="" />
                    <span className='ps-2'>I agree to <Link to = "/terms" className='fw-bold text-danger'>terms and condition</Link></span>
                 </div>
                 <div className='mb-3'>
                    <p className='text-danger'>{error}</p>
                 <input type="submit" className='btn btn-dark rounded mt-3 w-75' disabled = {!accepted}  value="Register" />
                 </div>
            </form>
            <p className='fw-bolder'>Already have an account? <Link to = "/login " className='text-decoration-none'>Login</Link></p>
             <p className='text-success'>{success}</p>
  </div>
  </center>
</Container>
</div>

    );
};

export default Register;