Template.HomePublic.rendered = function() {
	
};

Template.HomePublic.events({
	
});

Template.HomePublic.helpers({
	"click #": function(e, t) {
		e.preventDefault();
		Router.go("terms_of_use", {});
	}
});
