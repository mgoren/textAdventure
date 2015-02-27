rpg.controller('HellCtrl', function HellCtrl($scope, $state, UserFactory) {
  $scope.user = UserFactory.user;
  $scope.UserFactory = UserFactory;
  $scope.beginAgain = function() {
    $state.go('home');
  };
});
