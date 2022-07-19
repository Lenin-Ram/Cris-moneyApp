import React from 'react';
import '../assets/style/Home.scss';
import { CardText, Row, Col, Card, CardTitle, Button } from 'reactstrap';




const Mas = () => {

  return( 
         
         
         <>
         
       <h1>hello</h1>

       <Row>
  <Col sm="6">
    <Card body>
      <CardTitle tag="h5">
        Special Title Treatment
      </CardTitle>
      <CardText>
        With supporting text below as a natural lead-in to additional content.
      </CardText>
      <Button>
        Go somewhere
      </Button>
    </Card>
  </Col>
  <Col sm="6">
    <Card body>
      <CardTitle tag="h5">
        Special Title Treatment
      </CardTitle>
      <CardText>
        With supporting text below as a natural lead-in to additional content.
      </CardText>
      <Button>
        Go somewhere
      </Button>
    </Card>
  </Col>
</Row>

       
         
         </>
                  
         
           
             );
         }
         
         
         export default Mas;