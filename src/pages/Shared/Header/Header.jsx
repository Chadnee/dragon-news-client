import React, { useContext } from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import { FaChild } from "react-icons/fa6";
import Marquee from "react-fast-marquee";
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import NavBar from './Navbar';


const Header = () => {

    const {user, logOut} = useContext(AuthContext)

    const handleLogOut =()=>{
       logOut()
       .then(()=>{

       })
       .catch(error => {
        console.log(error)
       })
    }

    return (
        <Container className='mb-4 '>
        <div className='text-center'>
            <img src={logo} className='mb-1' alt="" />
            <p className='text-secondary mb-3'>Journalism Without Fear or Favour</p>
            <p>{moment().format("dddd, MMMM D, YYYY")}</p>
            <div className='d-flex mb-3'>
            <Button variant="danger" className=''>Latest</Button>
            <Marquee pauseOnClick={false} speed={100}>
            I can be a React component, multiple React components, or just some text.
            </Marquee>
            </div>
    <NavBar></NavBar>
        </div>
        <div className='mt-3'>
           {user?  <><p className=' font-monospace text-success'><span className='pe-1 fs-4'><FaChild/></span><span className='border border-dark rounded px-2'>{user.email}</span></p> 
           <button onClick={handleLogOut} className='btn btn-success'>Log out</button>
           </>:
            <div className='d-flex justify-content-between'>
            <Link to="/login" className='btn btn-success px-4'>Login</Link>
           <Link to = "/register" className='btn btn-danger my-auto mx-3'>Register</Link>
           </div>}
        </div>
        </Container>
    );
};

export default Header;