import React from 'react'
import styles from '../inicio/Pro.module.css'
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import ListGroup from 'react-bootstrap/ListGroup';
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import { useState } from 'react';

export const CvLinks = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <Button
                onClick={() => setOpen(!open)}
                aria-controls="collapse-at-sign"
                aria-expanded={open}
                variant="outline-primary"
                className={styles.btnarroba}
            >
                @
            </Button>
            <Collapse in={open}>
                <div id="collapse-at-sign">
                    <ListGroup style={{ background: 'none' }}>
                        <ListGroup.Item 
                        style={{ background: 'none', border: 'none', color: '#0d6efd' }} 
                        action target="_blank" 
                        href="https://www.linkedin.com/in/manuel-jes%C3%BAs-rej%C3%B3n-santana-83564015a/">Linkedin <FaExternalLinkSquareAlt /></ListGroup.Item>
                        <ListGroup.Item style={{ background: 'none', border: 'none', color: '#0d6efd' }} 
                        action 
                        target="_blank" 
                        href="https://www.upwork.com/freelancers/~0112e01210080eef35?mp_source=share">Upwork <FaExternalLinkSquareAlt /></ListGroup.Item>
                    </ListGroup>
                </div>
            </Collapse>
        </>
    )
}

