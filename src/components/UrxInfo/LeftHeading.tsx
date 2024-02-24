import PropTypes from 'prop-types';
import React from 'react';

const LeftHeading = ({ leftHeader }: any) => {
    return (
        <div className='left-heading' key="leftTitle" role="tooltip" dangerouslySetInnerHTML={{__html: leftHeader}} />
    )
};
LeftHeading.propTypes = {
    leftHeader: PropTypes.string,
};
export default (LeftHeading);
