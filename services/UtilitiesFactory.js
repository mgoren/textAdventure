rpg.factory('UtilitiesFactory', function UtilitiesFactory(RoomsFactory, UserFactory) {
  var factory= {};
  factory.RoomsFactory = RoomsFactory;
  factory.UserFactory = UserFactory;
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
          factory.UserFactory.user.gp += parseInt(item[0]);
          alert("You found " + item + "!");
        } else {
          factory.UserFactory.user.inventory.push(item);
          alert("You now have " + item + "!");
        }
        room.splice(room.indexOf(item), 1);
        return true;
      } else {
        alert("You already have taken " + item + ". Don't be greedy!");
        return false;
      }
    }
  };
  return factory;

});
