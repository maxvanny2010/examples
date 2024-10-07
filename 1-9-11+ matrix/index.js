let matrix = [];
for (let row = 0; row < 3; row++) {
    const rows = []
    for (let col = 1; col <= 5; col++) {
        rows.push(col);
    }
    matrix.push(rows);
}
console.log(matrix);