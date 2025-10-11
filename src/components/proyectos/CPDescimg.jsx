import React from 'react'
import { Row, Card, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import style from '../proyectos/proyectos.module.css'


export const CPDescimg = ({ descimg }) => {
    return (
        <div className='text-center my-5'>
            <Card className={style.separador}>
            </Card>
            <Card className="my-5 card-pro">
                <Card.Body className="d-flex flex-column">
                    <p className={style.TextDescription}>{descimg}</p>
                </Card.Body>
            </Card>
        </div>
    )
}

CPDescimg.propTypes = {
    descimg: PropTypes.string.isRequired,
};