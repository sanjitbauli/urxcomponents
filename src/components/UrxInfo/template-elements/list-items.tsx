import React from "react";
import { UrxElementType } from "../types/UrxElement";

type Props = {
  element: UrxElementType;
  onSelect: Function;
  selected: boolean;
  editIndex : number;
}
export function UrxListItems(props: Props) {
  const { element, onSelect, selected, editIndex } = props;

  return (
    <>
      {[...Array(parseInt(element.attributes.content.length))].map((x, i) => {
        const items = element.attributes.content;
        let item = items[i];
        return (
          <section
            key={`list-item-${i}`}
            className={`plg-list-item selectable ${
              selected && editIndex === i ? "selected" : ""
            }
            ${element.attributes.withIcon ? 'with-icon' : ''}
            `}
            onClick={() => {
              if (typeof onSelect === "function") {
                onSelect({ ...element, editIndex: i });
              }
            }}
          >
            {element.attributes.withIcon && (
              <span className="picto-container">
                <img
                  aria-details="featureIcon"
                  alt="feature 1 Icon"
                  src={item.picto}
                  decoding="async"
                  data-nimg="intrinsic"
                  className="picto"
                />{" "}
              </span>
            )}

            <div className="list-content">
              <div className="list-content-title">{item.title}</div>
              <p className="list-content-body"  dangerouslySetInnerHTML={{__html: item.body }} />
            </div>
          </section>
        );
      })}
    </>
  );
}
