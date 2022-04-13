const { awscdk } = require('projen');

const PROJECT_NAME = 'dynamo-auto-archive-to-s3';

const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Katie Woolston',
  authorAddress: 'katiewoolston@geniesolutions.com.au',
  cdkVersion: '2.1.0',
  defaultReleaseBranch: 'main',
  name: PROJECT_NAME,
  repositoryUrl: 'https://github.com/katiewoolston/dynamo-auto-archive-to-s3-construct.git',
  description: 'A construct that automatically archives expired dynamo records to S3',
  deps: [
    'aws-cdk-lib',
    'constructs',
    '@aws-cdk/aws-apigatewayv2-alpha',
    '@aws-cdk/aws-apigatewayv2-integrations-alpha',
  ],
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();
