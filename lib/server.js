const ExplorerController = require('../lib/controllers/ExplorerController');

const express = require('express');
const app = express();

const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'Explorer API',
            description: "Explorer API information"
        },
        contact: {
            name: 'vicuo@hotmail.com'
        },
        servers: ["localhost:3000"]
    },
    apis: ["./lib/server.js"]
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(express.json());
const port = 3000;


/**
 * @swagger
 * /v1/explorers:
 *   get:
 *     description: Get all explorers
 *     responses:
 *       200:
 *         description: Return all explorers
 */
app.get('/v1/explorers', (req, res) => {

    console.log(`Api explorers GET request ${new Date()}`);
    console.log(`All explorers`);
    const result = ExplorerController.getAllExplorers();
    res.status(200).json(result);

});


/**
 * @swagger
 * /v1/explorersCertification:
 *   get:
 *     description: Get emails of explorers who has certification
 *     responses:
 *       200:
 *         description: Return emails of explorers
 */
app.get('/v1/explorersCertification', (req, res) => {

    console.log(`Api explorers GET request ${new Date()}`);
    console.log(`All explorers with certification`);
    const result = ExplorerController.getExplorersWithCertification();
    res.status(200).json(result);

});


/**
 * @swagger
 * /v1/explorers/credits:
 *   get:
 *     description: Get explorers who has more than 500 credits
 *     responses:
 *       200:
 *         description: Return all properties of explorers
 */
app.get('/v1/explorers/credits', (req, res) => {

    console.log(`Api explorers GET request ${new Date()}`);
    console.log(`All explorers with more than 500 credits`);
    const result = ExplorerController.getExplorersMoreThan500Credits();
    res.status(200).json(result);

});

app.listen(port, () => {
    console.log(`App listening in port ${port}`);
});