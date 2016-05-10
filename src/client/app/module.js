var NAME = 'someapp';

var m = angular.module(NAME, [
    'ionic',
    require('./camera/module'),
    require('./barcode/module')
]);

m.run(require('./ionic.run'));
m.config(require('./state'));

module.exports = NAME;