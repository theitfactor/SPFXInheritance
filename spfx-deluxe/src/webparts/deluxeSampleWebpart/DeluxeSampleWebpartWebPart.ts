import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

// import basic web part
import CoreSampleWebpartWebPart from '../../../../spfx-core/src/webparts/coreSampleWebpart/CoreSampleWebpartWebPart';

import * as strings from 'DeluxeSampleWebpartWebPartStrings';
import DeluxeSampleWebpart from './components/DeluxeSampleWebpart';
import { IDeluxeSampleWebpartProps } from './components/IDeluxeSampleWebpartProps';

export interface IDeluxeSampleWebpartWebPartProps {
  description: string;
}

export default class DeluxeSampleWebpartWebPart extends CoreSampleWebpartWebPart <IDeluxeSampleWebpartWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IDeluxeSampleWebpartProps> = React.createElement(
      DeluxeSampleWebpart,
      {
        description: this.properties.description
      }
    );

    ReactDom.render(element, this.domElement);
  }

  // private onDispose(): void {
  //   ReactDom.unmountComponentAtNode(this.domElement);
  // }

  // protected get dataVersion(): Version {
  //   return Version.parse('1.0');
  // }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
