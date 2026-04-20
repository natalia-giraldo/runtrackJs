function estPremier(n) {
	if (n <= 1) return false;
	for (let i = 2; i <= Math.sqrt(n); i++) {
		if (n % i === 0) return false;
	}
	return true;
}

function sommeNombresPremiers(a, b) {
	if (estPremier(a) && estPremier(b)) {
		return a + b;
	} else {
		return false;
	}
}

console.log(sommeNombresPremiers(8, 3));
console.log(sommeNombresPremiers(3, 5));   // Affiche 8 (car 3 et 5 sont premiers)
console.log(sommeNombresPremiers(4, 7));   // Affiche false (car 4 n'est pas premier)
console.log(sommeNombresPremiers(11, 13)); // Affiche 24 (car 11 et 13 sont premiers)
console.log(sommeNombresPremiers(6, 9));   // Affiche false (aucun n'est premier)