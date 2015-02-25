var rpg = angular.module('rpg', ['ui.router']);

rpg.config(function($stateProvider) {

  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/home.html",
    controller: "UserCtrl"
  });

  $stateProvider.state('room1', {
    url: "room1",
    templateUrl: "partials/room.html",
    controller: "Room1Ctrl"
  });

});
