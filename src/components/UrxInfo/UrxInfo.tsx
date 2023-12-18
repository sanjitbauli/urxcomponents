import { Accordion, AccordionItem } from "@carbon/react";
import {
  getDefaultMobileStyle,
  getInfoStyle,
  getInfoStyleMobile,
  getMobileStyle,
} from "./infoStyles";

import BodyContent from "./BodyContent";
import LeftHeading from "./LeftHeading";
import { PlgInfo } from "./template-elements/plg-info";
import PropTypes from "prop-types";
import React from "react";

const Info = ({ mainContent, designTemplate, assetType, productName, t }) => {
  const leftBody =
    mainContent && mainContent.leftText ? mainContent.leftText : ``;
  const contentClass = !(mainContent && mainContent.leftHeader) ? "ibm-h1" : "";
  const infoStyle = getInfoStyle(mainContent);
  const infoStyleMobile = getInfoStyleMobile(mainContent);
  const v23 = !!(designTemplate && designTemplate === "v23" && mainContent.v23);
  try{
    console.log('window.screen.width', window.parent.window);
  }catch(e){
    console.log('window.screen.width', e);

  }
  // 
  return (
    <div
      className={`cds--col-sm-4 cds--col-sm-8 cds--col-md-8 cds--col-lg-12 info-block-column cds--no-gutter ${
        mainContent.accordion ? "has-accordion" : ""
      }`}
    >
      {/* desktop content */}
      <div
        className={`info-block ${
          infoStyle.defaultStyle ? "default" : ""
        }  desktop-content`}
        style={infoStyle.css}
      >
        {v23 && (
          <PlgInfo
            mainContent={mainContent}
            formType={assetType}
            productName={productName}
          />
        )}
        {!v23 && (
          <>
            {mainContent && mainContent.leftHeader && (
              <LeftHeading leftHeader={mainContent.leftHeader} />
            )}
            {leftBody && (
              <BodyContent leftText={leftBody} contentClass={contentClass} />
            )}
          </>
        )}
      </div>
      {/* end desktop content */}
      {/* Mobile content */}
      <div
        className={`info-block ${
          infoStyleMobile.defaultStyle ? "mobile-default" : ""
        } ${
          infoStyleMobile.defaultStyle === "v23" ? "mobile-v23" : ""
        }  mobile-content`}
        style={infoStyleMobile.css}
      >
        {v23 && (
          <PlgInfo
            mainContent={mainContent}
            formType={assetType}
            productName={productName}
            accordion={true}
            toggleText={{
                collapse: t('Collapse'),
                expand: t('Expand'),
            }}
          />
        )}
        {!v23 && (
          <>
            {mainContent.accordion && (
              <Accordion isFlush={true} align="start">
                <AccordionItem
                  title={
                    <LeftHeading
                      leftHeader={
                        mainContent.leftHeaderMobile
                          ? mainContent.leftHeaderMobile
                          : mainContent.leftHeader
                      }
                    />
                  }
                >
                  <BodyContent
                    leftText={
                      mainContent.leftTextMobile
                        ? mainContent.leftTextMobile
                        : leftBody
                    }
                    contentClass={contentClass}
                  />
                </AccordionItem>
              </Accordion>
            )}
            {!mainContent.accordion && (
              <>
                {mainContent && mainContent.leftHeader && (
                  <LeftHeading
                    leftHeader={
                      mainContent.leftHeaderMobile
                        ? mainContent.leftHeaderMobile
                        : mainContent.leftHeader
                    }
                  />
                )}
                <BodyContent
                  leftText={
                    mainContent.leftTextMobile
                      ? mainContent.leftTextMobile
                      : leftBody
                  }
                  contentClass={contentClass}
                />
              </>
            )}
          </>
        )}
      </div>
      {/* end mobile content */}
      <style jsx>
        {`
          @media only screen and (max-width: 1056px) {
            .info-block-column {
              ${getDefaultMobileStyle(mainContent)}
            }
          }

          @media only screen and (max-width: 1055px) {
            .info-block-column {
              ${getMobileStyle(mainContent)}
            }
          }
        `}
      </style>
    </div>
  );
};
Info.propTypes = {
  mainContent: PropTypes.shape({
    leftText: PropTypes.string,
    leftHeader: PropTypes.string,
    accordion: PropTypes.bool,
    
  }),
  assetType: PropTypes.string,
  productName: PropTypes.string,
  designTemplate: PropTypes.string
};
Info.defaultProps = {
  t: (t: any) =>{
    return t;
  }
}

export default (Info);
