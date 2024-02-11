import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import carousel1 from '../assets/img1.jpg'
import carousel2 from '../assets/img2.jpg'
import carousel3 from '../assets/img3.jpg'

const responsive = {
    0: { items: 1 },
    700: { items: 2 },
    1024: { items: 3 },
};

const items = [
    <div className="item" data-value="1">
         <Card style={{ width: '17em' }}>
      <Card.Img variant="top" src={carousel2} />
      <Card.Body>
        <Card.Title>Lower Interest <br /> Rate </Card.Title>
        
      </Card.Body>
    </Card>
    </div>,
    <div className="item" data-value="2">
        <Card style={{ width: '17rem' }}>
      <Card.Img variant="top" src={carousel1} />
      <Card.Body>
        <Card.Title>Interest free Payment</Card.Title>
       </Card.Body>
    </Card>
    </div>,
    <div className="item" data-value="3">
        <Card style={{ width: '17em' }}>
      <Card.Img variant="top" src={carousel3} />
      <Card.Body>
        <Card.Title>Discount on Materials</Card.Title>
        
      </Card.Body>
    </Card>
    </div>,
   
];
function Carousel() {
  return (
    <div style={{width:'65vw'}}>
    <div >
        <p style={{margin: '0 auto', textAlign: 'center',fontSize:'30px',marginBottom:'30px'}}>Unlock Premium Features Now </p>
    </div>
    <div>
       <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
        
      />
    </div>
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <Button className='rounded-pill' style={{backgroundColor:'seagreen', color:'white', border:'2px solid gray', width:'200px', marginBottom: '10px'}}>Unlock Now</Button>
        <Button className='rounded-pill' style={{backgroundColor:'seagreen', color:'white', border:'2px solid gray', width:'200px'}}>Details</Button>
    </div>
</div>


  )
}

export default Carousel
