import { Carousel } from "react-bootstrap"
import { Button } from "react-bootstrap"
const Inicio = () => {
    return (
        <div>
            <Carousel className="m-3">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="promo.png"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>La mejor carne</h3>
                        <Button>Ver</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="promo2.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Mejores materiales</h3>
                        <Button>Ver</Button>
                        
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="promo3.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Todo tipo de carnes</h3>
                        <Button>Ver</Button>
                        
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Inicio