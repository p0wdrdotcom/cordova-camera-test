function CameraTabController(cameraPreviewService) {

    var filenames = [];

    function getFilenames() {
        return filenames;
    }

    function showCamera() {
        cameraPreviewService.start();
    }

    function hideCamera() {
        cameraPreviewService.stop();
    }

    function setFilenames(f) {
        filenames = f;
    }

    function takePicture() {
        return cameraPreviewService.takePicture()
            .then(function(capture) {
                setFilenames([capture.original, capture.preview]);
            });
    }

    this.showCamera = showCamera;
    this.hideCamera = hideCamera;
    this.takePicture = takePicture;
    this.getFilenames = getFilenames;
}

CameraTabController.$inject = ['CameraPreviewService'];
CameraTabController.$name = 'CameraTabController';

module.exports = CameraTabController;