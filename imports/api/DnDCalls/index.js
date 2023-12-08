const baseURL = "https://www.dnd5eapi.co";

export async function getMonsters() {
	const response = await fetch(`${baseURL}/api/monsters`);
	const data = await response.json();
	return data;
}

export async function getMonster(monsterURL) {
	const response = await fetch(`${baseURL}${monsterURL}`);
	const data = await response.json();
	return data;
}

export async function getSpells() {
	const response = await fetch(`${baseURL}/api/spells`);
	const data = await response.json();
	return data;
}

export async function getSpell(spellURL) {
	const response = await fetch(`${baseURL}${spellURL}`);
	const data = await response.json();
	return data;
}
