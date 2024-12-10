import { Button, Card, Col, Container, Row } from 'react-bootstrap';

const Main = () => {

  return (
    <main>
      <Container fluid className='mt-2 mb-2'>
        <Row>
          <Col>
          <Card>
            <Card.Img variant="top" src="https://plus.unsplash.com/premium_photo-1661833100239-de8f260b6f8c?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <Card.Body>
              <Card.Title>Tomate</Card.Title>
              <Card.Text>
                Fruta versátil, de sabor levemente ácido e doce, rica em vitaminas e antioxidantes. Ideal para saladas e molhos.
              </Card.Text>
              <Button variant="primary">Comprar</Button>
            </Card.Body>
          </Card>
          </Col>

          <Col>
            <Card>
              <Card.Img variant="top" src="https://images.unsplash.com/photo-1607781143315-c87bebec1452?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
              <Card.Body>
                <Card.Title>Laranja</Card.Title>
                <Card.Text>
                  Fruta cítrica, rica em vitamina C, de sabor doce e levemente ácido. Perfeita para sucos, sobremesas ou consumo natural.
                </Card.Text>
                <Button variant="primary">Comprar</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card>
              <Card.Img variant="top" src="https://plus.unsplash.com/premium_photo-1666976506284-bbd70064976d?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
              <Card.Body>
                <Card.Title>Café Cereja</Card.Title>
                <Card.Text>
                  Grãos colhidos no ponto ideal de maturação, garantindo sabor equilibrado, doçura natural e qualidade superior na sua xícara.
                </Card.Text>
                <Button variant="primary">Comprar</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

    </main>
  );
};

export default Main;
