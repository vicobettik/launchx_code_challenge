const ExplorerController = require('../../lib/controllers/ExplorerController');

describe('Test suite for ExplorerController', () => {
  
    test('1)Get all explorers', () => {
      
        const result = ExplorerController.getAllExplorers();
        expect(result.length).toBe(51);

    })

    test('2) Get explorers with certification', () => {
      
        const result = ExplorerController.getExplorersWithCertification();
        expect(result.length).toBe(29);

    })

    test('2) Get explorers with more than 500 credits', () => {
      
        const result = ExplorerController.getExplorersMoreThan500Credits();
        expect(result.length).toBe(27);

    })
    

})
