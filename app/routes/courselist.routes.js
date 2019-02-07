module.exports = function (app) {
    var courselist = require('../controllers/courselist.controllers');
    
    //Retrieve all CourseLists
    app.get('/api/courselists', courselist.findAll) 

    // Retrieve a single search
    app.get('/api/courselists/search/?', courselist.serach);

    // Retrieve a single CourseLists by Id
    app.get('/api/courselists/:courselistId', courselist.findOne);
}