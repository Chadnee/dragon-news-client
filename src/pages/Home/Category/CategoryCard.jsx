import moment from 'moment';
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { FaBookmark, FaEye, FaRegStar, FaShareNodes, FaStar } from 'react-icons/fa6';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const CategoryCard = ({categories}) => {
    const {total_view, title,_id, author, details, image_url, rating} = categories
    console.log(_id)
    return (
        <div>
            <div>
            <Card className="mb-4">
              
              <Card.Header className='d-flex justify-content-between mb-2'>
                <div className='d-flex gap-4'>
              <Image className='mt-2' style = {{height: '40px'}} src={author.img} roundedCircle />
              <div >
                <p className='mb-0'><small>{author.name}</small></p>
              <p><small className=''>{moment(author?.published_date).format('yyyy-MM-D')}</small></p>
              </div>
              </div>
              <div className='d-flex align-items-center gap-3'>
                <p className='text-secondary'><FaBookmark/></p>
                <p className='text-secondary'><FaShareNodes/></p>
                
              </div>
              </Card.Header>
              <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Img variant="top" src={image_url} />
                <Card.Text>
                 {details}
                </Card.Text>
              </Card.Body>
              <Card.Footer className="text-muted d-flex">
                <div className='flex-grow-1 text-warning'>
                <Rating
                  placeholderRating={rating.number}
                  readonly
                  emptySymbol={<FaRegStar></FaRegStar>}
                  placeholderSymbol={<FaStar></FaStar>}
                  fullSymbol={<FaStar></FaStar>}
                />
                  {rating?.number}</div>
                <p><FaEye></FaEye> {total_view}</p>
        
              </Card.Footer>
            </Card>
            </div>
        </div>
    );
};

export default CategoryCard;