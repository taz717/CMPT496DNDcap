///////////////////////////////////////////////////////////////////////////////
// Purpose   : add a piece of equipment to a character
// Parameters: characterId - the id of the character to delete\
//             equipmentPiece - the piece of equipment to add
// Returns   : 0 on success
// Throws    : invalid-character-id
// Blame     : Taz
///////////////////////////////////////////////////////////////////////////////

import { Meteor } from "meteor/meteor";
import { check } from "meteor/check";

// import the collection
import { CharacterCollection } from "../..";
