import React from 'react';
import { Container } from 'react-bootstrap';
import { FaBookmark } from 'react-icons/fa6';

const Footer = () => {
    return (
        <Container className='text-secondary  mt-5 mb-5'>
            <FaBookmark></FaBookmark><span className='ps-2'>The copyright act is legal as 2020</span>
        </Container>
    );
};

export default Footer;