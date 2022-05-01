const Reader = require('./lib/utils/Reader');
const ExplorerService = require('./lib/services/ExplorerService');

const explorers = Reader.readJsonFile('explorers.json');

const allExplorers = ExplorerService.getAllExplorers(explorers);
// console.log(allExplorers)

const explorersMails = ExplorerService.getEmailsExplorersWithCertification(explorers);
console.log(explorersMails);