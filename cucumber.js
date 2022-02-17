const options = [
    'test/features/*', // feature filter
    '--require test/features/steps/*.ts',
    '--require-module ts-node/register',
    '--format node_modules/cucumber-pretty:res.txt',
    '--tags "not @wip"',
  ]
  
  exports.profile = options.join(' ')