
(function() {
  function Room($firebaseArray) {

    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);
    return {
      all: rooms
    };
  }

  angular
    .module('blocchat-project')
    .factory('Room', ['$firebaseArray', Room]);
})();
