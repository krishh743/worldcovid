import React from 'react'
import {Card,Button} from 'react-bootstrap';

function Home() {
    return (
        <div  className="container">
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src=" "/>
  <Card.Body>
    <Card.Title>sample</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Read more</Button>
  </Card.Body>
</Card>





            {/* <h1>Home page</h1>
            <div className="container-fluid">
                <div className="row">
<h3 >Nature </h3>
http://media2.intoday.in/indiatoday/images/Photo_gallery/army14_121512073832.jpg
                    <div className="col-10 mx-auto">
<img src="https://images.pexels.com/photos/1785493/pexels-photo-1785493.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />

                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default Home