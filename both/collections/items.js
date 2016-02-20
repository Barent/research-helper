this.Items = new Mongo.Collection("items");

this.Items.userCanInsert = function(userId, doc) {
	return Users.isInRoles(userId, ["admin","user"]);
}

this.Items.userCanUpdate = function(userId, doc) {
	return userId && (doc.createdBy == userId || Users.isInRoles(userId, ["admin"]));
}

this.Items.userCanRemove = function(userId, doc) {
	return userId && (doc.createdBy == userId || Users.isInRoles(userId, ["admin"]));
}

this.Schemas = this.Schemas || {};

this.Schemas.Items = new SimpleSchema({
	Id: {
		label: "Id",
		type: String
	},
	Name: {
		label: "Name",
		type: String,
		optional: true
	},
	Observation_One: {
		label: "Observation_One",
		type: String,
		optional: true
	},
	Observation_Two: {
		label: "Observation_Two",
		type: String,
		optional: true
	},
	Observation_Three: {
		label: "Observation_Three",
		type: String,
		optional: true
	},
	Observation_Four: {
		label: "Observation_Four",
		type: String,
		optional: true
	},
	Observation_Five: {
		label: "Observation_Five",
		type: String,
		optional: true
	},
	Notes: {
		label: "Notes",
		type: String,
		optional: true
	}
});

this.Items.attachSchema(this.Schemas.Items);
