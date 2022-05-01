class ExplorerService{
    
    static getAllExplorers(explorers){

        return explorers;

    }

    static getEmailsExplorersWithCertification(explorers){

        return explorers.map( (explorer) => {
            return explorer.email;
        });

    }

};

module.exports = ExplorerService;