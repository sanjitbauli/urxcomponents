import './plg-styles/plg-info-style.scss';

import { Column, FlexGrid, Row } from "@carbon/react";
import React, { PureComponent } from "react";

import { MainContentType } from './types/MainContentType';
import PropTypes from "prop-types";
import Style from "style-it";
import UrxInfo from "./UrxInfo";
import { getProductName } from "./info.utils";
import { getStyle } from "./infoStyles";

type Props = {
  formConfig: {
    mainContent: MainContentType;
    designTemplate: string;
    assetType: string;
  };
  className: string;
}
export class InfoContainer extends PureComponent<Props>{
  constructor(props: Props){
    super(props);
  }
  render(){
    const { formConfig, className } = this.props;
    const { assetType, mainContent } = formConfig;
    const productName = getProductName(formConfig);

    return (Style.it(
      `
             .bg-container {
                ${getStyle(mainContent)}
             },
        
            `,<div className={`bg-container`}>
      <FlexGrid className="book-container" condensed={false}>
      <Row>
            <Column sm={4} md={8} lg={16} className="left-column">
              <UrxInfo
                mainContent={mainContent}
                assetType={assetType}
                productName={productName}
                designTemplate={formConfig.designTemplate}
              />
            </Column>
          </Row>
      </FlexGrid>
    </div>))
  }
}
InfoContainer.propTypes = {
  lng: PropTypes.string.isRequired,
  cc: PropTypes.string.isRequired,
  formConfig: PropTypes.object.isRequired,
};

export default InfoContainer;