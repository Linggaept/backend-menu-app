const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Menu API',
      version: '1.0.0',
      description: 'A simple Express Menu API',
    },
    servers: [
      {
        url: 'http://localhost:5055',
      },
    ],
  },
  apis: ['./routes/*.js'],
};

const specs = swaggerJsdoc(options);

module.exports = specs;
