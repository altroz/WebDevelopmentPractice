(function(window){
	'use strict';
	var FORM_SELECTOR = '[data-coffee-order = "form"]';
	var CHECKLIST_SELECTOR = '[data-coffee-order = "checklist"]';

	var App = window.App;
	var Truck = App.Truck;
	var DataStore = App.DataStore;
	var FormHandler = App.FormHandler;
	var Validation =  App.Validation;
	var CheckList = App.CheckList;
	

	var myTruck =new Truck('taco-truck07', new DataStore());
	window.myTruck = myTruck;

	var formHandler = new FormHandler(FORM_SELECTOR);
	// formHandler.addSubmitHandler(myTruck.createOrder.bind(myTruck));
	var checkList = new CheckList(CHECKLIST_SELECTOR);
	formHandler.addSubmitHandler(function(data){
		myTruck.createOrder.call(myTruck, data);
		checkList.addRow.call(checkList, data);
	});

	checkList.addClickHandler(myTruck.deliverOrder.bind(myTruck));
	console.log(formHandler);
	
	formHandler.addInputHandler(Validation.isCompanyEmail);
})(window);