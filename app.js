var rpg = angular.module('rpg', ['ui.router']);

rpg.config(function($stateProvider) {

  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/home.html"
  });

});
