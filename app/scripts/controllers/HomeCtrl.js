(function() {
    function HomeCtrl(Room) {
      this.rooms = Room.all;
    }

    angular
        .module('blocchat-project')
        .controller('HomeCtrl', ['Room', HomeCtrl]);
})();
