rpg.controller('UserCtrl', function UserCtrl($scope, $state, UserFactory) {
  $scope.user = UserFactory.user;
  $scope.UserFactory = UserFactory;
  $scope.createUser = function() {
    $scope.user.name = $scope.userName;
    $scope.userName = null;
    $state.go('room1');
  };
  $scope.beginAgain = function() {
    $state.go('home');
  };
});
