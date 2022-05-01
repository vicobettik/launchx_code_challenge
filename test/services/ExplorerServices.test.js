const ExplorerService = require('../../lib/services/ExplorerService');
const Reader = require('../../lib/utils/Reader');

describe('Test for ExplorerService', () => {
  
    test('1) Return all explorers with all properties', () => {

        const explorers = Reader.readJsonFile('explorerTest.json');
        const allExplorers = ExplorerService.getAllExplorers(explorers);
        expect(allExplorers.length).not.toBe(0);


    })

    test('2) return all mail of explorers who has certification', () => {
      
        const explorers = Reader.readJsonFile('explorerTest.json');
        const mailOfExplorersWithCertification = ExplorerService.getEmailsExplorersWithCertification(explorers);
        expect(mailOfExplorersWithCertification.length).toBe(1);

    })
    
    test('3) return all explorers who has credits greater than 500', () => {
      
        const explorers = Reader.readJsonFile('explorerTest.json');
        const mailOfExplorersWithCertification = ExplorerService.getExplorersWithCreditsGreaterThan500(explorers);
        expect(mailOfExplorersWithCertification.length).toBe(1);

    })

})
