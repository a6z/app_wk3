function Big(callback){
    console.log('Hello from the otherside~');
    var data1 = {
        name: 'NTUE DTD'
    };

    callback(data1);
}

Big(data=>{
    console.log('The callback was invoked!');
    console.log(data);
});