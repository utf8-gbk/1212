//map中的key可以是任意值  map和set中的NAN是唯一的
// var obj = {
//     'name':'leo',
//     qq:'334343',
//     'full name':'zeng liang'
// };

// let map = new Map();
// map.set(obj,'very good');
// map.set(12,'number = 12');
// console.log(map.get(obj));
// console.log(map.size);
// map.delete(12);
// console.log(map.size);
// console.log(map.has(obj));
// map.clear();

//map的创建
let map = new Map([['name','leo'],
['qq','1234']]);
console.log(map);