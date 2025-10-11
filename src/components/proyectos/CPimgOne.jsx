import React from 'react'
import { Card } from 'react-bootstrap';

export const CPimgOne = ({ imgOne, altimgone }) => {
    return (
        <>
            <Card className="my-5 card-pro">
                <Card.Body className="d-flex flex-column">
                    <Card.Img variant="top" src={imgOne} alt={altimgone} />
                </Card.Body>
            </Card>
        </>
    )
}