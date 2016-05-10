var rect = {
    x: 200,
    y: 300,
    width: 100,
    height: 100
};

var size = {
    maxWidth: 100,
    maxHeight: 100
}

function CameraPreviewService($q) {

    var defer = $q.defer;
    var cameraPreview;

    function init() {
        /* global cordova */
        cameraPreview = cordova.plugins.camerapreview;
    }

    function start() {
        cameraPreview.startCamera(rect, 'back', true, true, false);
    }

    function stop() {
        cameraPreview.stopCamera();
    }

    function takePicture() {
        var deferred = defer();

        cameraPreview.setOnPictureTakenHandler(function(result) {
            deferred.resolve({
                original: result[0],
                preview: result[1]
            });
        });

        cameraPreview.takePicture(size);

        return deferred.promise;
    }

    return {
        start: start,
        stop: stop,
        takePicture: takePicture,
        init: init
    };

}

CameraPreviewService.$name = 'CameraPreviewService';
CameraPreviewService.$inject = ['$q'];
module.exports = CameraPreviewService;