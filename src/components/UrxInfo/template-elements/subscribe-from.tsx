import React from 'react';
import { UrxElementType } from '../types/UrxElement';
type Props = {
  element: UrxElementType;
  selected: boolean;
  onSelect?: Function;
}
export function SubscribeFrom(props: Props) {
  const { element, onSelect, selected } = props;
  const elementProps = {
    onClick: () =>{
      
    }
  };
  if (typeof onSelect === "function") {
    elementProps.onClick = () => {
      onSelect(element);
    };
  }
  return (
    <div className={`subscribe-from selectable ${selected ? 'selected': ''}`} {...elementProps}>
      <p className="label-01" dangerouslySetInnerHTML={{
            __html: element.attributes.content || element.attributes.defaultContent,
          }} />
      <img alt={element.attributes.content} src={element.attributes.image} />
    </div>
  );
}
