import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import cardsData from '../../data/cardsData';

export const Pro = () => {

    return (
        <>
            <div>
                {cardsData.map(pro => (
                    < div key={pro.id}>
                        <Link className="nolink" to={pro.link}>
                            <Card className="my-5 Card-class">
                                <Card.Body className="d-flex flex-column Card-body">
                                    <Card.Title className="text-start Card-title"><h2>{pro.tittle}</h2></Card.Title>
                                    <Card.Text className="text-start Card-text">
                                        <strong>{pro.intro}</strong> // <small>{pro.text}</small>
                                    </Card.Text>
                                    <Card.Img variant="top" src={pro.externalLink} />
                                </Card.Body>
                            </Card>
                        </Link>
                    </div>
                ))}
            </div>
        </>
    )
}