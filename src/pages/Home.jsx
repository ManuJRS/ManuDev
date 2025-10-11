import React from 'react'
import { Pro } from '../components/inicio/Pro';
import { Intro } from '../components/inicio/Intro';
import { CvLinks } from '../components/inicio/CvLinks';
import { Featured } from '../components/inicio/Featured';
import { Footer } from '../components/Footer/Footer';
import style from '../pages/Home.module.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export const Home = () => {
  return (
    <div className={style.ContainerHome}>
      <Container fluid>
        <Row className="justify-content-center vh-100 my-4">
          <Col xs={0} sm={2} className="text-center">

          </Col>
          <Col xs={12} sm={8} className="text-center">
            <Intro />
            <CvLinks />
            <Featured />
            <Pro />
            <Footer />
          </Col>
          <Col xs={0} sm={2} className="text-center">
          </Col>

        </Row>
      </Container>
    </div>
  )
}