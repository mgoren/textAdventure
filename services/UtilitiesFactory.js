rpg.factory('UtilitiesFactory', function UtilitiesFactory(RoomsFactory, UserFactory, $state) {
  var factory= {};
  factory.RoomsFactory = RoomsFactory;
  factory.UserFactory = UserFactory;
  factory.user = UserFactory.user;
  factory.utilities = {

    checkItem: function(room, item) {
      if (room.indexOf(item) !== -1) {
        return true;
      } else {
        return false;
      }
    },

    takeItem: function(room, item) {
      if (room.indexOf(item) !== -1) {
        if(item.substring(2) === "gold pieces") {
          factory.user.gp += parseInt(item[0]);
          alert("You found " + item + "!");
          room.splice(room.indexOf(item), 1);
          return true;
        } else if ( (factory.user.inventory.indexOf("backpack") !== -1) || (factory.user.inventory.length < 2) || item === "backpack") {
          factory.user.inventory.push(item);
          alert("You now have " + item + "!");
          room.splice(room.indexOf(item), 1);
          return true;
        } else {
          alert("You only have two hands!");
        }
      } else {
        alert("You already have taken " + item + ". Don't be greedy!");
        return false;
      }
    },

    inInventory: function(item) {
      if (factory.user.inventory.indexOf(item) !== -1) {
        return true;
      } else {
        return false;
      }
    },

    subtractHP: function(hp) {
      factory.user.hp -= hp;
      if (factory.user.hp < 1) {
        $state.go("hell");
      }
    },

    addHP: function(hp) {
      factory.user.hp += hp;
    }

  };
  return factory;

});
