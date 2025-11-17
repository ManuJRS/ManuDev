import { Container, Row, Col } from "react-bootstrap";
import style from '../pages/Home.module.css';

import movieManagerData from "../data/movieManagerData.js";

import { CPIntro } from '../components/proyectos/CPIntro';
import { CPVideoOnly } from '../components/proyectos/CPVideoOnly';
import { CPProDesc } from '../components/proyectos/CPProDesc';
import { CPContIntro } from '../components/proyectos/CPContIntro';
import { CPDescList } from "../components/proyectos/CPDescList";
import { Footer } from '../components/Footer/Footer';

export const MovieManagerPageView = () => {
    return (
        <Container className={style.ContainerAgrouno}>
            <Row>
                <Col xs={0} sm={1}></Col>
                <Col xs={12} sm={10}>

                    {movieManagerData.map((movieProject, index) => (
                        <div key={index}>
                            {/* Intro general */}
                            <CPIntro
                                title={movieProject.titleProyect}
                                description={movieProject.descripcionProyect}
                            />

                            {/* Video principal */}
                            <CPVideoOnly
                                videooneOnly={movieProject.videoProyect}
                                linkUrl={movieProject.linkUrlProyect}
                                linkText={movieProject.linkTextProyect}
                            />

                            {/* Descripción técnica */}
                            <CPProDesc
                                rolltext={movieProject.rolltextProyect}
                                tecnotext={movieProject.tecnotextProyect}
                                timetext={movieProject.timetextProyect}
                                textdescription={movieProject.textdescriptionProyect}
                            />

                            {/* Bloque 1: CRUD + UI principal */}
                            <CPContIntro introproyect={movieProject.introproyectProyect} />

                            <CPVideoOnly
                                videooneOnly={movieProject.videoCarousel}
                                linkUrl={movieProject.linkUrlCarousel}
                                linkText={movieProject.linkTextCarousel}
                            />

                            <CPDescList
                                descriptionitem={movieProject.descriptionitemProyect}
                                items={movieProject.itemsProyect}
                            />

                            {/* Bloque 2: Estado + persistencia */}
                            <CPContIntro introproyect={movieProject.introproyectNoticias} />

                            <CPVideoOnly
                                videooneOnly={movieProject.videoCarouselCard}
                                linkUrl={movieProject.linkUrlCard}
                                linkText={movieProject.linkTextCard}
                            />

                            <CPDescList
                                descriptionitem={movieProject.descriptionitemCard}
                                items={movieProject.itemsCard}
                            />

                            {/* Bloque 3: GitFlow + Netlify */}
                            <CPContIntro introproyect={movieProject.introproyectwp} />


                            <CPDescList
                                descriptionitem={movieProject.descriptionwp}
                                items={movieProject.itemswp}
                            />

                            <Footer />
                        </div>
                    ))}

                </Col>
                <Col xs={0} sm={1}></Col>
            </Row>
        </Container>
    );
}
