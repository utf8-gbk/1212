var a = `李 5 80
李 6 20
李 7 30
李 8 10
李 9 30
王 6 20
王 7 30
王 8 10
王 9 30`;
//  console.log(a);

// var b = a.split('\n');
// console.log(b);
// var c=b.map(b=>b.split(' '))
// console.log(c);

// let types = [];
// types[5] ="50%-60%";
// types[6] ="60%-70%";
// types[7] ="70%-80%";
// types[8] ="80%-90%";
// types[9] ="90%-100%";

// var d=c.map(c=>({name:c[0],type:types[parseInt(c[1])],percent:parseInt(c[2])}))
// console.log(d);

// var e = JSON.stringify(d,['name'],2);
// var e = JSON.stringify(d,null,2);
// console.log(e);

function f(a){
    var b = a.split('\n');
    console.log(b);
    var c=b.map(b=>b.split(' '))
    console.log(c);
    let types = [];
    types[5] ="50%-60%";
    types[6] ="60%-70%";
    types[7] ="70%-80%";
    types[8] ="80%-90%";
    types[9] ="90%-100%";
    // var d=c.map(c=>({name:c[0],type:types[parseInt(c[1])],percent:parseInt(c[2])}))
    var d=c.map(
        function(c){
            return {
                name:c[0],type:types[parseInt(c[1])],percent:parseInt(c[2])}
        }
    )
    console.log(d);
    var e = JSON.stringify(d,null,2);
    console.log(e);
}
    
f(a);
