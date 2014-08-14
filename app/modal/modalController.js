'use strict';

angular.module('jj.modal')
    .controller('ModalCtrl',function($scope){
        $scope.hideDialog = function () {
            $scope.closed = true;            
        };
        $scope.showModal = function(){
            $scope.closed = false;    
        };
    })
    .directive('jjModal', function(){
          
        return {
            restrict: 'AE',
            transclude: true,            
            scope: {
                title: '@',
                close: '&onClose'
            },
            templateUrl: "/modal/jj-modal.html"
        }
    })