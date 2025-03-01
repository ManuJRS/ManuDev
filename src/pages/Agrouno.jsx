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
import agrounoData from '../data/agrounoData';
import { Footer } from '../components/Footer/Footer';


export const Agrouno = () => {
    return (

        <Container className={style.ContainerAgrouno}>
            <Row>
                <Col xs={0} sm={1}>
                </Col>
                <Col xs={12} sm={10}>
                    {agrounoData.map((projectagro) => (
                        <div key={projectagro.id}>
                            <CPIntro
                                title={projectagro.title}
                                description={projectagro.description}
                            />
                            <CPImg
                                img={projectagro.img}
                                alttexthero={projectagro.alttexthero}
                            />
                            <CPProDesc
                                rolltext={projectagro.rolltext}
                                tecnotext={projectagro.tecnotext}
                                timetext={projectagro.timetext}
                                textdescription={projectagro.textdescription}
                            />
                            <CPContIntro
                                introproyect={projectagro.introproyect} />
                            <CPFirstCard
                                videoone={projectagro.videoone}
                                alttitleone={projectagro.alttitleone}
                                tittlefc={projectagro.tittlefc}
                                textfc={projectagro.textfc}
                            />
                            <CPSecondCard
                                videotwo={projectagro.videotwo}
                                tittlesc={projectagro.tittlesc}
                                textsc={projectagro.textsc}
                                alttitletwo={projectagro.alttitletwo}
                            />
                            <CPThirdCard
                                videothree={projectagro.videothree}
                                tittletc={projectagro.tittletc}
                                texttc={projectagro.texttc}
                                alttitlethree={projectagro.alttitlethree}
                            />
                            <CPConclu
                                conclusiontext={projectagro.conclusiontext}
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

