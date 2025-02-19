import React from 'react'
import { Row, Card, Col } from 'react-bootstrap';
import ReactPlayer from 'react-player'
import style from '../proyectos/proyectos.module.css'
import PropTypes from 'prop-types';

export const CPThirdCard = ({videothree, tittletc, texttc}) => {
  return (
    <div className='my-5'>
      <Card className={style.separadorvideo}>
        <ReactPlayer url={videothree}
          width='100%'
          height='100%'
          loop
          playing
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
          <p className={style.TextDescription}><strong>{tittletc}</strong> {texttc}</p>
        </Card.Body>
      </Card>
    </div>
  )
}

CPThirdCard.propTypes = {
  videothree: PropTypes.string.isRequired,
  tittletc: PropTypes.string.isRequired,
  texttc: PropTypes.string.isRequired,
}