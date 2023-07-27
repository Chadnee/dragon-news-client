import moment from 'moment/moment';
import { Button, Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaShareNodes, FaBookmark, FaEye, FaRegStar, FaStar } from "react-icons/fa6";
import Rating from 'react-rating';

const newsCard = ({news}) => {
    const {total_view, title,_id, author, details, image_url, rating} = news
    return (
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
         {details.length < 250 ? <>{details}</>:
         <>{details.slice(0, 250)}... <Link to = {`/news/${_id}`} className='text-decoration-none text-warning'>Read more</Link></>}
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
    );
};

export default newsCard;