// import { Accordion, AccordionItem } from "@carbon/react";

import React from "react";
import { UrxElement } from "./urx-element";
import filter from "lodash/filter";
import isEmpty from "lodash/isEmpty";
import { useState } from "react";
import { Accordion, AccordionItem } from '@carbon/react'

export function PlgInfo(props: any) {
  const {
    mainContent,
    productName = "",
    accordion = false,
    toggleText,
  } = props;
  const [open, setOpen] = useState(false)
  const { lang = "en" } = mainContent;
  const headerElements: any[] = [];
  const bodyElements: any[] = [];
  filter(mainContent.v23, (i) => {
    if (["leftHeader", "leftSubHeader"].indexOf(i.id) > -1) {
      headerElements.push(i);
    } else {
      bodyElements.push(i);
    }
  });
  return (
    <>

      {!isEmpty(bodyElements) && (
        <div className={`body-content ${accordion ? 'has-accordion' : ''}`}>
          {accordion && (
            <div className="mobile-content">
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
              <Accordion className="info-accordion">
                <AccordionItem open={open} title={`${open ? toggleText.collapse : toggleText.expand}`} onClick={() => {
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
            </div>
          )}
          {!accordion && (
            <div className="desktop-content">
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
              {bodyElements.map((element) => {
                const props = {
                  element,
                  lng: lang,
                  key: element.id,
                };
                return <UrxElement {...props} />;
              })}
            </div>
          )}
        </div>
      )}
    </>
  );
}
