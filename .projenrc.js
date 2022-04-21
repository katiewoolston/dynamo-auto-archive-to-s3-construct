const { awscdk } = require('projen');

const PROJECT_NAME = 'dynamo-auto-archive-to-s3';

const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Katie Woolston',
  authorAddress: 'khwoolston@gmail.com',
  cdkVersion: '2.1.0',
  defaultReleaseBranch: 'main',
  name: PROJECT_NAME,
  repositoryUrl: 'https://github.com/katiewoolston/dynamo-auto-archive-to-s3-construct.git',
  description: 'A construct that automatically archives expired dynamo records to S3',
  devDeps: [
    'cdk',
  ],
  deps: [
    'aws-cdk-lib',
    'constructs',
    '@aws-cdk/aws-apigatewayv2-alpha',
    '@aws-cdk/aws-apigatewayv2-integrations-alpha',
  ],
  scripts: {
    'cdk:deploy': "npx cdk deploy --require-approval never --app='./lib/integ.default.js'",
    'cdk:destroy': "npx cdk destroy --app='./lib/integ.default.js'",
  },
  gitignore: [
    'cdk.out',
    '.projen',
  ],
  bugs: {
    url: 'https://github.com/katiewoolston/dynamo-auto-archive-to-s3-construct/issues',
  },
  homepage: 'https://github.com/katiewoolston/dynamo-auto-archive-to-s3-construct#readme',
  depsUpgradeOptions: {
    workflow: false,
  },
});
project.synth();
