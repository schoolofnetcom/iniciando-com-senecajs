const Seneca = require('seneca');
const seneca = Seneca();

seneca.add({ role: 'ACT', cmd: 'ping' }, (msg, reply) => {
    reply(null, { msg: 'PONG' });
});

seneca.listen({ type: 'http', port: 9000 });