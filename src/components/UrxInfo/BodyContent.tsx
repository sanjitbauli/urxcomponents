import PropTypes from 'prop-types';
import React from 'react';

type Props = {
    leftText: string;
    contentClass: string;
}

const BodyContent = ({ leftText, contentClass }: Props) => {
    return (
        <div className={`body-content ${contentClass}`} key="bodyContent" role="tooltip" dangerouslySetInnerHTML={{__html: leftText}} />
    );
};
BodyContent.propTypes = {
    leftText: PropTypes.string,
};
export default (BodyContent);
