// import { Accordion, AccordionItem } from "@carbon/react";

import { UrxElement } from "./urx-element";
import filter from "lodash/filter";
import isEmpty from "lodash/isEmpty";
import { useState } from "react";

export function PlgInfo(props) {
  const {
    mainContent,
    productName = "",
    accordion = false,
    toggleText,
  } = props;
  const [open, setOpen] = useState(false)
  const { lang = "en" } = mainContent;
  const headerElements = [];
  const bodyElements = [];
  filter(mainContent.v23, (i) => {
    if (["leftHeader", "leftSubHeader"].indexOf(i.id) > -1) {
      headerElements.push(i);
    } else {
      bodyElements.push(i);
    }
  });
  return (
    <>
      <div className="header-content">
        {headerElements.map((element) => {
          const props = {
            element,
            productName,
            lng: lang,
            key: element.id,
          };
          return <UrxElement {...props} />;
        })}
      </div>
      {!isEmpty(bodyElements) && (
        <div className={`body-content ${accordion? 'has-accordion': ''}`}>
          {/* {accordion && (
            <Accordion className="info-accordion">
              <AccordionItem open={open} title={`${open ? toggleText.collapse : toggleText.expand }`} onClick={()=>{
               setOpen(!open);
              }}>
                {bodyElements.map((element) => {
                  const props = {
                    element,
                    lng: lang,
                    key: element.id,
                  };
                  return <UrxElement {...props} />;
                })}
              </AccordionItem>
            </Accordion>
          )} */}
          {!accordion && (
            <>
              {bodyElements.map((element) => {
                const props = {
                  element,
                  lng: lang,
                  key: element.id,
                };
                return <UrxElement {...props} />;
              })}
            </>
          )}
        </div>
      )}
    </>
  );
}
