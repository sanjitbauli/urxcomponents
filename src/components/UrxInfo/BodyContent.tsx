import React from 'react';
import PropTypes from 'prop-types';

const BodyContent = ({ leftText, contentClass }) => {
    return (
        <div className={`body-content ${contentClass}`} key="bodyContent" role="tooltip" dangerouslySetInnerHTML={{__html: leftText}} />
    );
};
BodyContent.propTypes = {
    leftText: PropTypes.string,
};
export default (BodyContent);
