import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { CdkSampleLib } from '../src';

describe('CdkSampleLib', () => {
  it('synthesizes the way we expect', () => {
    const app = new cdk.App();
    const stack = new cdk.Stack(app, 'TestStack');
    new CdkSampleLib(stack, 'Cdk-Sample-Lib');
    const template = Template.fromStack(stack);

    // Assert it creates the function with the correct properties...
    template.resourceCountIs('AWS::Lambda::Function', 1);
    template.hasResourceProperties('AWS::Lambda::Function', {
      Handler: 'index.handler',
    });

  });
});
