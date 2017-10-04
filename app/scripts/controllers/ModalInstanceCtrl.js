(function() {
     function ModalInstanceCtrl($uibModalInstance, Home) {
       this.cancel = function() {
         $uibModalInstance.dismiss();
       }

       this.createRoom = function() {
         $uibModalInstance.close(this.room);
         Room.add(this.room);
       }
     }

     angular
         .module('blocchat-project')
         .controller('ModalInstanceCtrl', ['$uibModalInstance', 'Home', ModalInstanceCtrl]);
 })();
