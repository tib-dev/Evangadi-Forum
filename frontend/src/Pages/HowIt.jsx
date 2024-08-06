import { Container, Row, Col, Card, Button } from "react-bootstrap";

function HowIt() {
  return (
    <Container>
      <Row>
        <Col md={6}>
          <Card>
            <Card.Body>
              <>Card Title</>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default HowIt;
