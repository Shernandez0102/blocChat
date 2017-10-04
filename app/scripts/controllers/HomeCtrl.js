(function() {
  function HomeCtrl(Home, $uibModal) {
    this.open = function() {
      var modalInstance = $uibModal.open({
        templateUrl: '/templates/modal.html',
        controller: 'ModalInstanceCtrl as modalInstance'
       })
     }
   }


     angular
         .module('blocchat-project')
         .controller('HomeCtrl', ['Home', '$uibModal', HomeCtrl]);
 })();
