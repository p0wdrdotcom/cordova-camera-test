function BarcodeScannerService($q) {

    var barcodeScanner;

    function init() {
        barcodeScanner = cordova.plugins.barcodeScanner.scan;
    }

    var defer = $q.defer;

    function scan() {
        var deferred = defer();
        barcodeScanner(function success(result) {
                if (result.cancelled) {
                    return deferred.reject('user cancelled');
                }
                return deferred.resolve({
                    text: result.text,
                    format: result.format
                });
            },
            function error(error) {
                return deferred.reject(error);
            });

        return deferred.promise;
    }

    return {
        scan: scan,
        init: init
    };
}

BarcodeScannerService.$name = 'BarcodeScannerService';
BarcodeScannerService.$inject = ['$q'];

module.exports = BarcodeScannerService;