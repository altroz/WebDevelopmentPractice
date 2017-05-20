(function(window){
	'use strict';
	var App = window.App || {};
	var $ = window.jQuery;

	function CheckList(selector){
		if(!selector){
			throw new Error("No selector provided");
		}
		this.$element = $(selector);
		if(this.$element.length === 0){
			throw new Error("No match found ! "+ selector);
		}
	}

	function Row(coffeeOrder){
		var $div = $('<div></div>', {'data-coffee-order': 'checkbox', 'class':'checkbox'});
		var $label = $('<label></label>');
		var $checkbox = $('<input></input>', {type: 'checkbox', value : coffeeOrder.email});
		var description = coffeeOrder.size + ' ';
		if(coffeeOrder.flavor){
		description += coffeeOrder.flavor + ' ';}
		description += coffeeOrder.coffee + ' ';
		description += coffeeOrder.email + ' ';
		description += coffeeOrder.strength + ' ';

		$label.append($checkbox);
		$label.append(description);
		$div.append($label);

		this.$element = $div;
	}

	CheckList.prototype.addRow = function(coffeeOrder){
		this.$element.removeRow(coffeeOrder.email);
		var rowElement = new Row(coffeeOrder);
		this.$element.append(rowElement.$element);
	};

	CheckList.prototype.removeRow = function(email){
		this.$element
		.find('[value = '+ email + ' ]')
		.closest('[data-coffee-order = "checkbox"]')
		.remove();
	};

	CheckList.prototype.addClickHandler = function(fn){
		this.$element.on('click', 'input', function(event){
			var email = event.target.value;
			this.$element.removeRow(email);
			fn(email);
		}.bind(this));
	};

	App.CheckList = CheckList;
	window.App = App;
})(window);