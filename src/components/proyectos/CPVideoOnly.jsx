import { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import ReactPlayer from 'react-player';
import style from '../proyectos/proyectos.module.css';
import PropTypes from 'prop-types';

export const CPVideoOnly = ({ videooneOnly, alttitleone, linkUrl, linkText }) => {
    const [isClient, setIsClient] = useState(false);
    useEffect(() => { setIsClient(true); }, []);

    return (
        <div className="my-5">
            <Card className={style.separadorvideo} title={alttitleone}>
                {isClient ? (
                    <ReactPlayer
                        url={videooneOnly}
                        width="100%"
                        height="100%"
                        loop
                        playing
                        muted         // iPhone autoplay
                        playsinline   // iPhone inline
                        style={{ padding: '20px' }}
                    />
                ) : (
                    <p className="m-0 p-3">Cargando video...</p>
                )}
                {linkUrl && (
                    <div className="px-4 pb-4">
                        <a
                            href={linkUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-decoration-none"
                        >
                            {linkText || 'Ver más detalles'}
                        </a>
                    </div>
                )}
            </Card>
        </div>
    );
};

CPVideoOnly.propTypes = {
    videooneOnly: PropTypes.string.isRequired,
    alttitleone: PropTypes.string,
    linkUrl: PropTypes.string,   // NUEVO
    linkText: PropTypes.string,  // NUEVO
};

CPVideoOnly.defaultProps = {
    alttitleone: '',
    linkText: 'Ver más detalles',
};
