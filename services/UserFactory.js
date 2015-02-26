rpg.factory('UserFactory', function UserFactory() {
  var factory = {};
  factory.user = { hp: 10, gp: 0, inventory: [] };
  return factory;
});
