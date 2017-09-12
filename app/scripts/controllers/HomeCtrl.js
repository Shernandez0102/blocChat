(function() {
     function HomeCtrl($uibModal) {
       this.open = function() {
         var modalInstance = $uibModal.open({
           templateUrl: '/templates/modal.html',
           controller: 'ModalInstanceCtrl as modalInstance'
         })
       }
     }

     angular
         .module('blocchat-project')
         .controller('HomeCtrl', ['$uibModal', HomeCtrl]);
 })();
