const Reader = require('./lib/utils/Reader');
const ExplorerService = require('./lib/services/ExplorerService');

const explorers = Reader.readJsonFile('exploreres.json');
const allExplorers = ExplorerService.allExplorers(explorers);
console.log(allExplorers)