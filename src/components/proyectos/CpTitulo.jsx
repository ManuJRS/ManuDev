import React from 'react';
import PropTypes from 'prop-types';

export function CpTitulo({ title, description }) { 
  return (
    <>
      <h1>{title}</h1>
      <p>{description}</p>
    </>
  );
}

CpTitulo.propTypes = {
  title: PropTypes.string.isRequired,  
  description: PropTypes.string.isRequired,

};
