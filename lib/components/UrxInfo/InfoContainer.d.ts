import './plg-styles/plg-info-style.scss';
import { PureComponent } from "react";
import { MainContentType } from './types/MainContentType';
type Props = {
    formConfig: {
        mainContent: MainContentType;
        designTemplate: string;
        assetType: string;
    };
    className: string;
};
export declare class InfoContainer extends PureComponent<Props> {
    constructor(props: Props);
    render(): any;
}
export default InfoContainer;
