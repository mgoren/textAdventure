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
          factory.utilities.displayGold(item);
          room.splice(room.indexOf(item), 1);
          return true;
        } else if ( (factory.user.inventory.indexOf("backpack") !== -1) || (factory.user.inventory.length < 2) || item === "backpack") {
          factory.user.inventory.push(item);
          factory.utilities.displayItem("You have taken this item");
          room.splice(room.indexOf(item), 1);
          return true;
        } else {
          factory.utilities.displayItem("You only have two hands!");
        }
      } else {
        factory.utilities.displayItem("You already have taken this item. Don't be greedy!");
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
    },

    displayDanger: function(txt) {
      $(".display-danger").text(txt);
      $(".display-danger").show();
      $(".display-danger").fadeOut(4000);
    },

    displayGold: function(txt) {
      $(".display-gold").text("You now have " + txt);
      $(".display-gold").show();
      $(".display-gold").fadeOut(4000);
    },

    displayItem: function(txt) {
      $(".display-item").text(txt);
      $(".display-item").show();
      $(".display-item").fadeOut(4000);
    },

    displayChoice: function(txt) {
      $(".display-choice").fadeIn(500);
      $(".display-choice").text(txt);
    }

  };
  return factory;

});
