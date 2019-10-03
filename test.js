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
console.log(lmo.categorize("L'è famus parchè l'ha scrit el Sermon, un puema d'intunassion pupular in de la lengua che la se parleva ind a l'età de mes in Lumbardia. L'opera l'è faia de pressapoch 2500 vers (lissandrin e nuenari), e l'è divisa in tri part: la creassion dal mund, la storia dal Crist e'l giüdìssi üniversàl. "))
console.log(lmo.categorize("I jent lombarde viveven in la zona de Bergem jamò dei temps de la dominazion del Federig Barbarossa"))
})

