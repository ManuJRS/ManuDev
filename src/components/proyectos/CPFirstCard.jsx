import { useEffect, useState } from 'react';
import { Row, Card, Col } from 'react-bootstrap';
import ReactPlayer from 'react-player'
import style from '../proyectos/proyectos.module.css'
import PropTypes from 'prop-types';

export const CPFirstCard = ({ videoone, tittlefc, textfc }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className='my-5'>
      <Card className={style.separadorvideo}>
        {isClient ? (
          <ReactPlayer url={videoone}
            width='100%'
            height='100%'
            loop
            playing
            style={{ padding: '20px' }}
          />) : (
          <p>Cargando video...</p>
        )}
      </Card>
      <Row>
        <Col xs={12} sm={4}>
        </Col>
        <Col xs={12} sm={4}>
          <Card className={style.verticaline}>
          </Card>
        </Col>
        <Col xs={12} sm={4}>
        </Col>
      </Row>
      <Card className="card-pro">
        <Card.Body className="d-flex flex-column">
          <p className={style.TextDescription}><strong>{tittlefc}</strong> {textfc}</p>
        </Card.Body>
      </Card>
    </div>
  )
}

CPFirstCard.propTypes = {
  videoone: PropTypes.string.isRequired,
  tittlefc: PropTypes.string.isRequired,
  textfc: PropTypes.string.isRequired,
}

