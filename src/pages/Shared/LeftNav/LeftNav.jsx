import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import first from '../../../assets/1.png'
import second from '../../../assets/2.png'
import third from '../../../assets/3.png'
import { FaGratipay } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [categories, setCategories] = useState([]);
  
   
    useEffect(() => {
        fetch("https://dragon-news-server-chadnee.vercel.app/categories")
           .then(res => res.json())
           .then(data=> setCategories(data))

           .catch(error => console.error(error))
    }, [])
    //to={`/category/${category.id}`} 
    return (
        <div>
           <h3>All categories</h3>
           <div>
           {
            categories.map(category =><p key = {category.id}
            >
                <Link to={`/category/${category.id}`} className='text-decoration-none text-success '>{category.name}</Link></p>)
           }
           </div>

   <container className= ''>
      <Row xs={1} md={1} lg={1} className="g-4 mt-0 ">
        <Col>
          <Card>
            <Card.Img variant="top" src={first} />
            <Card.Body>
                <Card.Text >
                 <p className='fw-bold'>21 The Mosrt Stylish Wedding Guest Dresses For Spring.</p>
                  <p><FaGratipay></FaGratipay><span className='ms-2 text-secondary'>{moment().format("dddd, MMMM D, YYYY")}</span></p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>             
        <Col>
          <Card>
            <Card.Img variant="top" src={second} />
            <Card.Body>
              <Card.Title></Card.Title>
              <Card.Text>
              <p className='fw-bold'>Family tour is the most enjoyable way nowadays.</p>
                  <p><FaGratipay></FaGratipay><span className='ms-2 text-secondary'>{moment().format("dddd, MMMM D, YYYY")}</span></p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>             
        <Col>
          <Card>
            <Card.Img variant="top" src={third} />
            <Card.Body><Card.Text>
              <p className='fw-bold'>Bangladesh won the match against Pakistan with three wickets.</p>
              <p><FaGratipay></FaGratipay><span className='ms-2 text-secondary'>{moment().format("dddd, MMMM D, YYYY")}</span></p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>                       
    </Row>
    </container>
        </div>

    );
};

export default LeftNav;