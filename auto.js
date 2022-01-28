class Auto {
 constructor(pName, pMarke, pTank, pSitze) {
  this.name = pName;
  this.marke = pMarke;
  this.tank = pTank;
  this.sitze = [];
  for (let i = 0; i < pSitze; i++) {
   this.sitze.push(i+1);
  }
 }
 getInfo() {
  return 'Der '+ this.name+ ' von ' + this.marke + ' hat einen Tank von '+ this.tank+'l und ganze ' + this.getSitzeAnzahl() + ' Sitze.';
 }
 getSitzeAnzahl() {
  return this.sitze.length;
 }
}


module.exports = Auto;