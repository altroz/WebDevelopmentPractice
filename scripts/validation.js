(function(window){
	"use strict";
	var App = window.App || {};
	var Validation = {
		isCompanyEmal: function(email){
			return /.+@bignerdranch\.com$/.test(email);
		};
	}
})(window);