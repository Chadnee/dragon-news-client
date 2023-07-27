import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import LeftNav from '../Shared/LeftNav/LeftNav';
import RightNav from '../Shared/RightNav/RightNav';
import { FaArrowLeft } from 'react-icons/fa6';
import Editors from './Editors';
import Header from '../Shared/Header/Header';
import NavBar from '../Shared/Header/Navbar';

const ShowNews = () => {
    const {id} = useParams()
    const specificNews = useLoaderData();

    const {image_url, details, title, category_id} = specificNews;
    
    return (
        <div className='mt-4'>
          <div className='mb-5'>
            <NavBar></NavBar>
          </div>
            <Container>
            
             <Row className=''>
               <Col lg={9}>
                <div>
                    <Card className=''>
                       <Card.Img className='' variant="top" src={image_url} />
                       <Card.Body>
                         <Card.Title>{title}</Card.Title>
                         <Card.Text>
                            {details}
                         </Card.Text>
                        <Link to = {`/category/${category_id}`}><Button variant="danger"><FaArrowLeft></FaArrowLeft> All news in this category</Button></Link>
                       </Card.Body>
                    </Card>
                </div>
                 </Col>
               <Col lg={3}><RightNav></RightNav></Col>
             </Row>
             <Col>
             <Editors></Editors>
             </Col>
             </Container>
                  
              
              
        </div>
    );
};

export default ShowNews;
//full details :{details.length} {newsDetails._id = id? <>{newsDetails.map(details => details.details)}</>:<>no</>}
