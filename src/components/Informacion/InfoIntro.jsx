import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaCode } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaLaptopCode } from "react-icons/fa";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { FaWordpress } from "react-icons/fa";
import { SiElementor } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import infoData from '../../data/infoData'


export const InfoIntro = () => {
    return (
        <Container>
            {infoData.map(PageInfo => (
                <div key={PageInfo.id}>
                    <Row>
                        <Col xs={12} sm={6}>
                            <Card className="Card-classInfo">
                                <Card.Img variant="top" src={PageInfo.imginfo} />
                                <Card.Body className="d-flex flex-column Card-bodyInfo">
                                </Card.Body>
                            </Card>
                            <Card className="Card-text-info order-1 order-sm-2">
                                <Card.Body className="d-flex flex-column Card-bodyInfo">
                                    <Card.Title className="text-start Card-title-info"><strong><h2>{PageInfo.titleInfoCard}
                                    </h2></strong></Card.Title>
                                    <Card.Text className="text-start Card-text"><p>{PageInfo.textInfoCard}</p></Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} sm={6}>
                            <div className="Card-text-text card-izq">
                                <h2>{PageInfo.titleInfo}</h2>
                                <i>{PageInfo.textInfoI}</i>
                            </div>
                            <div className="card-izq-izq">
                                <h3>{PageInfo.titleHabilidades}</h3>
                                <Card>
                                    <Card.Body className="d-flex flex-column Card-bodyInfo">
                                    </Card.Body>
                                </Card>
                                <div className="d-flex align-items-center list-text"><FaCode className="list-icon" /><h4>{PageInfo.frontList}</h4></div>
                                <div className="d-flex align-items-center list-text"><FaHtml5 className="list-icon" /><h4>{PageInfo.htmlList}</h4></div>
                                <div className="d-flex align-items-center list-text"><IoLogoJavascript className="list-icon" /><h4>{PageInfo.jsList}</h4></div>
                                <div className="d-flex align-items-center list-text"><FaLaptopCode className="list-icon" /><h4>{PageInfo.wmList}</h4></div>
                                <div className="d-flex align-items-center list-text"><IoPhonePortraitOutline className="list-icon" /><h4>{PageInfo.rdList}</h4></div>
                                <div className="d-flex align-items-center list-text"><FaWordpress className="list-icon" /><h4>{PageInfo.wpList}</h4></div>
                                <div className="d-flex align-items-center list-text"><SiElementor className="list-icon" /><h4>{PageInfo.eList}</h4></div>
                                <div className="d-flex align-items-center list-text"><FaBootstrap className="list-icon" /><h4>{PageInfo.bootsList}</h4></div>
                                <div className="d-flex align-items-center list-text"><FaReact className="list-icon" /><h4>{PageInfo.ReactList}</h4></div>
                            </div>

                        </Col>
                    </Row>

                </div>
            ))}
        </Container>
    )
}