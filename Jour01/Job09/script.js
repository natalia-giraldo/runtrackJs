function tri(numbers, order) {
	if (order === "asc") {
		return numbers.sort((a, b) => a - b);
	} else if (order === "desc") {
		return numbers.sort((a, b) => b - a);
	} else {
		return numbers;
	}
}

console.log(tri([5, 2, 9, 1], "asc"));   // Affiche [1, 2, 5, 9]
console.log(tri([5, 2, 9, 1], "desc"));  // Affiche [9, 5, 2, 1]
console.log(tri([3, 7, 4], "asc"));      // Affiche [3, 4, 7]
console.log(tri([3, 7, 4], "desc"));     // Affiche [7, 4, 3]