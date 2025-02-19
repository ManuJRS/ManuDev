import React from 'react'
import { Card } from 'react-bootstrap';
import style from '../proyectos/proyectos.module.css'
import PropTypes from 'prop-types';



export const CPContIntro = ({ introproyect }) => {
  return (
    <div className='text-center'>
      <h3 className={style.TitleDescription}>{introproyect}</h3>
      <Card className={style.separador}>
        
      </Card>
      
    </div>
  )
}

CPContIntro.propTypes = {
  introproyect: PropTypes.string.isRequired,
}