var NAME = 'someapp.camera';

var m = angular.module(NAME, []);

var cameraTabController = require('./camera.tab.controller.js');
m.controller(cameraTabController.$name, cameraTabController);

var cameraPreviewService = require('./camera.preview.service.js');
m.factory(cameraPreviewService.$name, cameraPreviewService);


function init($ionicPlatform, cameraPreviewService) {
    $ionicPlatform.ready(function() {
        cameraPreviewService.init();
    });
}
init.$inject = ['$ionicPlatform', cameraPreviewService.$name];
m.run(init);

module.exports = NAME;