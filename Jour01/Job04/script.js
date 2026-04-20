// Une année est bissextile si elle est divisible par 4 ET pas par 100, 
// OU si elle est divisible par 400.

function bisextile(annee) {
	return (annee % 400 === 0) || (annee % 4 === 0 && annee % 100 !== 0);
}

// Exemple d'utilisation :
console.log(bisextile(2024)); // true
console.log(bisextile(2100)); // false
