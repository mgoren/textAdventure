rpg.controller('Room6Ctrl', function Room6Ctrl($scope, $state, UserFactory, RoomsFactory, UtilitiesFactory) {
  $scope.UtilitiesFactory = UtilitiesFactory;
  $scope.utilities = UtilitiesFactory.utilities;
  $scope.UserFactory = UserFactory;
  $scope.user = UserFactory.user;
  $scope.RoomsFactory = RoomsFactory;
  $scope.rooms = RoomsFactory.rooms;
  $scope.room = $scope.rooms.room6;
  $("input").focus();

  $scope.room.description = "You are in front of a large bush full of beautiful fragrant flowers."

  $scope.choice = function() {
    $scope.room.choice = $scope.userChoice;
    $scope.userChoice = null;
    $(".display-choice").empty();
    $("input").focus();

    switch($scope.room.choice) {
      case "attack flowers":
      case "crowbar flowers":
      case "swing crowbar":
        $scope.utilities.displayChoice("You attack the flowers.");
        break;
      case "smell flowers":
      case "smell flower":
      case "smell bush":
        $scope.utilities.displayChoice("The smell intoxicates you and burns your nose a bit. You think it might be tasty.");
        break;
      case "taste flowers":
      case "taste flower":
      case "eat flowers":
      case "eat flower":
      case "take flower":
      case "take flowers":
      case "pick flower":
      case "pick flowers":
        $scope.utilities.displayChoice("You trip out!");
        $scope.utilities.addHP(2);
        $("body").css("background-color", "#F6154D");
        $("#animation").addClass("foo");
        $("#animation2").addClass("bar");
        break;
      case "eat backpack":
      case "eat rope":
      case "eat matches":
      case "eat bush":
        $scope.utilities.displayChoice("You are an idiot.");
        break;
      case "look bush":
        $scope.utilities.displayChoice("You see a big backpack.");
        break;
      case "look backpack":
      case "open backpack":
        $scope.utilities.displayChoice("You look inside and find a pack of matches and rope.");
        break;
      case "take matches":
        if ($scope.utilities.takeItem($scope.room, "matches")) {
          $scope.utilities.displayChoice("Maybe now you can light your way!");
        }
       break;
      case "take rope":
        if ($scope.utilities.takeItem($scope.room, "rope")) {
          $scope.utilities.displayChoice("You have a lot of rope!");
        }
        break;
      case "take backpack":
        if ($scope.utilities.takeItem($scope.room, "backpack")) {
          $scope.utilities.displayChoice("Wise choice! You can carry many things now.");
        }
        if ($scope.utilities.checkItem($scope.room, "matches")) { // matches still in room
          $scope.utilities.takeItem($scope.room, "matches");
        }
        if ($scope.utilities.checkItem($scope.room, "rope")) { // rope still in room
          $scope.utilities.takeItem($scope.room, "rope");
        }
        break;
      case "look north":
        $scope.utilities.displayChoice("You see a tall castle wall.");
        break;
      case "look south":
        $scope.utilities.displayChoice("You see a vast empty field.");
        break;
      case "look east":
        $scope.utilities.displayChoice("You see a large black hole.");
        break;
      case "look west":
        $scope.utilities.displayChoice("You see a menacing tall castle wall.");
        break;
      case "go north":
      case "move north":
        $("body").css("background-color", "black");
        $("#animation").removeClass("foo");
        $("#animation2").removeClass("bar");
        $scope.utilities.displayDanger("You are ill prepared to make such a journey! Go back!")
        break;
      case "go south":
      case "move south":
        $("body").css("background-color", "black");
        $("#animation").removeClass("foo");
        $("#animation2").removeClass("bar");
        $scope.utilities.displayDanger("Why would you want to go here? Rethink this decision!")
        break;
      case "go east":
      case "move east":
        $("body").css("background-color", "black");
        $("#animation").removeClass("foo");
        $("#animation2").removeClass("bar");
        $state.go("room2");
        break;
      case "go west":
      case "move west":
        $("body").css("background-color", "black");
        $("#animation").removeClass("foo");
        $("#animation2").removeClass("bar");
        $scope.utilities.displayDanger("You are really ill prepared to make such a journey! Go back!")
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
