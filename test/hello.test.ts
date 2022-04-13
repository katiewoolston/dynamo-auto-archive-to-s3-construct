import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { Construct } from 'constructs';
import { CdkSampleLib } from '../src';

describe('CdkSampleLib', () => {
  class TestStack extends cdk.Stack {
    constructor(scope: Construct, id: string) {
      super(scope, id);

      new CdkSampleLib(this, 'TestStack');
    }
  }

  test('synthesizes the way we expect', () => {
    const app = new cdk.App();

    // Prepare the stack for assertions.
    const processorStack = new TestStack(app, 'ProcessorStack');
    const template = Template.fromStack(processorStack);

    // Assert it creates the function with the correct properties...
    template.resourceCountIs('AWS::Lambda::Function', 1);
    template.hasResourceProperties('AWS::Lambda::Function', {
      Handler: 'index.handler',
    });

  });
});
