const { app } = require('@azure/functions');
const { foo } = require("../modules/esm.mjs");

app.http('httpTrigger1', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log(`Http function processed request for url "${request.url}"`);
        return { body: foo() };
    }
});
