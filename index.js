const Auto = require('./auto');
const fs = require('fs');

const newAuto = new Auto('Cupe 2', 'WV', 30, 4);
console.log(newAuto.getInfo());
console.log(newAuto);
const json = JSON.stringify(newAuto);
fs.writeFileSync('./car.json',
 json);
