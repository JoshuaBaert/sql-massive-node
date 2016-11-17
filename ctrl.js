/**
 * Created by Joshua Baert on 11/16/2016.
 */
var app = require('./index');

var db = app.get('db');

module.exports = {
	createProduct: function (req, res, next) {
		var body = req.body;
		db.createProduct([body.name, body.description, body.price, body.imageUrl], function (err, products) {
			if(err) {
				res.status(500).json(err)
			} else {
				res.sendStatus(200)
			}
		})
	},
	
	
	readProducts: function (req, res, next) {
		var params = req.params;
		if (params.id) {
			db.readProduct([params.id], function (err, products) {
				if(err) {
					res.status(500).json(err)
				} else {
					res.status(200).json(products)
				}
			})
		} else {
			db.read_products(function (err, products) {
				if (err) {
					res.status(500).json(err)
				} else {
					res.json(products)
				}
			})
		}
	},
	
	
	updateItem: function (req, res, next) {
		console.log('hit update');
		var body = req.body;
		db.updateProduct([body.id,body.description], function (err, product) {
			if (err) {
				res.status(500).json(err)
			} else {
				res.sendStatus(200)
			}
		})
	},
	
	
	deleteProduct: function (req, res, next) {
		var params = req.params;
		db.deleteProduct([params.id], function (err, product) {
			if (err) {
				res.status(500).json(err)
			} else {
				res.sendStatus(200)
			}
		})
	},
	
};



/*
{
 "name" : "sooper cool shirt",
 "description" : "way cool product",
 "price" : "6.99",
 "imageUrl": "http://fakeurl.fake/imgfakey.jpg"
}

*/