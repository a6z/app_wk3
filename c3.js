var A ={
  Street: 'Main',
  Number: '23',
  Apartment:
  {
    Floor: 2,
    Number: 314
  }
};

var B ={
  firstname: 'Liu',
  lastname: 'ChinYun',
  greet: function() {
    console.log(`Hello, ${this.firstname} ${this.lastname}`);
  }
}

B.greet();
console.log(B['firstname']);


var name,phone;
var info ={
  name,
  phone,
	printInfo() {
		console.log(`Name: ${this.name}, Phone: ${this.phone}`);
	}
}

info.name = "Liu";
info.phone = "02-28825252";
info.printInfo();