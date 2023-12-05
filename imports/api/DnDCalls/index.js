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
