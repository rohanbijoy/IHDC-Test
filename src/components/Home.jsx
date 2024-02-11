import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import image from '../assets/membership.jpg'
import Carousel from './Carousel';
import "../App.css"
import Navigation from './Navigation';

function Home() {
  return (
<>
<Navigation/>
<div id='container'>
  <div id='part' >
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>New Arrival</Card.Title>
        <Card.Text style={{ fontSize: '9px', fontWeight: 'bold' }}>
          <span style={{ textDecoration: 'underline' }}>JOIN</span> TODAY
        </Card.Text>
        <Card.Img variant="top" src={image} />
        <Button className='btn text-primary mt-3 rounded-pill' style={{ border: '2px solid gray', width: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#FAF9F6', fontWeight: 'bold' }}>JOIN NOW</Button>
      </Card.Body>
    </Card>
  </div>
  <div id='carousel' style={{ float: 'left', marginTop: '30px',marginLeft:"25px", position: 'relative' }}>
    <Carousel style={{ position: 'absolute', bottom: 0 }} />
  </div>
</div>


 


</>
  )
}

export default Home
