const { awscdk } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Katie Woolston',
  authorAddress: 'katiewoolston@geniesolutions.com.au',
  cdkVersion: '2.1.0',
  defaultReleaseBranch: 'main',
  name: 'dynamo-auto-archive-to-s3-construct',
  repositoryUrl: 'https://github.com/katiewoolston/dynamo-auto-archive-to-s3-construct.git',

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();