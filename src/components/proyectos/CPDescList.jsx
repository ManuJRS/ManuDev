import React from "react";
import { Card } from "react-bootstrap";
import PropTypes from "prop-types";
import style from "../proyectos/proyectos.module.css";

export const CPDescList = ({ descriptionitem = "", items = [] }) => {
    return (
        <div className="text-center my-5">
            <Card className="my-5 card-pro">
                <Card.Body className="d-flex flex-column align-items-start">
                    {descriptionitem && (
                        <p className={`${style.TextDescription} mb-4 text-start`}>
                            {descriptionitem}
                        </p>
                    )}

                    <ul className={style.TextDescription}>
                        {items.map((item, index) => (
                            <li key={`${index}-${item}`} className="mb-2 text-start">
                                {item}
                            </li>
                        ))}
                    </ul>
                </Card.Body>
            </Card>
        </div>
    );
};

CPDescList.propTypes = {
    descriptionitem: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.string),
};
