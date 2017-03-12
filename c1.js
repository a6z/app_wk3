//push
var a= ['1','2','3'];
console.log(a);

a.push('4');
console.log(a);

//slice
var b = a.slice(0,2);
console.log(b);

//forEach
a.forEach(
    (i) => console.log(i)
)

//map
var doublenumbers =[];
doublenumbers = a.map(
    i => i*2
)
console.log(doublenumbers);

var cars = [
	{model: 'Buick', price:'cheap'},
	{model: 'BMW', price:'expensive'}
];

var price = cars.map(car=>car.price)
console.log(price);

//spread operator
var a1 = ['1','2','3'];
var a2 = ['4','5','6'];
var a3 = [...a2, ...a1];
console.log(a3);
