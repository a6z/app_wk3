var personobj = {
	firstname: "Simon",
	fullname: "",
	age: 37,
	married: true,
	hasOwnHair: null,
	children: [{
		firstname: "Erica"
	}, {
		firstname: "Isobel"
	}]
};

var personjson = JSON.stringify(personobj,null,2);
var personback = JSON.parse(personjson);

console.log(personback);
