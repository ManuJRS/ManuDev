import React from 'react'
import { Row, Card, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import style from '../proyectos/proyectos.module.css'


export const CPintroUnitario = ({ introUnitario }) => {
    return (
        <div className='text-center my-5'>
            <h3 className={style.TitleDescription}>Resumen</h3>
            <Card className={style.separador}>
            </Card>
            <Card className="my-5 card-pro">
                <Card.Body className="d-flex flex-column">
                    <p className={style.TextDescription}>{introUnitario}</p>
                </Card.Body>
                <a className="py-2 text-decoration-none" href="https://codepen.io/manuel-jesus-rej-n-santana/pen/qEbjQYo" target="_blank">Ver Codigo</a>
            </Card>
        </div>
    )
}

CPintroUnitario.propTypes = {
    introUnitario: PropTypes.string.isRequired,
};