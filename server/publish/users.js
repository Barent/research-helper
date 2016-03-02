Meteor.publish("users", function() {
	if(Users.isInRoles( ["admin"])) {
		return Meteor.users.find({}, {});
	}
	return Meteor.users.find({}, {});
});

Meteor.publish("users_empty", function() {
	if(Users.isInRoles(["admin"])) {
		return Meteor.users.find({_id:null}, {});
	}
	return Meteor.users.find({_id:null}, {});
});

Meteor.publish("user", function(Id) {
	if(Users.isInRoles(["admin"])) {
		return Meteor.users.find({_id:Id}, {});
	}
	return Meteor.users.find({_id:Id}, {});
});