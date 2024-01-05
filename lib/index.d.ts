import { PureComponent } from 'react';

type MainContentType = {
    leftText: string;
    leftHeader: string;
    v23: boolean;
    accordion?: boolean;
    leftHeaderMobile?: string;
    leftTextMobile?: string;
};

type Props = {
    formConfig: {
        mainContent: MainContentType;
        designTemplate: string;
        assetType: string;
    };
    className: string;
};
declare class InfoContainer extends PureComponent<Props> {
    constructor(props: Props);
    render(): any;
}

export { InfoContainer };
