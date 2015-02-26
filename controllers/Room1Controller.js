rpg.controller('Room1Ctrl', function Room1Ctrl($scope, $state, UserFactory, RoomsFactory) {
  $scope.rooms = RoomsFactory.rooms;
  $scope.RoomsFactory = RoomsFactory;
  $scope.user = UserFactory.user;
  $scope.UserFactory = UserFactory;
  $scope.room = {};

  $scope.room.description = "You are in an open field. There is a pile of dirty rags on the ground."

  $scope.choice = function() {
    $scope.room.choice = $scope.userChoice;
    $scope.userChoice = null;

    switch($scope.room.choice) {
      case "look at rags":
        if($scope.rooms.room1.indexOf("crowbar") != -1) {
          $(".display-choice").text("You search through the dirty rags and find a crowbar. Also, you are covered in dirt. You think you see something shiny but you would have to dig through the rags to be sure.");
        } else {
          $(".display-choice").text("You search through the dirty rags and find... dirty rags. Also, you are covered in even more dirt.");
        }
        break;
      case "dig through rags":
        if($scope.rooms.room1.indexOf("3 gold pieces") != -1) {
          $(".display-choice").text("You found 3 GP! You become sick and lose 1 HP.");
          $scope.rooms.room1.splice($scope.rooms.room1.indexOf("3 gold pieces"),1);
          $scope.user.gp += 3;
          $scope.user.hp -= 1;
          if($scope.user.hp < 1) {
            $state.go("hell");
          }
        } else {
          $(".display-choice").text("You become sick and lose 1 HP.");
          $scope.user.hp -= 1;
          if($scope.user.hp < 1) {
            $state.go("hell");
          }
        }
        break;
      case "take crowbar":
        if ($scope.user.inventory.indexOf("crowbar") === -1) {
          $scope.user.inventory.push("crowbar");
          $scope.rooms.room1.splice($scope.rooms.room1.indexOf("crowbar"),1);
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
