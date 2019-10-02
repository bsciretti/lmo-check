// Il file serve a creare, una tantum, l'apprendimento bayesiano
var bayes = require('bayes')
var request = require('request');
const fs = require('fs');
var lmo = bayes()

//impostazioni MILCLASS
var data = fs.readFileSync('milclass.json', 'utf8');
//console.log(data)
var workon = JSON.parse(data);
var payload = workon.query.pages[2983].transcludedin;
//console.dir(payload);
//caricamento pagine
for (i in payload) { 
    chiama = payload[i].title;
    pageid = payload[i].pageid;
    inietta = chiama.replace(/ /g, "_");
    apiurl = 'https://lmo.wikipedia.org/w/api.php?action=query&prop=extracts&exchars=1200&explaintext&titles='+inietta+'&format=json';
    console.log(apiurl);
    request.get(apiurl, function (error, response, body) {
    if (!error && response.statusCode == 200) {
        var myjson = body;
        //console.log(myjson);
        console.log(pageid);
        console.log(apiurl)
        console.log(inietta)
        var learn = JSON.parse(myjson);
        var tolearn = learn.query.pages[pageid];
        console.log(tolearn);
    }
}); 
}
function learn (title, todial) {
    lmo.learn(titolo,todial);
    console.log("Saved %s in %s",title,todial);
}

/*console.log(lmo.categorize("I jent lombarde viveven vexin a Roma"))

var exported = lmo.toJson()

fs.writeFile("learned.json", exported, function(err) {

    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
}); 

 */
