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
      case "smell flowers":
        $(".display-choice").text("The smell intoxicates you and burns your nose a bit. You think it might be tasty.");
        break;
      case "eat flowers":
        $(".display-choice").text("You trip out!");
        $scope.utilities.addHP(2);
        $("body").css("background-color", "#F6154D");
        $("#animation").addClass("foo");
        $("#animation2").addClass("bar");
        break;
      case "look bush":
        $(".display-choice").text("You see a big backpack.");
        break;
      case "look backpack":
        $(".display-choice").text("You look inside and find a pack of matches and rope.");
        break;
      case "take matches":
        if ($scope.utilities.takeItem($scope.room, "matches")) {
          $(".display-choice").text("Maybe now you can light your way!");
        }
       break;
      case "take rope":
        if ($scope.utilities.takeItem($scope.room, "rope")) {
          $(".display-choice").text("You have a lot of rope!");
        }
        break;
      case "take backpack":
        if ($scope.utilities.takeItem($scope.room, "backpack")) {
          $(".display-choice").text("Wise choice! You can carry many things now.");
        }
        if ($scope.utilities.checkItem($scope.room, "matches")) { // matches still in room
          $scope.utilities.takeItem($scope.room, "matches");
        }
        if ($scope.utilities.checkItem($scope.room, "rope")) { // rope still in room
          $scope.utilities.takeItem($scope.room, "rope");
        }
        break;
      case "look north":
        $(".display-choice").text("You see a tall castle wall.");
        break;
      case "look south":
        $(".display-choice").text("You see a vast empty field.");
        break;
      case "look east":
        $(".display-choice").text("You see a large black hole.");
        break;
      case "look west":
        $(".display-choice").text("You see a menacing tall castle wall.");
        break;
      case "go north":
        $("body").css("background-color", "white");
        $("#animation").removeClass("foo");
        $("#animation2").removeClass("bar");
        $alert("You are ill prepared to make such a journey! Go back!")
        break;
      case "go south":
        $("body").css("background-color", "white");
        $("#animation").removeClass("foo");
        $("#animation2").removeClass("bar");
        $alert("Why would you want to go here? Rethink this decision!")
        break;
      case "go east":
        $("body").css("background-color", "white");
        $("#animation").removeClass("foo");
        $("#animation2").removeClass("bar");
        $state.go("room2");
        break;
      case "go west":
        $("body").css("background-color", "white");
        $("#animation").removeClass("foo");
        $("#animation2").removeClass("bar");
        $alert("You are really ill prepared to make such a journey! Go back!")
        break;

      case "help":
      case "inventory":
        break;
      default:
        $(".display-choice").text("I do not know how to do this. Try asking for help.");
    }

  };

});
