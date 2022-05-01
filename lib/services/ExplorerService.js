class ExplorerService{
    
    static getAllExplorers(explorers){

        return explorers;

    }

    static getEmailsExplorersWithCertification(explorers){

        return explorers.filter( (explorer) => explorer.haveCertification == true)
                        .map( (explorer) => explorer.email);

    }

};

module.exports = ExplorerService;