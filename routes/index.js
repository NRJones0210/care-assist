var express = require('express');
var router = express.Router();
var pg = require('pg');
var conString = "postgres://@localhost/trinity_services";

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// CLIENTS
router.get('/api/v1/clients', function(req, res) {
    var results = [];
    // Get a Postgres client from the connection pool
    pg.connect(conString, function(err, client, done) {
        // Handle connection errors
        if(err) {
          done();
          console.log(err);
          return res.status(500).json({ success: false, data: err});
        }
        // SQL Query > Select Data
        var query = client.query("SELECT * FROM clients ORDER BY id ASC;");
        // Stream results back one row at a time
        query.on('row', function(row) {
            results.push(row);
        });
        // After all data is returned, close connection and return results
        query.on('end', function() {
            done();
            return res.json(results);
        });
    });
});

router.post('/api/v1/clients', function(req, res) {
    var results = [];
    // Grab data from http request
    var data = {firstName: req.body.firstName, lastName: req.body.lastName};
    
    console.log(data.firstName.$viewValue);
    // // Is this the best way to get the data using $viewValue?
    
    // Get a Postgres client from the connection pool
    pg.connect(conString, function(err, client, done) {
        // Handle connection errors
        if(err) {
          done();
          console.log(err);
          return res.status(500).json({ success: false, data: err});
        }
        // SQL Query > Insert Data
        client.query("INSERT INTO clients(firstName, lastName) values($1, $2)", [data.firstName.$viewValue, data.lastName.$viewValue]);
        // SQL Query > Select Data
        var query = client.query("SELECT * FROM clients ORDER BY id ASC");
        // Stream results back one row at a time
        query.on('row', function(row) {
            results.push(row);
        });
        // After all data is returned, close connection and return results
        query.on('end', function() {
            done();
            return res.json(results);
        });
    });
});


router.get('/api/v1/clients/:client_id', function(req, res) {
    var results = [];
    var id = req.params.client_id;
    // Get a Postgres client from the connection pool
    pg.connect(conString, function(err, client, done) {
        // Handle connection errors
        if(err) {
          done();
          console.log(err);
          return res.status(500).json({ success: false, data: err});
        }
        // SQL Query > Select Data
        var query = client.query("SELECT * FROM clients WHERE id=($1)", [id]);
        // Stream results back one row at a time
        query.on('row', function(row) {
            results.push(row);
        });
        // After all data is returned, close connection and return results
        query.on('end', function() {
            done();
            return res.json(results);
        });
    });
});


router.put('/api/v1/clients/:client_id', function(req, res) {
    var results = [];
    // Grab data from the URL parameters
    var id = req.params.client_id;
    // Grab data from http request
    var data = {firstName: req.body.firstName, lastName: req.body.lastName};
    // Get a Postgres client from the connection pool
    pg.connect(conString, function(err, client, done) {
        // Handle connection errors
        if(err) {
          done();
          console.log(err);
          return res.status(500).send(json({ success: false, data: err}));
        }
        // SQL Query > Update Data
        client.query("UPDATE clients SET firstName=($1), lastName=($2) WHERE id=($3)", [data.firstName.$viewValue, data.lastName.$viewValue, id]);
        // SQL Query > Select Data
        var query = client.query("SELECT * FROM clients ORDER BY id ASC");
        // Stream results back one row at a time
        query.on('row', function(row) {
            results.push(row);
        });
        // After all data is returned, close connection and return results
        query.on('end', function() {
            done();
            return res.json(results);
        });
    });
});

router.delete('/api/v1/clients/:client_id', function(req, res) {
    var results = [];
    // Grab data from the URL parameters
    var id = req.params.client_id;
    // Get a Postgres client from the connection pool
    pg.connect(conString, function(err, client, done) {
        // Handle connection errors
        if(err) {
          done();
          console.log(err);
          return res.status(500).json({ success: false, data: err});
        }
        // SQL Query > Delete Data
        client.query("DELETE FROM clients WHERE id=($1)", [id]);
        // SQL Query > Select Data
        var query = client.query("SELECT * FROM clients ORDER BY id ASC");
        // Stream results back one row at a time
        query.on('row', function(row) {
            results.push(row);
        });
        // After all data is returned, close connection and return results
        query.on('end', function() {
            done();
            return res.json(results);
        });
    });
});

// USERS
router.get('/api/v1/users', function(req, res) {
    var results = [];
    // Get a Postgres client from the connection pool
    pg.connect(conString, function(err, client, done) {
        // Handle connection errors
        if(err) {
          done();
          console.log(err);
          return res.status(500).json({ success: false, data: err});
        }
        // SQL Query > Select Data
        var query = client.query("SELECT * FROM users ORDER BY id ASC;");
        // Stream results back one row at a time
        query.on('row', function(row) {
            results.push(row);
        });
        // After all data is returned, close connection and return results
        query.on('end', function() {
            done();
            return res.json(results);
        });
    });
});

router.post('/api/v1/users', function(req, res) {
    var results = [];
    // Grab data from http request
    var data = {firstName: req.body.firstName, lastName: req.body.lastName};
    
    console.log(data.firstName.$viewValue);
    // // Is this the best way to get the data using $viewValue?
    
    // Get a Postgres client from the connection pool
    pg.connect(conString, function(err, client, done) {
        // Handle connection errors
        if(err) {
          done();
          console.log(err);
          return res.status(500).json({ success: false, data: err});
        }
        // SQL Query > Insert Data
        client.query("INSERT INTO users(firstName, lastName) values($1, $2)", [data.firstName.$viewValue, data.lastName.$viewValue]);
        // SQL Query > Select Data
        var query = client.query("SELECT * FROM users ORDER BY id ASC");
        // Stream results back one row at a time
        query.on('row', function(row) {
            results.push(row);
        });
        // After all data is returned, close connection and return results
        query.on('end', function() {
            done();
            return res.json(results);
        });
    });
});

router.get('/api/v1/users/:user_id', function(req, res) {
    var results = [];
    var id = req.params.user_id;
    // Get a Postgres client from the connection pool
    pg.connect(conString, function(err, client, done) {
        // Handle connection errors
        if(err) {
          done();
          console.log(err);
          return res.status(500).json({ success: false, data: err});
        }
        // SQL Query > Select Data
        var query = client.query("SELECT * FROM users WHERE id=($1)", [id]);
        // Stream results back one row at a time
        query.on('row', function(row) {
            results.push(row);
        });
        // After all data is returned, close connection and return results
        query.on('end', function() {
            done();
            return res.json(results);
        });
    });
});

router.put('/api/v1/users/:user_id', function(req, res) {
    var results = [];
    // Grab data from the URL parameters
    var id = req.params.user_id;
    // Grab data from http request
    var data = {firstName: req.body.firstName, lastName: req.body.lastName};
    // Get a Postgres client from the connection pool
    pg.connect(conString, function(err, client, done) {
        // Handle connection errors
        if(err) {
          done();
          console.log(err);
          return res.status(500).send(json({ success: false, data: err}));
        }
        // SQL Query > Update Data
        client.query("UPDATE users SET firstName=($1), lastName=($2) WHERE id=($3)", [data.firstName.$viewValue, data.lastName.$viewValue, id]);
        // SQL Query > Select Data
        var query = client.query("SELECT * FROM users ORDER BY id ASC");
        // Stream results back one row at a time
        query.on('row', function(row) {
            results.push(row);
        });
        // After all data is returned, close connection and return results
        query.on('end', function() {
            done();
            return res.json(results);
        });
    });
});

router.delete('/api/v1/users/:user_id', function(req, res) {
    var results = [];
    // Grab data from the URL parameters
    var id = req.params.user_id;
    // Get a Postgres client from the connection pool
    pg.connect(conString, function(err, client, done) {
        // Handle connection errors
        if(err) {
          done();
          console.log(err);
          return res.status(500).json({ success: false, data: err});
        }
        // SQL Query > Delete Data
        client.query("DELETE FROM users WHERE id=($1)", [id]);
        // SQL Query > Select Data
        var query = client.query("SELECT * FROM users ORDER BY id ASC");
        // Stream results back one row at a time
        query.on('row', function(row) {
            results.push(row);
        });
        // After all data is returned, close connection and return results
        query.on('end', function() {
            done();
            return res.json(results);
        });
    });
});

router.get('*', function(req, res, next) {
  res.sendFile('index.html', {
    root: __dirname + '/../public/'
  });
});

module.exports = router;
