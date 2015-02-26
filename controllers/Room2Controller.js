rpg.controller('Room2Ctrl', function Room2Ctrl($scope, $state, UserFactory, RoomsFactory, UtilitiesFactory) {
  $scope.UtilitiesFactory = UtilitiesFactory;
  $scope.utilities = UtilitiesFactory.utilities;
  $scope.UserFactory = UserFactory;
  $scope.user = UserFactory.user;
  $scope.RoomsFactory = RoomsFactory;
  $scope.rooms = RoomsFactory.rooms;
  $scope.room = $scope.rooms.room2;
  $("input").focus();

  $scope.room.description = "You are on the precipice of a large hole. You cannot go around...."

  $scope.choice = function() {
    $scope.room.choice = $scope.userChoice;
    $scope.userChoice = null;
    $(".display-choice").empty();
    $("input").focus();

    switch($scope.room.choice) {
      case "jump in hole":
        $scope.user.hp = 0;
        alert("YOU DIED");
        $state.go('hell');
        break;
      case "look north":
        $(".display-choice").text("There is a large dark hole.");
        break;
      case "look hole":
        $(".display-choice").text("It is very dark, you see the depths of your soul. Do you want to find out who you really are?");
        break;
      case "look south":
        $(".display-choice").text("You see a field with a dirty pile of rags.");
        break;
      case "look east":
        $(".display-choice").text("You see an impenetrable forest.");
        break;
      case "look west":
        $(".display-choice").text("In the distance you see some interesting bushes.");
        break;
      case "go north":
        $(".display-choice").text("We already told you...You cannot pass!");
        break;
      case "go east":
        alert("The forest is impenetrable you cannot pass!");
        break;
      case "go south":
        $state.go('room1');
        break;
      case "go west":
        $state.go('room6');
        break;
      case "help":
      case "inventory":
        break;
      default:
        $(".display-choice").text("I do not know how to do this. Try asking for help.");
    }

  };

});
