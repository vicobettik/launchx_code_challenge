const ExplorerController = require('../lib/controllers/ExplorerController');

const express = require('express');
const app = express();
app.use(express.json());
const port = 3000;

app.get('/v1/explorers', (req, res) => {

    console.log(`Api explorers GET request ${new Date()}`);
    console.log(`All explorers`);
    const result = ExplorerController.getAllExplorers();
    res.status(200).json(result);

});

app.get('/v1/explorersCertification', (req, res) => {

    console.log(`Api explorers GET request ${new Date()}`);
    console.log(`All explorers with certification`);
    const result = ExplorerController.getExplorersWithCertification();
    res.status(200).json(result);

});

app.get('/v1/explorers/credits', (req, res) => {

    console.log(`Api explorers GET request ${new Date()}`);
    console.log(`All explorers with more than 500 credits`);
    const result = ExplorerController.getExplorersMoreThan500Credits();
    res.status(200).json(result);

});

app.listen(port, () => {
    console.log(`App listening in port ${port}`);
});