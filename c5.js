var person = {
    name: 'Liu',
    number: '202',
    greet: function(){
        console.log('welcome!');
    }
}

var full = function(){
    this.greet();
    console.log(this.name);
};

var fullname = full.bind(person);
fullname();

//callbackbind

var good = function(fn){
    fn();
};

var say = {
    one: 'Hi',
    two: function(){
        console.log(`${this.one}!`);
    },
    three: function(){
        good(this.two.bind(this));
    }
};

say.three();

var say = {
    one: 'Hi',
    two: function(){
        console.log(`${this.one}!`);
    },
    three: function(){
        good(
            ()=>{console.log(this.one);}
        );
    }
};

say.three();