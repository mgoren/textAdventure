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
      case "look north":

        break;
      case "look south":

        break;
      case "look east":
        $(".display-choice").text("You see a large black hole.");
        break;
      case "look west":

        break;
      case "go north":
        $("body").css("background-color", "white");
        $("#animation").removeClass("foo");
        $("#animation2").removeClass("bar");
        break;
      case "go south":
        $("body").css("background-color", "white");
        $("#animation").removeClass("foo");
        $("#animation2").removeClass("bar");
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
        break;

      case "help":
      case "inventory":
        break;
      default:
        $(".display-choice").text("I do not know how to do this. Try asking for help.");
    }

  };

});
