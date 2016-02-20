Items.allow({
	insert: function (userId, doc) {
		return Items.userCanInsert(userId, doc);
	},

	update: function (userId, doc, fields, modifier) {
		return Items.userCanUpdate(userId, doc);
	},

	remove: function (userId, doc) {
		return Items.userCanRemove(userId, doc);
	}
});

Items.before.insert(function(userId, doc) {
	doc.createdAt = new Date();
	doc.createdBy = userId;
	doc.modifiedAt = doc.createdAt;
	doc.modifiedBy = doc.createdBy;

	
	if(!doc.createdBy) doc.createdBy = userId;
});

Items.before.update(function(userId, doc, fieldNames, modifier, options) {
	modifier.$set = modifier.$set || {};
	modifier.$set.modifiedAt = new Date();
	modifier.$set.modifiedBy = userId;

	
});

Items.before.remove(function(userId, doc) {
	
});

Items.after.insert(function(userId, doc) {
	
});

Items.after.update(function(userId, doc, fieldNames, modifier, options) {
	
});

Items.after.remove(function(userId, doc) {
	
});
