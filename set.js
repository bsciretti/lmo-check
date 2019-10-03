// Il file serve a creare, una tantum, l'apprendimento bayesiano
var bayes = require('bayes')
var request = require('request');
const fs = require('fs');
var lmo = bayes()
milclass(locc);
function milclass(callback) {
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
    download(apiurl,pageid,"MILCLASS"); 
}
    if (i = payload.length) {
    locc(lorunif);
    }
}
function locc(callback) {
//impostazioni LOCC
var data = fs.readFileSync('locc.json', 'utf8');
//console.log(data)
var workon = JSON.parse(data);
var payload = workon.query.pages[122864].transcludedin;
//console.dir(payload);
//caricamento pagine
for (i in payload) { 
    chiama = payload[i].title;
    pageid = payload[i].pageid;
    inietta = chiama.replace(/ /g, "_");
    apiurl = 'https://lmo.wikipedia.org/w/api.php?action=query&prop=extracts&exchars=1200&explaintext&titles='+inietta+'&format=json';
    if (pageid != "56617"){
    download(apiurl,pageid,"LOCC");
}
}
    if (i = payload.length) {
        sl(ludlud);
    }
}
function sl(callback) {
//impostazioni SL
var data = fs.readFileSync('sl.json', 'utf8');
//console.log(data)
var workon = JSON.parse(data);
var payload = workon.query.pages[195448].transcludedin;
//console.dir(payload);
//caricamento pagine
for (i in payload) { 
    chiama = payload[i].title;
    pageid = payload[i].pageid;
    inietta = chiama.replace(/ /g, "_");
    apiurl = 'https://lmo.wikipedia.org/w/api.php?action=query&prop=extracts&exchars=1200&explaintext&titles='+inietta+'&format=json';
    if (pageid != "216505" && pageid != "216506" && pageid != "196093" && pageid != "214398" && pageid != "214062" && pageid != "214064" && pageid != "214314" && pageid != "216530" && pageid != "215845" && pageid != "213280" && pageid != "218755"){
    download(apiurl,pageid,"SL");
}
}
    if (i = payload.length) {
        ludlud(lorunif);
    }
}
function ludlud(callback) {
//impostazioni LUDLUD
var data = fs.readFileSync('ludlud.json', 'utf8');
//console.log(data)
var workon = JSON.parse(data);
var payload = workon.query.pages[130800].transcludedin;
//console.dir(payload);
//caricamento pagine
for (i in payload) { 
    chiama = payload[i].title;
    pageid = payload[i].pageid;
    inietta = chiama.replace(/ /g, "_");
    apiurl = 'https://lmo.wikipedia.org/w/api.php?action=query&prop=extracts&exchars=1200&explaintext&titles='+inietta+'&format=json';
    if (pageid != "56617"){
    download(apiurl,pageid,"LUDLUD");
}
}
    if (i = payload.length) {
        lorunif(genera);
    }
}

function lorunif(callback) {
//impostazioni LORUNIF
var data = fs.readFileSync('lorunif.json', 'utf8');
//console.log(data)
var workon = JSON.parse(data);
var payload = workon.query.pages[159356].transcludedin;
//console.dir(payload);
//caricamento pagine
for (i in payload) { 
    chiama = payload[i].title;
    pageid = payload[i].pageid;
    inietta = chiama.replace(/ /g, "_");
    apiurl = 'https://lmo.wikipedia.org/w/api.php?action=query&prop=extracts&exchars=1200&explaintext&titles='+inietta+'&format=json';
    if (pageid != "136063") {
    download(apiurl,pageid,"LORUNIF"); 
    }
}
    if (i = payload.length) {
        setTimeout(callback, 115000);
    }
}
function download (apiurl,pageid,dialetto) {
    request.get(apiurl, function (error, response, body) {
    if (!error && response.statusCode == 200) {
        let myjson = body;
        //console.log(myjson);
        console.log(pageid);
        console.log(apiurl)
        let learn = JSON.parse(myjson);
        let tolearn = learn.query.pages[pageid].extract;
        console.log(tolearn);
        impara(tolearn,dialetto);
    }
}); 
}

function impara(text, todial) {
    lmo.learn(text,todial);
    console.log("Saved %s",todial);
}

function genera() {
    var exported = lmo.toJson()
    fs.writeFile("learned.json", exported, function(err) {
    if(err) {
        return console.log(err);
        }
        console.log("The file was saved!");


}); 
}


