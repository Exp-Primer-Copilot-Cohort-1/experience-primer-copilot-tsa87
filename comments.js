// Create web server application 

// Import express module
var express = require('express');

// Import body-parser module
var bodyParser = require('body-parser');

// Create application
var app = express();

// Set port
app.set('port', process.env.PORT || 3000);

// Set view engine
app.set('view engine', 'ejs');

// Set views folder
app.set('views', './views');

// Set static folder
app.use(express.static('./public'));

// Use body-parser middleware
app.use(bodyParser.urlencoded({extended: false}));

// Array comments
var comments = [
    'First comment',
    'Second comment',
    'Third comment'
];

// Get homepage
app.get('/', function(req, res) {
    res.render('home', {
        comments: comments
    });
});

// Get add comment
app.get('/add', function(req, res) {
    res.render('add');
});

// Post add comment
app.post('/add', function(req, res) {
    comments.push(req.body.comment);
    res.redirect('/');
});

// Listen port
app.listen(app.get('port'), function() {
    console.log('Server is running on port ' + app.get('port'));
});
