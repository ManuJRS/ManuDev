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
import esmeraldaData from '../data/esmeraldaData';
import { Footer } from '../components/Footer/Footer';


export const Esmeralda = () => {
    return (

        <Container className={style.ContainerAgrouno}>
            <Row>
                <Col xs={0} sm={1}>
                </Col>
                <Col xs={12} sm={10}>
                    {esmeraldaData.map((projectesme) => (
                        <div key={projectesme.id}>
                            <CPIntro
                                title={projectesme.title}
                                description={projectesme.description}
                            />
                            <CPImg
                                img={projectesme.img}
                                alttexthero={projectesme.alttexthero}
                            />
                            <CPProDesc
                                rolltext={projectesme.rolltext}
                                tecnotext={projectesme.tecnotext}
                                timetext={projectesme.timetext}
                                textdescription={projectesme.textdescription}
                            />
                            <CPContIntro
                                introproyect={projectesme.introproyect} />
                            <CPFirstCard
                                videoone={projectesme.videoone}
                                tittlefc={projectesme.tittlefc}
                                textfc={projectesme.textfc}
                                alttitleone={projectesme.alttitleone}
                            />
                            <CPSecondCard
                                videotwo={projectesme.videotwo}
                                tittlesc={projectesme.tittlesc}
                                textsc={projectesme.textsc}
                                alttitletwo={projectesme.alttitletwo}
                            />
                            <CPThirdCard
                                videothree={projectesme.videothree}
                                tittletc={projectesme.tittletc}
                                texttc={projectesme.texttc}
                                alttitlethree={projectesme.alttitlethree}
                            />
                            <CPConclu
                                conclusiontext={projectesme.conclusiontext}
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

