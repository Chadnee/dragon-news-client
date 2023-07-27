import React from 'react';
import Header from '../../Shared/Header/Header';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../../Shared/LeftNav/LeftNav';
import RightNav from '../../Shared/RightNav/RightNav';
import { Link } from 'react-router-dom';
import News from '../../News/News';
import Category from '../Category/Category';



const Home = () => {
    return (
        <div>
            <Header></Header>
            <Container>
             <Row>
               <Col lg={3}><LeftNav></LeftNav></Col>
               <Col lg={6}><News></News></Col>
               <Col lg={3}><RightNav></RightNav></Col>
             </Row>
              </Container>
        </div>
    );
};

export default Home;