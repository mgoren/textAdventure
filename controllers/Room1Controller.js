rpg.controller('Room1Ctrl', function Room1Ctrl($scope, $state, UserFactory, RoomsFactory, UtilitiesFactory) {
  $scope.rooms = RoomsFactory.rooms;
  $scope.RoomsFactory = RoomsFactory;
  $scope.user = UserFactory.user;
  $scope.UserFactory = UserFactory;
  $scope.UtilitiesFactory = UtilitiesFactory;
  $scope.utilities = UtilitiesFactory.utilities;
  $scope.room = {};
  $scope.room1 = RoomsFactory.rooms.room1;

  $scope.room.description = "You are in an open field. There is a pile of dirty rags on the ground."

  $scope.choice = function() {
    $scope.room.choice = $scope.userChoice;
    $scope.userChoice = null;
    $(".display-choice").empty();

    switch($scope.room.choice) {
      case "look at rags":
        if($scope.utilities.checkItem($scope.room1, "crowbar")) {
          $(".display-choice").text("You search through the dirty rags and find a crowbar. Also, you are covered in dirt. You think you see something shiny but you would have to dig through the rags to be sure.");
        } else {
          $(".display-choice").text("You search through the dirty rags and find... dirty rags. Also, you are covered in even more dirt.");
        }
        break;
      case "dig through rags":
        if($scope.utilities.takeItem($scope.room1, "3 gold pieces")) {
          $(".display-choice").text("You found 3 GP! You become sick and lose 1 HP.");
        } else {
          $(".display-choice").text("You become sick and lose 1 HP.");
        }
        $scope.utilities.subtractHP(1);
        break;
      case "take crowbar":
        if ($scope.utilities.takeItem($scope.room1, "crowbar")) {
          $(".display-choice").text("You dug through the greasy rags and pulled out a rusted crowbar. Congratulations.");
        }
        break;
      case "take rags":
        if ($scope.utilities.takeItem($scope.room1, "dirty rags")) {
          $(".display-choice").text("You see the pile of greasy rags and you think they might come in handy.");
        }
        break;
      case "look north":
        $(".display-choice").text("You see a dark hole in the distance.");
        break;
      case "look south":
      case "look east":
      case "look west":
        $(".display-choice").text("You see field.");
        break;
      case "go north":
        $state.go('room2');
        break;
      case "go east":
        // $state.go('room3');
        alert("It is not wise to go this way! GO BACK!");
        break;
      case "go south":
        // $state.go('room4');
        alert("It is not wise to go this way! GO BACK!");
        break;
      case "go west":
        // $state.go('room5');
        alert("It is not wise to go this way! GO BACK!");
        break;
    }

  };

});
