import React from 'react';
import { CPIntro } from '../components/proyectos/CPIntro';
import { CPImg } from '../components/proyectos/CPImg';
import { CPProDesc } from '../components/proyectos/CPProDesc';
import { CPContIntro } from '../components/proyectos/CPContIntro';
import { CPFirstCard } from '../components/proyectos/CPFirstCard';
import { CPSecondCard } from '../components/proyectos/CPSecondCard';
import { CPThirdImg } from '../components/proyectos/CPThirdImg';
import { CPConclu } from '../components/proyectos/CPConclu';
import { Container, Row, Col } from 'react-bootstrap';
import style from '../pages/Home.module.css';
import arsaData from '../data/arsaData';
import { Footer } from '../components/Footer/Footer';


export const Arsa = () => {
    return (

        <Container className={style.ContainerAgrouno}>
            <Row>
                <Col xs={0} sm={1}>
                </Col>
                <Col xs={12} sm={10}>
                    {arsaData.map((projectarsa) => (
                        <div key={projectarsa.id}>
                            <CPIntro
                                title={projectarsa.title}
                                description={projectarsa.description}
                            />
                            <CPImg
                                img={projectarsa.img}
                                alttexthero={projectarsa.alttexthero}
                            />
                            <CPProDesc
                                rolltext={projectarsa.rolltext}
                                tecnotext={projectarsa.tecnotext}
                                timetext={projectarsa.timetext}
                                textdescription={projectarsa.textdescription}
                            />
                            <CPContIntro
                                introproyect={projectarsa.introproyect} />
                            <CPFirstCard
                                videoone={projectarsa.videoone}
                                tittlefc={projectarsa.tittlefc}
                                textfc={projectarsa.textfc}
                                alttitleone={projectarsa.alttitleone}
                            />
                            <CPSecondCard
                                videotwo={projectarsa.videotwo}
                                tittlesc={projectarsa.tittlesc}
                                textsc={projectarsa.textsc}
                                alttitletwo={projectarsa.alttitletwo}
                            />
                            <CPThirdImg
                                thirdimg={projectarsa.thirdimg}
                                tittletc={projectarsa.tittletc}
                                texttc={projectarsa.texttc}
                                altimgtext={projectarsa.altimgtext}
                            />
                            <CPConclu
                                conclusiontext={projectarsa.conclusiontext}
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

