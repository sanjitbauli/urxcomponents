import React from "react";
import { UrxElementType } from "../types/UrxElement";
type Props = {
    element: UrxElementType;
    onSelect: Function;
    selected: boolean;
    editIndex: number;
};
export declare function UrxListItems(props: Props): React.JSX.Element;
export {};
