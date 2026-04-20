function jourTravaille(date) {
	// Liste des jours fériés en France pour 2024 (format: 'MM-DD')
	const joursFeries = [
		'01-01', // Jour de l'an
		'04-01', // Lundi de Pâques
		'05-01', // Fête du Travail
		'05-08', // Victoire 1945
		'05-09', // Ascension
		'05-20', // Lundi de Pentecôte
		'07-14', // Fête Nationale
		'08-15', // Assomption
		'11-01', // Toussaint
		'11-11', // Armistice
		'12-25'  // Noël
	];

	const jour = date.getDate();
	const mois = date.getMonth() + 1; // getMonth() commence à 0
	const annee = date.getFullYear();
	const jourStr = jour.toString().padStart(2, '0');
	const moisStr = mois.toString().padStart(2, '0');
	const dateStr = `${moisStr}-${jourStr}`;

	// Vérification jour férié
	if (annee === 2024 && joursFeries.includes(dateStr)) {
		console.log(`Le ${jourStr}/${moisStr}/${annee} est un jour férié`);
		return;
	}

	// Vérification week-end
	const jourSemaine = date.getDay(); // 0 = dimanche, 6 = samedi
	if (jourSemaine === 0 || jourSemaine === 6) {
		console.log(`Non, ${jourStr}/${moisStr}/${annee} est un week-end`);
		return;
	}

	// Sinon, jour travaillé
	console.log(`Oui, ${jourStr}/${moisStr}/${annee} est un jour travaillé`);
}

// Exemple de tests :
jourTravaille(new Date(2024, 0, 1));   // 1er janvier 2024 (jour férié)
jourTravaille(new Date(2024, 4, 1));   // 1er mai 2024 (jour férié)
jourTravaille(new Date(2024, 6, 14));  // 14 juillet 2024 (dimanche, week-end)
jourTravaille(new Date(2024, 3, 2));   // 2 avril 2024 (jour travaillé)