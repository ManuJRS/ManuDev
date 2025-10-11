import React from 'react'
import { Row, Card, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import style from '../proyectos/proyectos.module.css'


export const CPConclu = ({ conclusiontext }) => {
  return (
    <div className='text-center my-5'>
      <h3 className={style.TitleDescription}>Conclusión</h3>
      <Card className={style.separador}>
      </Card>
      <Card className="my-5 card-pro">
        <Card.Body className="d-flex flex-column">
          <p className={style.TextDescription}>{conclusiontext}</p>
        </Card.Body>
      </Card>
    </div>
  )
}

CPConclu.propTypes = {
  conclusiontext: PropTypes.string.isRequired,
};