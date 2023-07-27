import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import first from '../../assets/1.png'
import second from '../../assets/2.png'
import third from '../../assets/3.png'
import fourth from '../../assets/editorsInsight2.png'
import moment from 'moment';
import { FaGratipay } from 'react-icons/fa6';

const Editors = () => {
    return (
        <div className='mb-5'>
            <h4 className='fw-bolder'>Editors Insight</h4>
           <container><Row xs={1} md={2} lg={4} className="g-4 mt-0 me-6">
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
        <Col>
          <Card>
            <Card.Img className='mb-2' variant="top" src={fourth} />
            <Card.Body>
            <Card.Text>
              <p className='fw-bold'>The Daily Star published his ratings by its journal papers.</p>
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

export default Editors;