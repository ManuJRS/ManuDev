import { Container, Row, Col } from "react-bootstrap";
import style from '../pages/Home.module.css';
import cardProjectData from "../data/cardProjectData";
import { CPIntro } from '../components/proyectos/CPIntro';
import { CPImg } from '../components/proyectos/CPImg';
import { CPintroUnitario } from "../components/proyectos/CPintroUnitario";
import { CPimgOne } from "../components/proyectos/CPimgOne";
import { CPDescimg } from "../components/proyectos/CPDescimg";
import { CPImgcomp } from "../components/proyectos/CPImgcomp";
import { CPDescList } from "../components/proyectos/CPDescList";
import { CPIntroDiv } from "../components/proyectos/CPIntroDiv";
import { Footer } from '../components/Footer/Footer';



export const CardProject = () => {
    return (
        <Container className={style.ContainerAgrouno}>
            <Row>
                <Col xs={0} sm={1}>
                </Col>
                <Col xs={12} sm={10}>
                    {cardProjectData.map((projectcard, index) => (
                        <div key={index}>
                            <CPIntro
                                title={projectcard.title}
                                description={projectcard.description}
                            />
                            <CPImg
                                img={projectcard.img}
                            />
                            <CPintroUnitario
                                introUnitario={projectcard.introUnitario}
                            />
                            <CPimgOne
                                imgOne={projectcard.imgCardOne}
                            />
                            <CPDescimg
                                descimg={projectcard.descimg}
                            />
                            <CPImgcomp
                                imgTwo={projectcard.imgCompare}
                            />
                            <CPIntroDiv
                                introDiv={projectcard.introDivLay}
                            />
                            <CPimgOne
                                imgOne={projectcard.imgLay}
                            />
                            <CPDescList
                                descriptionitem={projectcard.descriptionitemLay}
                                items={projectcard.itemsLay}
                            />
                            <CPDescList
                                descriptionitem={projectcard.descriptionEstructura}
                                items={projectcard.itemsEstructura}
                            />
                            <CPDescList
                                descriptionitem={projectcard.descriptionCentrado}
                                items={projectcard.itemsCentrado}
                            />
                            <CPDescList
                                descriptionitem={projectcard.descriptionSeman}
                                items={projectcard.itemsSeman}
                            />
                            <CPIntroDiv
                                introDiv={projectcard.introDivOther}
                            />
                            <CPimgOne
                                imgOne={projectcard.imgLayOther}
                            />
                            <CPDescList
                                descriptionitem={projectcard.descriptionOtherLay}
                                items={projectcard.itemsOtherLay}
                            />
                            <CPDescList
                                descriptionitem={projectcard.descriptionEstructuraOther}
                                items={projectcard.itemsEstructuraOther}
                            />
                            <Footer />
                        </div>
                    ))}
                </Col>
                <Col xs={0} sm={1}>
                </Col>
            </Row>
        </Container >
    )
}