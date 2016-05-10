function BarcodeTabController($scope, scannerService) {

    var barcodeText = '';

    function setBarcodeText(t) {
        barcodeText = t;
    }

    function getBarcodeText() {
        return barcodeText;
    }

    function scan() {
        return scannerService.scan()
            .then(function(barcode) {
                setBarcodeText(barcode.text);
            });
    }


    this.scan = scan;
    this.getBarcodeText = getBarcodeText;
}

BarcodeTabController.$inject = ['$scope', 'BarcodeScannerService'];
BarcodeTabController.$name = 'BarcodeTabController';
module.exports = BarcodeTabController;