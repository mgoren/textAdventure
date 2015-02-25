rpg.controller('Room1Ctrl', function Room1Ctrl($scope, $state, UserFactory, RoomFactory) {
  $scope.room = RoomFactory.room;
  $scope.RoomFactory = RoomFactory;
  $scope.user = UserFactory.user;
  $scope.UserFactory = UserFactory;

  $scope.room.description = "You are in an open field. There is a pile of dirty rags on the ground."

  $scope.choice = function() {
    $scope.room.choice = $scope.userChoice;
    $scope.userChoice = null;

    switch($scope.room.choice) {
      case "look at rags":
        $(".display-choice").text("You search through the dirty rags and find a crowbar. Also, you are covered in dirt.");
        break;
      case "take crowbar":
        if ($scope.user.inventory.indexOf("crowbar") === -1) {
          $scope.user.inventory.push("crowbar");
          $(".display-choice").text("You dug through the greasy rags and pulled out a rusted crowbar. Congratulations.");
          alert("Your inventory now includes a rusted crowbar!");
        } else {
          $(".display-choice").empty();
          alert("You have already taken the crowbar!");
        }
        break;
      case "take rags":
        if ($scope.user.inventory.indexOf("dirty rags") === -1) {
          $scope.user.inventory.push("dirty rags");
          $(".display-choice").text("You see the pile of greasy rags and you think they might come in handy.");
          alert("Your inventory now includes some dirty rags!");
        } else {
          $(".display-choice").empty();
          alert("How many dirty rags do you really require?");
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
        $state.go('room3');
        break;
      case "go south":
        $state.go('room4');
        break;
      case "go west":
        $state.go('room5');
        break;
    }

  };

});
