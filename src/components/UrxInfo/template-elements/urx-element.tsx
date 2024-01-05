import React from 'react';
import { SubscribeFrom } from "./subscribe-from";
import { UrxElementType } from '../types/UrxElement';
import { UrxListItems } from "./list-items";
import { getStyleClasses } from "./style-class.util";

type Props = {
  element: UrxElementType;
  onSelect: Function;
  selected: boolean;
  productName: string;
  lng?: string;
}
export function UrxElement(props: Props) {
  const { element, onSelect, selected, productName, lng = "en" } = props;
  const elementProps = {
    onClick: () =>{
      
    }
  };
  if (typeof onSelect === "function") {
    elementProps.onClick = () => {
      onSelect(element);
    };
  }
  if (element.id === "leftHeader") {
  }
  switch (element.type) {
    case "heading":
      let headerContent =
        element.attributes.content || element.attributes.defaultContent;
        if(headerContent && headerContent.indexOf('[Product name]') > -1){
          
          headerContent = headerContent.replace("[Product name]", productName);
          if(headerContent.startsWith('IBM IBM ')){
            console.log('headerContent', headerContent)
            headerContent = headerContent.replace('IBM IBM ', 'IBM ',);
          }
        }
      return (
        <div
          className={`${getStyleClasses(element.attributes, "selectable")} ${
            selected ? "selected" : ""
          }`}
          key={element.id}
          dangerouslySetInnerHTML={{
            __html: headerContent,
          }}
          {...elementProps}
        />
      );
    case "listItems":
      return <UrxListItems {...props} />;
    case "subscribeFrom":
      return <SubscribeFrom {...props} />;
    default:
      return (
        <div
          className={`${getStyleClasses(element.attributes, "selectable")} ${
            selected ? "selected" : ""
          }`}
          key={element.id}
          dangerouslySetInnerHTML={{
            __html: element.attributes.content,
          }}
          {...elementProps}
        />
      );
  }
}
