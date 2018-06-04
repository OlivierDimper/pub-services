var pubs = require('./services/pubs.services')

pubs.listerBars();

pubs.barsOuverts();

module.exports = {
  services: {
    pubService: pubs
  }
};
