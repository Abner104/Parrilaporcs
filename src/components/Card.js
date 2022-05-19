import './Card.css'
import Card from 'react-bootstrap/Card'
import { Button } from 'react-bootstrap'

const CardItem = (props) => {
    const { image,title,price} = props
    console.log("Propiedades de Card");
    return (

        <Card style={{ width: '250px'  }}>
            <div className='card-item'>
                <div>
                    <Card.Img variant="top" src={`./${image}`} />
                </div>
                <Card.Body>
                    <p>{title}</p>
                    <span>{price}</span>
                    <Button variant="primary">Detalle</Button>

                </Card.Body>
            </div>
        </Card >
 

    ) 
} 

export default CardItem