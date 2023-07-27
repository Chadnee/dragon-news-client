import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import Editors from '../../News/Editors';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import RightNav from '../../Shared/RightNav/RightNav';
import { FaArrowLeft } from 'react-icons/fa6';
import CategoryCard from './CategoryCard';
import LeftNav from '../../Shared/LeftNav/LeftNav';
import NavBar from '../../Shared/Header/Navbar';

const Category = () => {
    const {id} = useParams()
    const showCategory = useLoaderData()
   
    console.log(showCategory.length)
    
    
    
    
    //const [categories, setCategories] = useState([])
     //const [news, setNews] = useState([])
   
    
    return (
        <div className='mt-4'>
          <div className='mb-5'>
            <NavBar></NavBar>
          </div>
          <Container>
             <Row>
               <Col lg={9}>
                <div>
                 {
                  showCategory.map(categories => <CategoryCard
                  key={categories._id}
                  categories = {categories}
                  >
                   
                  </CategoryCard>) 
                  }
                </div>
               </Col>
               <Col lg={3}>
                 <RightNav></RightNav>
               </Col>
             </Row>
              </Container>
        
    </div>
    );
};
/**
 * <div className='mt-4'>
        <Container>
         <Row className=''>
           <Col lg={9}>
            <div>
                <Card className=''>
                   <Card.Img className='m-4' variant="top" src={image_url} />
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
              
          
          
    </div>**/
export default Category;
