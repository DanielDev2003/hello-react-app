import { useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

const Main = () => {
  let cards = [{
    id:1,
    img:'https://plus.unsplash.com/premium_photo-1661833100239-de8f260b6f8c?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    titulo:'Tomate',
    descricao:'Fruta versátil, de sabor levemente ácido e doce, rica em vitaminas e antioxidantes. Ideal para saladas e molhos.'
  }, {
    id:2,
    img:'https://images.unsplash.com/photo-1607781143315-c87bebec1452?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    titulo:'Laranja',
    descricao:'Fruta cítrica, rica em vitamina C, de sabor doce e levemente ácido. Perfeita para sucos, sobremesas ou consumo natural.'
  },{
    id:3,
    img:'https://plus.unsplash.com/premium_photo-1666976506284-bbd70064976d?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    titulo:'Café Cereja',
    descricao:'Grãos colhidos no ponto ideal de maturação, garantindo sabor equilibrado, doçura natural e qualidade superior na sua xícara'
  }]

  return (
    <main>
      <Container fluid className='mt-2 mb-2'>
        <Row>
          
          {cards.map(({id, img, titulo, descricao}) => {
            return <Col key={id}>
            <Card >
            <Card.Img variant="top" src={img} />
            <Card.Body>
              <Card.Title><b>{titulo}</b></Card.Title>
              <Card.Text>
                {descricao}
              </Card.Text>
              <Button variant="primary">Comprar</Button>
            </Card.Body>
          </Card>
          </Col>
          })}
        </Row>
      </Container>

    </main>
  );
};

export default Main;
