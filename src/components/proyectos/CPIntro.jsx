import React from 'react';
import PropTypes from 'prop-types';
import style from '../proyectos/proyectos.module.css'

export function CPIntro({ title, description }) {  // Desestructurar las props
  return (
    < div className='text-center my-5'>
      <h1>{title}</h1>
      <p className={style.PIntro}>{description}</p>
    </ div>
  );
}

CPIntro.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,

};