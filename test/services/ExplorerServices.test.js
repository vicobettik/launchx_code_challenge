const ExplorerService = require('../../lib/services/ExplorerService');

describe('Test for ExplorerService', () => {
  
    test('1) Return all explorers with all properties', () => {
      
        const explorers = [
            {
                name: "explorer1",
                prop1: "prop1"
            },
            {
                name: "explorer2",
                prop2: "prop2"
            }
        ];

        const allExplorers = ExplorerService.getAllExplorers(explorers);
        expect(allExplorers.length).not.toBe(0)


    })
    

})
