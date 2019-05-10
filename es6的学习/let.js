//let块级作用外部不能访问
// let c = 9;
// var d =10;
// {    
//     let m = 100;
//     let a = 5;
//     var b = 10;
//     {
//         console.log(a,b,c);
//     }
// }
// console.log(m);

//var的提升

// function f(){
//    console.log(m)
//    var m= 3;
// }
// f();

//内部的p使外部的p失效
// var p =12;
// function ff(){
   
//     let p;
//     console.log(p);
// }
// ff();


// 代替立即执行函数
// var config =(function(){
//     var config=[];
//     config.push(1);
//     config.push(2);
//     config.push(5);
//     return config;
// })();
// console.log(config);

// let config;
// {
//     config = [];
//     config.push(1);
//     config.push(2);
//     config.push(3);
// }
// console.log(config);

// 函数不被提升
//  'use strict'
function a(){console.log(1);}
function f(){
    
    a();
    {
    function a(){
        console.log(20);
    }
}
}
f();

// var arr=[];
// function f(){
//     for(var i=0;i<5;i++){
//         arr.push(function(){
//             console.log(i);
//         })
//     }
// }
// f();
// arr[1]()

//const 的使用，对物理内存地址不可更改
// const a ={
//     name:'leo'
// };
// a.name = 'zeng liang';
// console.log(a);
// const b = 0;
// b = 9;

