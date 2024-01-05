import { MainContentType } from "./types/MainContentType";
import PropTypes from "prop-types";
import React from "react";
type Props = {
    mainContent: MainContentType;
    designTemplate: string;
    assetType: string;
    productName: string;
    t: Function;
};
declare const _default: {
    ({ mainContent, designTemplate, assetType, productName, t }: Props): React.JSX.Element;
    propTypes: {
        mainContent: PropTypes.Requireable<PropTypes.InferProps<{
            leftText: PropTypes.Requireable<string>;
            leftHeader: PropTypes.Requireable<string>;
            accordion: PropTypes.Requireable<boolean>;
        }>>;
        assetType: PropTypes.Requireable<string>;
        productName: PropTypes.Requireable<string>;
        designTemplate: PropTypes.Requireable<string>;
    };
    defaultProps: {
        t: (t: any) => any;
    };
};
export default _default;
