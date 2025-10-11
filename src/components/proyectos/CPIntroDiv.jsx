import React from 'react'
import { Row, Card, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import style from '../proyectos/proyectos.module.css'


export const CPIntroDiv = ({ introDiv }) => {
    return (
        <div className='text-center my-5'>
            <h3 className={style.TitleDescription}>{introDiv}</h3>
            <Card className={style.separador}>
            </Card>
        </div>
    )
}

CPIntroDiv.propTypes = {
    introDiv: PropTypes.string.isRequired,
};