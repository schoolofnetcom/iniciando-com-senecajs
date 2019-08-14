const Seneca = require('seneca');
const seneca = Seneca();
const myFirstPlugin = require('./plugin');

seneca
    .use(myFirstPlugin)
    .act({ role: 'PLUGIN', cmd: 'sum', num1: 5, num2: 6 }, function (err, result) {
        console.log(result);
    })






// const seneca = require('seneca')();

// DEFINIMOS ALGO NOVO (FUNCÃO A SER EXECUTADA)
// seneca.add({ role: 'TEST', cmd: 'hello' }, (msg, reply) => {
//     console.log(`ADD: ${JSON.stringify(msg)}` )
//     reply(null, { msg: msg.stringHello });
// });

// EXECUTAMOS A SUA FUNCÃO DEFINIDADE ANTERIORMENTE
// ATRAVES DO PATTERN MATCHING
// seneca.act({ role: 'TEST', cmd: 'hello', stringHello: 'Hello World' }, function(err, result) {
//     if (err) {
//         console.log(`ERROR ${err}`);
//     }
//     console.log(`OBJECT: ${JSON.stringify(result)}`)
//     console.log(`SUCESSS  ${result.msg}`);
// });

