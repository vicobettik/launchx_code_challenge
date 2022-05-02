const Reader = require('../utils/Reader');
const ExplorerService = require('../services/ExplorerService');


class ExplorerController{

    static getAllExplorers(){

        const data = Reader.readJsonFile('explorers.json');
        return ExplorerService.getAllExplorers(data);

    }

    static getExplorersWithCertification(){
        
        const data = Reader.readJsonFile('explorers.json');
        return ExplorerService.getEmailsExplorersWithCertification(data);
        
    }

    static getExplorersMoreThan500Credits(){
        
        const data = Reader.readJsonFile('explorers.json');
        return ExplorerService.getExplorersWithCreditsGreaterThan500(data);
        
    }

}

module.exports = ExplorerController;