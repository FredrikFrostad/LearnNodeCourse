const mongoose = require('mongoose');
const Store = mongoose.model('Store');

exports.homePage = (req, res) => {
	console.log(req.name);
	res.render('index');
};


exports.addStore = (req, res) => {
	res.render('editStore', {title: 'Add Store'});
};

 
exports.createStore = async (req, res) => {
	const store = new Store(req.body);
	await store.save();
	req.flash('succes', `Successfully Created ${store.name}. Care to leave a rewiev?`);
	res.redirect('/');
};

exports.getStores = async (req, res) => {
	// 1. Query the database
	const stores = await Store.find();
	console.log(stores);
	res.render('stores', {title: 'Stores', stores });
};
