var express = require('express');
var router = express.Router();
var pg = require('pg');
var conString = process.env.DATABASE_URL || "postgres://@localhost/trinity_services";

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
        var query = client.query("SELECT * FROM clients ORDER BY client_id ASC;");
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
    var data = {firstName: req.body.firstName, lastName: req.body.lastName, gender: req.body.gender};
    
    console.log(data.firstName.$viewValue);
    console.log(data.lastName.$viewValue);
    console.log(data.lastName.$viewValue);
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
        client.query("INSERT INTO clients(firstname, lastname) values($1, $2)", [data.firstName.$viewValue, data.lastName.$viewValue]);
        // SQL Query > Select Data
        var query = client.query("SELECT * FROM clients ORDER BY client_id ASC");
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
    var client_id = req.params.client_id;
    // Get a Postgres client from the connection pool
    pg.connect(conString, function(err, client, done) {
        // Handle connection errors
        if(err) {
          done();
          console.log(err);
          return res.status(500).json({ success: false, data: err});
        }
        // SQL Query > Select Data
        var query = client.query("SELECT * FROM clients WHERE client_id=($1)", [client_id]);
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
    var client_id = req.params.client_id;
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
        client.query("UPDATE clients SET firstName=($1), lastName=($2) WHERE client_id=($3)", [data.firstName.$viewValue, data.lastName.$viewValue, client_id]);
        // SQL Query > Select Data
        var query = client.query("SELECT * FROM clients ORDER BY client_id ASC");
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
    var client_id = req.params.client_id;
    // Get a Postgres client from the connection pool
    pg.connect(conString, function(err, client, done) {
        // Handle connection errors
        if(err) {
          done();
          console.log(err);
          return res.status(500).json({ success: false, data: err});
        }
        // SQL Query > Delete Data
        client.query("DELETE FROM clients WHERE client_id=($1)", [client_id]);
        // SQL Query > Select Data
        var query = client.query("SELECT * FROM clients ORDER BY client_id ASC");
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

// DEPARTMENTS
router.get('/api/v1/departments', function(req, res) {
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
        var query = client.query("SELECT * FROM departments ORDER BY department_id ASC;");
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

router.post('/api/v1/departments', function(req, res) {
    var results = [];
    // Grab data from http request
    var data = {name: req.body.name};
    // Get a Postgres client from the connection pool
    pg.connect(conString, function(err, client, done) {
        // Handle connection errors
        if(err) {
          done();
          console.log(err);
          return res.status(500).json({ success: false, data: err});
        }
        // SQL Query > Insert Data
        client.query("INSERT INTO departments(name) values($1)", [data.name.$viewValue]);
        // SQL Query > Select Data
        var query = client.query("SELECT * FROM departments ORDER BY department_id ASC");
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

router.get('/api/v1/departments/:department_id', function(req, res) {
    var results = [];
    var department_id = req.params.department_id;
    // Get a Postgres client from the connection pool
    pg.connect(conString, function(err, client, done) {
        // Handle connection errors
        if(err) {
          done();
          console.log(err);
          return res.status(500).json({ success: false, data: err});
        }
        // SQL Query > Select Data
        var query = client.query("SELECT * FROM departments WHERE department_id=($1)", [department_id]);
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

router.put('/api/v1/departments/:department_id', function(req, res) {
    var results = [];
    // Grab data from the URL parameters
    var department_id = req.params.department_id;
    // Grab data from http request
    var data = {name: req.body.name};
    // Get a Postgres client from the connection pool
    pg.connect(conString, function(err, client, done) {
        // Handle connection errors
        if(err) {
          done();
          console.log(err);
          return res.status(500).send(json({ success: false, data: err}));
        }
        // SQL Query > Update Data
        client.query("UPDATE departments SET name=($1) WHERE department_id=($2)", [data.name.$viewValue, department_id]);
        // SQL Query > Select Data
        var query = client.query("SELECT * FROM departments ORDER BY department_id ASC");
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

router.delete('/api/v1/departments/:department_id', function(req, res) {
    var results = [];
    // Grab data from the URL parameters
    var department_id = req.params.department_id;
    // Get a Postgres client from the connection pool
    pg.connect(conString, function(err, client, done) {
        // Handle connection errors
        if(err) {
          done();
          console.log(err);
          return res.status(500).json({ success: false, data: err});
        }
        // SQL Query > Delete Data
        client.query("DELETE FROM departments WHERE department_id=($1)", [department_id]);
        // SQL Query > Select Data
        var query = client.query("SELECT * FROM departments ORDER BY department_id ASC");
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

// CLIENT_OBSERVATION LOGS

router.get('/api/v1/clients/:client_id/observations/all', function(req, res) {
    var results = [];
    var client_id = req.params.client_id;
    // Get a Postgres client from the connection pool
    pg.connect(conString, function(err, client, done) {
        // Handle connection errors
        if(err) {
          done();
          console.log(err);
          return res.status(500).json({ success: false, data: err});
        }
        // SQL Query > Select Data
        var query = client.query("SELECT * FROM client_observations WHERE client_id=($1)", [client_id]);

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
        var query = client.query("SELECT * FROM users ORDER BY user_id ASC;");
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
        var query = client.query("SELECT * FROM users ORDER BY user_id ASC");
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
    var user_id = req.params.user_id;
    // Get a Postgres client from the connection pool
    pg.connect(conString, function(err, client, done) {
        // Handle connection errors
        if(err) {
          done();
          console.log(err);
          return res.status(500).json({ success: false, data: err});
        }
        // SQL Query > Select Data
        var query = client.query("SELECT * FROM users WHERE user_id=($1)", [user_id]);
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
    var user_id = req.params.user_id;
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
        client.query("UPDATE users SET firstName=($1), lastName=($2) WHERE user_id=($3)", [data.firstName.$viewValue, data.lastName.$viewValue, user_id]);
        // SQL Query > Select Data
        var query = client.query("SELECT * FROM users ORDER BY user_id ASC");
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
    var user_id = req.params.user_id;
    // Get a Postgres client from the connection pool
    pg.connect(conString, function(err, client, done) {
        // Handle connection errors
        if(err) {
          done();
          console.log(err);
          return res.status(500).json({ success: false, data: err});
        }
        // SQL Query > Delete Data
        client.query("DELETE FROM users WHERE user_id=($1)", [user_id]);
        // SQL Query > Select Data
        var query = client.query("SELECT * FROM users ORDER BY user_id ASC");
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
