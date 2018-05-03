const Controllers = require('../controllers');

module.exports = (app) => {
    app.post('/user', Controllers.User.createUser);
    app.get('/user/:id', Controllers.User.retrieveUser);
    app.post('/word', Controllers.Word.createWord);
    app.get('/word/:id', Controllers.Word.retrieveWord);
}
