CONFIG = {};

CONFIG.app = process.env.APP   || 'development';
CONFIG.port = process.env.PORT  || '4000';

CONFIG.mongoURI = 'mongodb://tbennett:Tben0213@ds111430.mlab.com:11430/richmond-inventory';

CONFIG.session = {
    secret: 'whenihavetime',
    name: 'sessionId'
}