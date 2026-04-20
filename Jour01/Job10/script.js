function compterVoyelles(phrase) {
	const voyelles = ['a', 'e', 'i', 'o', 'u', 'y'];
	let compteur = 0;
	for (let i = 0; i < phrase.length; i++) {
		if (voyelles.includes(phrase[i].toLowerCase())) {
			compteur++;
		}
	}
	console.log(`La phrase contient ${compteur} voyelles`);
}

compterVoyelles("Bonjour tout le monde"); // Affiche : La phrase contient 7 voyelles
compterVoyelles("Ceci est un test");      // Affiche : La phrase contient 5 voyelles
compterVoyelles("xyz");                   // Affiche : La phrase contient 1 voyelles