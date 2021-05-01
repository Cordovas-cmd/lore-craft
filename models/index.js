// import models
const Character = require('./Character');
const Faction = require('./Faction');
const Game = require('./Game');
const Race = require('./Race');
const LinkTag = require('./LinkTag');
const User = require('./User');

// Character belongsTo games
Character.belongsTo(Game, {
foreignKey: 'game_name',
});
// Games have many Characters
Game.hasMany(Character, {
  foreignKey: 'game_name',
});
// Character belongTo factions (through LinkTag)
Character.belongsTo(Faction, {
  through: LinkTag,
  foreignKey: 'faction_id',
});

// Race belongToMany Character (through LinkTag)
Race.belongsToMany(Character, {
  through: LinkTag,
  foreignKey: 'character_id',
});

Faction.hasMany(Character, {
  through: LinkTag,
  foreignKey: 'character_id'
});

module.exports = {
  Character,
  Game,
  Faction,
  Race,
  LinkTag,
  User
};
