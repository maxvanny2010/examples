const path = require('path');

console.log(path.dirname(__dirname));
console.log(path.basename(__filename));
console.log(path.extname(__filename).slice(1));
/* name with path */
console.log(path.parse(__filename));
/*to find file */
console.log(path.resolve(__dirname, '..', './modules', './app.js'));
/* concat path */
console.log(path.join(__dirname, '..', './modules', './app.js'));