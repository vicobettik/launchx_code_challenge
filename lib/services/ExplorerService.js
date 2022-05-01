class ExplorerService{
    
    static getAllExplorers(explorers){

        return explorers;

    }

    static getEmailsExplorersWithCertification(explorers){

        return explorers.filter( (explorer) => explorer.haveCertification == true)
                        .map( (explorer) => explorer.email);

    }

    static getExplorersWithCreditsGreaterThan500(explorers){

        return explorers.filter( (explorer) => explorer.credits > 500);

    }

};

module.exports = ExplorerService;