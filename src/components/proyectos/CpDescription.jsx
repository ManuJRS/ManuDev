import React from 'react'
import PropTypes from 'prop-types';


export const CpDescription = ({description}) => {
    return (
        <>
            <p>{description}</p>
        </>
    );
}

CpDescription.propTypes = {
    description: PropTypes.string.isRequired,
};