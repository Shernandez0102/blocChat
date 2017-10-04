(function() {
     function NewRoomModalCtrl($scope, $uibModalInstance, Room) {
       var $modal = this;

     /* Close modal without saving changes on click of cancel button or press of Esc button */
      $modal.cancel = function() {
       console.log('Cancelling process to create new room');
       $uibModalInstance.dismiss();
    };
    /* Save new room name and add new room to rooms array on click of create button */
     $modal.save = function() {
       Room.add($modal.newroom);
       $uibModalInstance.close();
     };
  }

     angular
         .module('blocchat-project')
         .controller('NewRoomModalCtrl', ['$scope','$uibModalInstance', 'Room', NewRoomModalCtrl]);
 })();
