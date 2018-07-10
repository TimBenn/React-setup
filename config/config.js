CONFIG = {};

CONFIG.port = process.env.PORT  || '3000';
CONFIG.serverPort = process.env.PORT  || '4000';

CONFIG.session = {
    secret: 'setup',
    name: 'sessionId'
}