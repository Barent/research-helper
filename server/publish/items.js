Meteor.publish("items", function() {
	if(Users.isInRoles(this.userId, ["admin"])) {
		return Items.find({}, {});
	}
	return Items.find({createdBy:this.userId}, {});
});

Meteor.publish("items_empty", function() {
	if(Users.isInRoles(this.userId, ["admin"])) {
		return Items.find({_id:null}, {});
	}
	return Items.find({_id:null,createdBy:this.userId}, {});
});

Meteor.publish("item", function(Id) {
	if(Users.isInRoles(this.userId, ["admin"])) {
		return Items.find({_id:Id}, {});
	}
	return Items.find({_id:Id,createdBy:this.userId}, {});
});

