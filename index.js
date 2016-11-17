/**
 * Created by Joshua Baert on 11/16/2016.
 */

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');




var app = module.exports = express();


app.set('db', massive.connectSync({
	connectionString: 'postgres://postgres:test123@localhost/test',
}));
var ctrl = require('./ctrl');


app.use(bodyParser.json());
app.use(cors());

app.get('/products/:id', ctrl.readProducts);
app.get('/products', ctrl.readProducts);

app.post('/products', ctrl.createProduct);

app.put('/products', ctrl.updateItem);

app.delete('/products/:id', ctrl.deleteProduct);

app.listen('3000', function () {
	console.log("Successfully listening on : 3000")
});