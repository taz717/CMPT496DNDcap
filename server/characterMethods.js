// Creating methods for the collection
Meteor.methods({
	// Insert a new character into the collection
	"character.insert"(character) {
		CharacterCollection.insert(character);
	},
	// Remove a character from the collection
	"character.remove"(characterId) {
		CharacterCollection.remove(characterId);
	},
	// get a character from the collection
	"character.get"(characterId) {
		return CharacterCollection.findOne(characterId);
	},
	// get character ID
	"character.getId"(characterName) {
		return CharacterCollection.findOne({ name: characterName })._id;
	},
	// get character death saves
	"character.getDeathSaves"(characterId) {
		return CharacterCollection.findOne(characterId).deathSaves;
	},
	// get character spells
	"character.getSpells"(characterId) {
		return CharacterCollection.findOne(characterId).spells;
	},
	// get character inventory
	"character.getInventory"(characterId) {
		return CharacterCollection.findOne(characterId).inventory;
	},
	// remove a character's equipment
	// query ID of character, type of equipment, and name of equipment
	// pull the equipment from the character's equipment array
	"character.removeEquipment"(characterId, type, piece) {
		return CharacterCollection.update(characterId, {
			$pull: { equipment: { type: type, name: piece } },
		});
	},
	// add a character's equipment
	// query ID of character, type of equipment, and name of equipment
	// push the equipment to the character's equipment array
	"character.addEquipment"(characterId, type, piece) {
		return CharacterCollection.update(characterId, {
			$push: { equipment: { type: type, name: piece } },
		});
	},

	//  Update a character's HP
	"character.updateHP"(characterId, hp) {
		CharacterCollection.update(characterId, { $set: { hp: hp } });
	},
});
