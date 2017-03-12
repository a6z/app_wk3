(function(){console.log(this)})();

var GO = {
    A: 'aaa',
    B: 'bbb',
    a1: function(){
        console.log(this.A);
    },
    a2: ()=>{
        console.log(this.A);
    },
    a3: function(){
        (()=>{
        console.log(this.A);
        })();
    }
}

GO.a1();
GO.a2();
GO.a3();