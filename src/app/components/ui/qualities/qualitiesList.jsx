import React from 'react';
import PropTypes from 'prop-types';
import Quality from './quality';

const QualitiesList = ({ qualities }) => {
    return (
        <>
            {qualities.map(({ _id, ...rest }) => (
                <Quality key={_id} {...rest} />
            ))}
        </>
    );
};

QualitiesList.propTypes = {
    qualities: PropTypes.array
};

export default QualitiesList;
