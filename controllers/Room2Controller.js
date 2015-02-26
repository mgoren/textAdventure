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
      case "jump hole":
      case "go hole":
      case "go down":
        $scope.user.hp = 0;
        $scope.utilities.displayDanger("YOU DIED");
        $state.go('hell');
        break;
      case "look north":
        $scope.utilities.displayChoice("There is a large dark hole.");
        break;
      case "look hole":
      case "look down":
        $scope.utilities.displayChoice("It is very dark, you see the depths of your soul. Do you want to find out who you really are?");
        break;
      case "scale hole":
      case "climb hole":
        if($scope.utilities.inInventory("rope")) {
          alert("CLIMBING DOWN HOLE");
        } else
          $scope.utilities.displayChoice("How do you expect to climb down the hole with only your bare hands?");
        break;
      case "yes":
      case "no":
        $scope.utilities.displayChoice("That was a rhetorical question dumbass.");
        break;
      case "look south":
        $scope.utilities.displayChoice("You see a field with a dirty pile of rags.");
        break;
      case "look east":
        $scope.utilities.displayChoice("You see an impenetrable forest.");
        break;
      case "look west":
        $scope.utilities.displayChoice("In the distance you see some interesting bushes.");
        break;
      case "go north":
        $scope.utilities.displayChoice("We already told you...You cannot pass!");
        break;
      case "go east":
        $scope.utilities.displayDanger("The forest is impenetrable you cannot pass!");
        break;
      case "go south":
        $state.go('room1');
        break;
      case "go west":
        $state.go('room6');
        break;
      case "fuck you":
        $scope.utilities.displayChoice("I will smite you for that language! Lose 1 HP.")
        $scope.utilities.subtractHP(1);
      case "go left":
      case "go right":
        $scope.utilities.displayDanger("Use cardinal directions.");
        break;
      case "help":
      case "inventory":
        break;
      default:
        $scope.utilities.displayChoice("I do not know how to do this. Try asking for help.");
    }

  };

});
