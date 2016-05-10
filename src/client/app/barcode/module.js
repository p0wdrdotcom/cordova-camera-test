var NAME = 'someapp.barcode';

var m = angular.module(NAME, []);

var barcodeScannerService = require('./barcode.scanner.service.js');
m.factory(barcodeScannerService.$name, barcodeScannerService);

function init($ionicPlatform, barcodeScannerService) {
    $ionicPlatform.ready(function() {
        barcodeScannerService.init();
    });
}

init.$inject = ['$ionicPlatform', barcodeScannerService.$name];
m.run(init);

module.exports = NAME;