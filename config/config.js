CONFIG = {};

CONFIG.app = process.env.APP   || 'development';
CONFIG.port = process.env.PORT  || '4000';

CONFIG.session = {
    secret: 'whenihavetime',
    name: 'sessionId'
};