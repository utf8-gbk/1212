// set和数组的差别
// let arr = [1,2,3,'5','5'];
// let st = new Set(arr);
// console.log(st);

//set的一些函数
// let st = new Set();
// st.add({naem:'leo',qq:'123456'});
// let bool = st.delete({naem:'leo',qq:'123456'});
// console.log(bool);

// let st = new Set();
// let user = {naem:'leo',qq:'123456'};
// st.add(user);
// let bool = st.delete(user);
// console.log(bool);
// st.add(user);
// console.log(st.size);
// st.add(22);
// console.log(st.has(22));
// st.clear();
// console.log(st.size);

//数组通过Set对象去除重复的值 Array.from 使类数组的数据结构变成数组
// let arr =['11fdfd','ee','ee'];
// let newArr = Array.from(new Set(arr));
// console.log(newArr);
 
let st = new Set();
let user = {naem:'leo',qq:'123456'};
st.add(user);
console.log()