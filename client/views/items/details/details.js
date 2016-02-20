var pageSession = new ReactiveDict();

Template.ItemsDetails.rendered = function() {
	
};

Template.ItemsDetails.events({
	
});

Template.ItemsDetails.helpers({
	
});

Template.ItemsDetailsDetailsForm.rendered = function() {
	

	pageSession.set("itemsDetailsDetailsFormInfoMessage", "");
	pageSession.set("itemsDetailsDetailsFormErrorMessage", "");

	$(".input-group.date").each(function() {
		var format = $(this).find("input[type='text']").attr("data-format");

		if(format) {
			format = format.toLowerCase();
		}
		else {
			format = "mm/dd/yyyy";
		}

		$(this).datepicker({
			autoclose: true,
			todayHighlight: true,
			todayBtn: true,
			forceParse: false,
			keyboardNavigation: false,
			format: format
		});
	});

	$("input[type='file']").fileinput();
	$("select[data-role='tagsinput']").tagsinput();
	$(".bootstrap-tagsinput").addClass("form-control");
	$("input[autofocus]").focus();
};

Template.ItemsDetailsDetailsForm.events({
	"submit": function(e, t) {
		e.preventDefault();
		pageSession.set("itemsDetailsDetailsFormInfoMessage", "");
		pageSession.set("itemsDetailsDetailsFormErrorMessage", "");

		var self = this;

		function submitAction(msg) {
			var itemsDetailsDetailsFormMode = "read_only";
			if(!t.find("#form-cancel-button")) {
				switch(itemsDetailsDetailsFormMode) {
					case "insert": {
						$(e.target)[0].reset();
					}; break;

					case "update": {
						var message = msg || "Saved.";
						pageSession.set("itemsDetailsDetailsFormInfoMessage", message);
					}; break;
				}
			}

			/*SUBMIT_REDIRECT*/
		}

		function errorAction(msg) {
			msg = msg || "";
			var message = msg.message || msg || "Error.";
			pageSession.set("itemsDetailsDetailsFormErrorMessage", message);
		}

		validateForm(
			$(e.target),
			function(fieldName, fieldValue) {

			},
			function(msg) {

			},
			function(values) {
				

				
			}
		);

		return false;
	},
	"click #form-cancel-button": function(e, t) {
		e.preventDefault();

		

		/*CANCEL_REDIRECT*/
	},
	"click #form-close-button": function(e, t) {
		e.preventDefault();

		Router.go("items", {});
	},
	"click #form-back-button": function(e, t) {
		e.preventDefault();

		Router.go("items", {});
	}

	
});

Template.ItemsDetailsDetailsForm.helpers({
	"infoMessage": function() {
		return pageSession.get("itemsDetailsDetailsFormInfoMessage");
	},
	"errorMessage": function() {
		return pageSession.get("itemsDetailsDetailsFormErrorMessage");
	}
	
});
