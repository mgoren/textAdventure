rpg.controller('Room1Ctrl', function Room1Ctrl($scope, $state, UserFactory, RoomsFactory, UtilitiesFactory) {
  $scope.UtilitiesFactory = UtilitiesFactory;
  $scope.utilities = UtilitiesFactory.utilities;
  $scope.UserFactory = UserFactory;
  $scope.user = UserFactory.user;
  $scope.RoomsFactory = RoomsFactory;
  $scope.rooms = RoomsFactory.rooms;
  $scope.room = $scope.rooms.room1;
  $("input").focus();

  $scope.room.description = "You are in an open field. There is a pile of dirty rags on the ground."

  $scope.choice = function() {
    $scope.room.choice = $scope.userChoice;
    $scope.userChoice = null;
    $(".display-choice").empty();
    $("input").focus();

    switch($scope.room.choice) {
      case "look rags":
        if( ($scope.utilities.checkItem($scope.room, "crowbar")) && ($scope.utilities.checkItem($scope.room, "3 gold pieces")) ) {
          $scope.utilities.displayChoice("You search through the dirty rags and find a crowbar. Also, you are covered in dirt. You think you see something shiny but you would have to dig through the rags to be sure.");
        } else if ($scope.utilities.checkItem($scope.room, "crowbar")) {
          $scope.utilities.displayChoice("You search through the dirty rags and find a crowbar. Also, you are covered in dirt.");
        } else if ($scope.utilities.checkItem($scope.room, "3 gold pieces")) {
          $scope.utilities.displayChoice("You think you see something shiny but you would have to dig through the rags to be sure.");
        } else {
          $scope.utilities.displayChoice("You search through the dirty rags and find... dirty rags. Also, you are covered in even more dirt.");
        }
        break;
      case "dig rags":
        if($scope.utilities.takeItem($scope.room, "3 gold pieces")) {
          $scope.utilities.displayChoice("You found 3 GP! You become sick and lose 1 HP.");
        } else {
          $scope.utilities.displayChoice("You become sick and lose 1 HP.");
        }
        $scope.utilities.subtractHP(1);
        break;
      case "take crowbar":
        if ($scope.utilities.takeItem($scope.room, "crowbar")) {
          $scope.utilities.displayChoice("You dug through the greasy rags and pulled out a rusted crowbar. Congratulations.");
        }
        break;
      case "smell rags":
        $scope.utilities.displayChoice("The rags smell oily. You want a bath. Lose 1 HP.");
        $scope.utilities.subtractHP(1);
        break;
      case "eat rags":
        $scope.user.hp = 0;
        $scope.utilities.displayDanger("YOU DIED");
        $state.go('hell');
        break;
      case "take rags":
        if ($scope.utilities.takeItem($scope.room, "dirty rags")) {
          $scope.utilities.displayChoice("You see the pile of greasy rags and you think they might come in handy.");
        }
        break;
      case "look north":
        $scope.utilities.displayChoice("You see a dark hole in the distance.");
        break;
      case "look south":
      case "look east":
      case "look west":
        $scope.utilities.displayChoice("You see a pack of rabid wolves.");
        break;
      case "go north":
      case "move north":
        $state.go('room2');
        break;
      case "go east":
      case "move east":
        // $state.go('room3');
        $scope.utilities.displayDanger("It is not wise to go this way! GO BACK!");
        break;
      case "go south":
      case "move south":
        // $state.go('room4');
        $scope.utilities.displayDanger("It is not wise to go this way! GO BACK!");
        break;
      case "go west":
      case "move west":
        // $state.go('room5');
        $scope.utilities.displayDanger("It is not wise to go this way! GO BACK!");
        break;
      case "swing crowbar":
      case "use crowbar":
        if ($scope.utilities.inInventory("crowbar")) {
          $scope.utilities.displayChoice("You swing the crowbar and hit air.");
        } else {
          $scope.utilities.displayChoice("You don't have a crowbar!");
        }
        break;


      case "fuck you":
        $scope.utilities.displayChoice("I will smite you for that language! Lose 1 HP.")
        $scope.utilities.subtractHP(1);
      case "go to sleep":
      case "go sleep":
      case "take nap":
      case "lay down":
      case "lie down":
      case "take rest":
      case "rest":
      case "sleep":
      case "nap":
        $scope.utilities.displayChoice("You've just begun. No rest for the weary.")
        break;
      case "go left":
      case "go right":
        $scope.utilities.displayDanger("Use cardinal directions.");
        break;
      case "help":
      case "inventory":
      case "look":
      case "take item":
        break;
      default:
        $scope.utilities.displayChoice("I do not know how to do this. Try asking for help.");
    }

  };

});
