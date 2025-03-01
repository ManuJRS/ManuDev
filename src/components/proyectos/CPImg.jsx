import React from 'react'
import { Card } from 'react-bootstrap';

export const CPImg = ({ img, alttexthero }) => {
  return (
    <>
      <Card className="my-5 card-pro">
        <Card.Body className="d-flex flex-column">
          <Card.Img variant="top" src={img} alt={alttexthero} />
        </Card.Body>
      </Card>
    </>
  )
}