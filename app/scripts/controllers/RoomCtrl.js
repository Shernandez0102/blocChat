(function() {
  function RoomCtrl(Room, $uibModal) {
    var main = this;
    main.rooms = Room.all;


    main.addNew = function() {
      console.log('Opening modal');
      var modalInstance = $uibModal.open({
        templateUrl:    '/templates/new-room-modal.html',
        controller:     'NewRoomModalCtrl',
        controllerAs:   '$modal'
      });
    }
   }


     angular
         .module('blocchat-project')
         .controller('RoomCtrl', ['Room', '$uibModal', RoomCtrl]);
 })();
