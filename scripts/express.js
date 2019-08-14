const seneca = require('seneca')();
const express = require('express')();
const web = require('seneca-web');
const routes = require('./express-router');

seneca
    .client()
    .use(web, {
        routes: routes,
        adapter: require('seneca-web-adapter-express'),
        context: express
     })
    .ready(() => {
        const server = seneca.export('web/context')();
        server.listen(9000, () => console.log('Seneca WebServer has been started http://localhost:9000'));
    });


seneca.add({ role: 'test', action: 'mult' }, function(msg, reply) {

    reply(null, { result: msg.args.query.num1 * msg.args.query.num2 });
});