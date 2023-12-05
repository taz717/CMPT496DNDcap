const baseURL = "https://www.dnd5eapi.co/api";

export async function getMonsters() {
	const response = await fetch(`${baseURL}/monsters`);
	const data = await response.json();
	return data;
}
