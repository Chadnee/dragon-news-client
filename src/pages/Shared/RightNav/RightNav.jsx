import React, { useContext } from 'react';
import { FaGofore, FaGithub, FaFacebook, FaTwitter, FaInstagram  } from 'react-icons/fa6';
import { Button, ListGroup } from 'react-bootstrap';
import Qzone from '../QZone/Qzone';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const RightNav = () => {
    const {user, googleLogin} = useContext(AuthContext);

    const handleGoogleLogin = () => {
        googleLogin()
        .then(result => {
            console.log(result.user)
        })
        .catch(error => {
            console.log(error.message)
        })
    }
    return (
        <div className='text-start'>
            <div >
           <Button onClick={handleGoogleLogin} variant="outline-primary mb-2"><FaGofore />Login with Gmail</Button>
           <Button variant="outline-secondary"><FaGithub/>Login with Github</Button>
            </div>

            <h3 className='text-start mt-4 mb-3 '>Find us on</h3>
            <ListGroup className='text-start'>
              <ListGroup.Item><FaFacebook/>facebook</ListGroup.Item>
              <ListGroup.Item><FaTwitter/>twitter</ListGroup.Item>
              <ListGroup.Item><FaInstagram/>Instagram</ListGroup.Item>
            </ListGroup>
            <Qzone></Qzone>
        </div>

    );
};

export default RightNav;