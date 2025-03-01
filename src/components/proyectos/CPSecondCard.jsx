import React from 'react'
import { Row, Card, Col } from 'react-bootstrap';
import ReactPlayer from 'react-player'
import style from '../proyectos/proyectos.module.css'
import PropTypes from 'prop-types';

export const CPSecondCard = ({ videotwo, tittlesc, textsc, alttitletwo }) => {
  return (
    <div className='my-5'>
      <Card className={style.separadorvideo} title={alttitletwo}>
        <ReactPlayer url={videotwo}
          width='100%'
          height='100%'
          loop
          playing
          muted // para que jale en iphone
          playsinline // para que jale en iphone x2
          style={{ padding: '20px' }}
        />
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
          <p className={style.TextDescription}><strong>{tittlesc}</strong> {textsc}</p>
        </Card.Body>
      </Card>
    </div>
  )
}

CPSecondCard.propTypes = {
  videotwo: PropTypes.string.isRequired,
  tittlesc: PropTypes.string.isRequired,
  textsc: PropTypes.string.isRequired,
}