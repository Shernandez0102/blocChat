(function() {
  function config($locationProvider, $stateProvider) {
    $locationProvider
        .html5Mode({
            enabled: true,
            requireBase: false
         });

    $stateProvider
        .state('main', {
            url: '/',
            controller: 'RoomCtrl as main',
            templateUrl: '/templates/rooms.html'
        });
  }
     angular
         .module('blocchat-project', ['ui.router', 'firebase', 'ui.bootstrap'])
         .config(config);
 })();
