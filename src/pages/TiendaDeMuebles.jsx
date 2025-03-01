import React from 'react';
import { CPIntro } from '../components/proyectos/CPIntro';
import { CPImg } from '../components/proyectos/CPImg';
import { CPProDesc } from '../components/proyectos/CPProDesc';
import { CPContIntro } from '../components/proyectos/CPContIntro';
import { CPFirstCard } from '../components/proyectos/CPFirstCard';
import { CPSecondCard } from '../components/proyectos/CPSecondCard';
import { CPThirdCard } from '../components/proyectos/CPThirdCard';
import { CPConclu } from '../components/proyectos/CPConclu';
import { Container, Row, Col } from 'react-bootstrap';
import style from '../pages/Home.module.css';
import tiendaData from '../data/tiendaData';
import { Footer } from '../components/Footer/Footer';




export const TiendaDeMuebles = () => {

    return (

        <Container className={style.ContainerAgrouno}>
            <Row>
                <Col xs={0} sm={1}>
                </Col>
                <Col xs={12} sm={10}>
                    {tiendaData.map((projecttienda) => (
                        <div key={projecttienda.id}>
                            <CPIntro
                                title={projecttienda.title}
                                description={projecttienda.description}
                            />
                            <CPImg
                                img={projecttienda.img}
                                alttexthero={projecttienda.alttexthero}
                            />
                            <CPProDesc
                                rolltext={projecttienda.rolltext}
                                tecnotext={projecttienda.tecnotext}
                                timetext={projecttienda.timetext}
                                textdescription={projecttienda.textdescription}
                            />
                            <CPContIntro
                                introproyect={projecttienda.introproyect} />
                            <CPFirstCard
                                videoone={projecttienda.videoone}
                                tittlefc={projecttienda.tittlefc}
                                textfc={projecttienda.textfc}
                                alttitleone={projecttienda.alttitleone}
                            />
                            <CPSecondCard
                                videotwo={projecttienda.videotwo}
                                tittlesc={projecttienda.tittlesc}
                                textsc={projecttienda.textsc}
                                alttitletwo={projecttienda.alttitletwo}
                            />
                            <CPThirdCard
                                videothree={projecttienda.videothree}
                                tittletc={projecttienda.tittletc}
                                texttc={projecttienda.texttc}
                                alttitlethree={projecttienda.alttitlethree}
                            />
                            <CPConclu
                                conclusiontext={projecttienda.conclusiontext}
                            />
                            <Footer />

                        </div>
                    ))}
                </Col>
                <Col xs={0} sm={1}></Col>
            </Row>
        </Container>
    )
}
