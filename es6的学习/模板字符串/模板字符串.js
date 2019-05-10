'use strict';
var i='hi';
let html ='<div><span>'+i+'hello</span></div>';
// 1加入变量
console.log(html);
let name = 'leo';
let qq = '23424234';
let html2=
`<div><ul><li>${name}</li><li>${qq}</li></ul></div>
`;
console.log(html2);
// 2${}中可以放任何js语句
let html3=
`<div><ul><li>${name==='zengliang'?'ok':'no'}</li><li>${qq}</li></ul></div>
`;
console.log(html3);

// 3${}可以调用一个函数
function a(){
    return 'a';
}
function b(){
    return 'b';
}
let html4 =`<div><ul><li>${a()}</li><li>${b()}</li></ul></div>
`;
console.log(html4);