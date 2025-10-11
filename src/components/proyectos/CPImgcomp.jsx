import React from 'react'
import { Card } from 'react-bootstrap';

export const CPImgcomp = ({ imgTwo, altimgtwo }) => {
    return (
        <>
            <Card className="my-5 card-pro">
                <Card.Body className="d-flex flex-column">
                    <Card.Img variant="top" src={imgTwo} alt={altimgtwo} />
                </Card.Body>
            </Card>
        </>
    )
}