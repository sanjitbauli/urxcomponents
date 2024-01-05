import React from 'react';
import { UrxElementType } from '../types/UrxElement';
type Props = {
    element: UrxElementType;
    onSelect: Function;
    selected: boolean;
    productName: string;
    lng?: string;
};
export declare function UrxElement(props: Props): React.JSX.Element;
export {};
