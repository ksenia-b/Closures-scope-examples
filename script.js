var person = function () {
// Private
	var name = "Robert";
	return {
		getName : function () {
		return name;
	},
	setName : function (newName) {
		name = newName;
	}
};
}();
alert(person.name); // Undefined
alert(person.getName()); // "Robert"
person.setName("Robert Nyman");
alert(person.getName()); // "Robert Nyman"