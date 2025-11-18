import { Container, Row, Col } from "react-bootstrap";
import style from '../pages/Home.module.css';

import pokedexData from "../data/pokedexData.js";

import { CPIntro } from '../components/proyectos/CPIntro';
import { CPVideoOnly } from '../components/proyectos/CPVideoOnly';
import { CPProDesc } from '../components/proyectos/CPProDesc';
import { CPContIntro } from '../components/proyectos/CPContIntro';
import { CPDescList } from "../components/proyectos/CPDescList";
import { Footer } from '../components/Footer/Footer';

export const PokedexPageView = () => {
    return (
        <Container className={style.ContainerAgrouno}>
            <Row>
                <Col xs={0} sm={1}></Col>
                <Col xs={12} sm={10}>

                    {pokedexData.map((project, index) => (
                        <div key={index}>
                            {/* Intro general */}
                            <CPIntro
                                title={project.titleProyect}
                                description={project.descripcionProyect}
                            />

                            {/* Video principal */}
                            <CPVideoOnly
                                videooneOnly={project.videoProyect}
                                linkUrl={project.linkUrlProyect}
                                linkText={project.linkTextProyect}
                            />

                            {/* Descripción técnica */}
                            <CPProDesc
                                rolltext={project.rolltextProyect}
                                tecnotext={project.tecnotextProyect}
                                timetext={project.timetextProyect}
                                textdescription={project.textdescriptionProyect}
                            />

                            {/* Bloque 1 */}
                            <CPContIntro introproyect={project.introproyectProyect} />

                            <CPVideoOnly
                                videooneOnly={project.videoCarousel}
                                linkUrl={project.linkUrlCarousel}
                                linkText={project.linkTextCarousel}
                            />

                            <CPDescList
                                descriptionitem={project.descriptionitemProyect}
                                items={project.itemsProyect}
                            />

                            {/* Bloque 2 */}
                            <CPContIntro introproyect={project.introproyectNoticias} />

                            <CPVideoOnly
                                videooneOnly={project.videoCarouselCard}
                                linkUrl={project.linkUrlCard}
                                linkText={project.linkTextCard}
                            />

                            <CPDescList
                                descriptionitem={project.descriptionitemCard}
                                items={project.itemsCard}
                            />

                            {/* Bloque 3 */}
                            <CPContIntro introproyect={project.introproyectwp} />

                            <CPDescList
                                descriptionitem={project.descriptionwp}
                                items={project.itemswp}
                            />

                            <Footer />
                        </div>
                    ))}

                </Col>
                <Col xs={0} sm={1}></Col>
            </Row>
        </Container>
    );
};
