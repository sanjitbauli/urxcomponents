import { Column, FlexGrid, Row } from "@carbon/react";
import React, { PureComponent } from "react";
import { getProductName } from "./info.utils";
import { MainContentType } from './types/MainContentType';
import UrxInfo from "./UrxInfo";
import { fetchUrxForm } from "./service";

type Props = {
  formConfig?: {
    mainContent: MainContentType;
    designTemplate: string;
    assetType: string;
  };
  className: string;
  formId: string;
}

interface State {
  formConfig?: Props['formConfig']; 
}

export class InfoContainer extends PureComponent<Props, State>{
  constructor(props: Props) {
    super(props);
    this.state = {
      formConfig: props.formConfig 
    };
  }

  componentDidMount(): void {

    fetchUrxForm(this.props.formId, (response: any) => {
      this.setState({
        formConfig: response
      })
    }, (error: any) => {
     
      console.log(error)
    })
  }

  render() {
    const { className } = this.props;
    const { formConfig } = this.state;
    const productName = formConfig ? getProductName(formConfig) : "";

    return (
      <div className={`bg-container ${className}`}>
        <FlexGrid className="book-container" condensed={false}>
          <Row>
            <Column sm={4} md={8} lg={16} className="left-column">
              {formConfig && ( // Render UrxInfo only if formConfig exists
                <UrxInfo
                  mainContent={formConfig.mainContent}
                  assetType={formConfig.assetType}
                  productName={productName}
                  designTemplate={formConfig.designTemplate}
                  t={(t: any) => { return t; }}
                  container={true}
                />
              )}
            </Column>
          </Row>
        </FlexGrid>
      </div>
    );
  }
}

export default InfoContainer;
