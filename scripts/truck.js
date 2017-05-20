(function(window){
	"use strict";
	var App = window.App || {};

	function Truck(truckId, db){
		this.truckId = truckId;
		this.db = db;
	}

	Truck.prototype.createOrder = function(order){
		console.log("preparing order for the customer " + order.email);
		this.db.add(order.email, order);
	};

	Truck.prototype.deliverOrder = function(customerId){
		console.log("delivering order for the customer "+ customerId);
		this.db.remove(customerId);
	};

	Truck.prototype.printOrders = function () {
		var customerArray = Object.keys(this.db.getAll());
		console.log("printing order for the customer from the truckId "+ this.truckId);
		customerArray.forEach(function(id){
			console.log(this.db.get(id));
		}.bind(this));
	};

	App.Truck = Truck;
	window.App = App;
})(window);