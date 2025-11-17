import { Container, Row, Col } from "react-bootstrap";
import style from '../pages/Home.module.css';
import esmeraldaRenewedData from "../data/esmeraldaRenewedData";
import { CPIntro } from '../components/proyectos/CPIntro';
import { CPVideoOnly } from '../components/proyectos/CPVideoOnly'
import { CPProDesc } from '../components/proyectos/CPProDesc';
import { CPContIntro } from '../components/proyectos/CPContIntro';

import { CPDescList } from "../components/proyectos/CPDescList";
import { Footer } from '../components/Footer/Footer';

export const EsmeraldaRenewedPage = () => {
    return (
        <Container className={style.ContainerAgrouno}>
            <Row>
                <Col xs={0} sm={1}>
                </Col>
                <Col xs={12} sm={10}>
                    {esmeraldaRenewedData.map((esmeraldeRenewed, index) => (
                        <div key={index}>
                            <CPIntro
                                title={esmeraldeRenewed.titleProyect}
                                description={esmeraldeRenewed.descripcionProyect}
                            />
                            <CPVideoOnly
                                videooneOnly={esmeraldeRenewed.videoProyect}
                                linkUrl={esmeraldeRenewed.linkUrlProyect}
                                linkText={esmeraldeRenewed.linkTextProyect}
                            />
                            <CPProDesc
                                rolltext={esmeraldeRenewed.rolltextProyect}
                                tecnotext={esmeraldeRenewed.tecnotextProyect}
                                timetext={esmeraldeRenewed.timetextProyect}
                                textdescription={esmeraldeRenewed.textdescriptionProyect}
                            />
                            <CPContIntro
                                introproyect={esmeraldeRenewed.introproyectProyect} />
                            <CPVideoOnly
                                videooneOnly={esmeraldeRenewed.videoCarousel}
                                linkUrl={esmeraldeRenewed.linkUrlCarousel}
                                linkText={esmeraldeRenewed.linkTextCarousel}
                            />
                            <CPDescList
                                descriptionitem={esmeraldeRenewed.descriptionitemProyect}
                                items={esmeraldeRenewed.itemsProyect}
                            />
                            <CPContIntro
                                introproyect={esmeraldeRenewed.introproyectNoticias} />
                            <CPVideoOnly
                                videooneOnly={esmeraldeRenewed.videoCarouselCard}
                                linkUrl={esmeraldeRenewed.linkUrlCard}
                                linkText={esmeraldeRenewed.linkTextCard}
                            />
                            <CPDescList
                                descriptionitem={esmeraldeRenewed.descriptionitemCard}
                                items={esmeraldeRenewed.itemsCard}
                            />
                            <CPContIntro
                                introproyect={esmeraldeRenewed.introproyectwp} />
                            <CPVideoOnly
                                videooneOnly={esmeraldeRenewed.videoCarouselwp}
                            />
                            <CPDescList
                                descriptionitem={esmeraldeRenewed.descriptionwp}
                                items={esmeraldeRenewed.itemswp}
                            />
                            <Footer />
                        </div>
                    ))}
                </Col>
                <Col xs={0} sm={1}>
                </Col>
            </Row>
        </Container>
    )
}