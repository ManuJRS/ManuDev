import React from 'react'
import { Row, Card, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import style from '../proyectos/proyectos.module.css'


export const CPProDesc = ({ rolltext, tecnotext, timetext, textdescription }) => {
  return (
    <div className='text-center my-5'>
      <h3 className={style.TitleDescription}>Descripción del proyecto</h3>
      <Card className={style.separador}>
      </Card>
      <Row className='my-5'>
        <Col xs={12} sm={4} className='my-2'>
          <h2>Mi papel</h2>
          <p className={style.colp}>{rolltext}</p>
        </Col>
        <Col xs={12} sm={4} className='my-2'>
          <h2>Tecnología utilizada</h2>
          <p className={style.colp}>{tecnotext}</p>
        </Col>
        <Col xs={12} sm={4} className='my-2'>
          <h2>Tiempo total</h2>
          <p className={style.colp}>{timetext}</p>
        </Col>
      </Row>
      <Card className="my-5 card-pro">
        <Card.Body className="d-flex flex-column">
          <p className={style.TextDescription}>{textdescription}</p>
        </Card.Body>
      </Card>
    </div>
  )
}

CPProDesc.propTypes = {
  rolltext: PropTypes.string.isRequired,  // Corregir el uso de PropTypes
  tecnotext: PropTypes.string.isRequired,
  timetext: PropTypes.string.isRequired,
  textdescription: PropTypes.string.isRequired,
};

/**
 * roll
 * rolltext
 * tecno
 * tecnotext
 * time
 * timetext
 */