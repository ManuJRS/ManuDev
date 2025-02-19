import React from 'react'
import { Row, Card, Col } from 'react-bootstrap';
import style from '../proyectos/proyectos.module.css'
import PropTypes from 'prop-types';

export const CPThirdImg = ({ thirdimg, tittletc, texttc }) => {
    return (
        <div className='my-5'>
            <Card className={style.separadorvideo}>
                <Card.Body className="d-flex flex-column">
                    <Card.Img variant="top" src={thirdimg} />
                </Card.Body>
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

CPThirdImg.propTypes = {
    thirdimg: PropTypes.string.isRequired,
    tittletc: PropTypes.string.isRequired,
    texttc: PropTypes.string.isRequired,
}