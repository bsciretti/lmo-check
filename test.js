var bayes = require('bayes')
const fs = require('fs');
fs.readFile('learned.json', (err, data) => {
  if (err) {
    console.error(err)
    return
  }
var lmo = bayes.fromJson(data)
console.log(lmo.categorize("El Popol milanes l'eva casciaa via i todesch in la gloriosa battaja de Legnan del 29 de magg del 1176"))
console.log(lmo.categorize("Ambrös a l'era el sant el püssee impurtant de la storia milanesa insèma a la surela e al fredèl"))
console.log(lmo.categorize("Bèrghem l'ha fat la guera coi bresà e la vincìt"))
console.log(lmo.categorize("El ludesàn l'è classificàd tra le lengue galo-itàliche. I popul galich prelatìn ind el teritori d'la pruincia, la culunisassión rumana e le duminassión tugnine, spagnöle e francés i han determinàd l'evolüssión e la caraterisassión d'la parlada ludesana"))
console.log(lmo.categorize("I jent lombarde viveven in la zona de Bergem jamò dei temps de la dominazion del Federig Barbarossa"))
})

