import { Container, Row, Col,} from "react-bootstrap"
import CardItem from "../Card"

const CardList = () => {
  return (
    <>
    <h2>Las mas vendidas</h2>
    
    <Container className="d-flex">
    <Row className="m-4 ">
      <Col xs={6} md={4} >
        <CardItem title={"Parrillada Tradicional"} price={38.999} image={"Producto.jpg"}/>
      </Col>
    </Row>
    <Row className="m-4 ">
      <Col xs={6} md={4} >
        <CardItem title={"Parrillada Cerdo-Vacuno"} price={45.999} image={"Producto.jpg"} />
      </Col>
    </Row>
    <Row className="m-4 ">
      <Col xs={6} md={4} >
        <CardItem title={"Parrillada Especial-Vacuno"} price={48.999} image={"Producto.jpg"}/>
      </Col>
    </Row>

  </Container>
  </>
    
  )
}

export default CardList