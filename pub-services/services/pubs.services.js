var listeBars = require('../mocks/pubs.json');

var moment=require('moment');
moment();
var now = moment();

function listerBars() {
  console.log("Voici la liste de tous les bars actifs :");
  var compteur;
  for (compteur=0; compteur<listeBars.length; compteur++) {
    console.log(listeBars[compteur].name);
  }
}

function barsOuverts() {
  console.log("Voici la liste des bars actuellement ouverts :")
  var compteur;
  var compteurjours;
  var jour = moment().format("dddd");
  for (compteur=0; compteur<listeBars.length; compteur++) {
    var listeJours = listeBars[compteur].openDays;
    var jourtrouve = false;
    for (compteurjours=0; compteurjours<listeJours.length; compteurjours++) {
      if (listeJours[compteurjours] == jour) {
        console.log("Le bar " + listeBars[compteur].name + " est bien ouvert aujourd'hui");
      }
    }
  }
}

module.exports = {
  listerBars: listerBars,
  barsOuverts: barsOuverts
}
