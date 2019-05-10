// var reg1 = /\w/;
// var reg2 = /\w/g;
// reg2.test('abcd');
// console.log(reg2.lastIndex);
// reg2.test('abcd');
// console.log(reg2.lastIndex);
// reg2.test('987456455');
// console.log(reg2.lastIndex);
// reg2.test('987456455');
// console.log(reg2.lastIndex);
// reg2.test('987456455');
// console.log(reg2.lastIndex);
// reg2.test('987456455');
// console.log(reg2.lastIndex);
var reg3=/\d(\w)\d/;
var reg4=/\d(\w)\d/g;
var ts = '1a2b3c4d5e';
// var ret = reg3.exec(ts);
// console.log(reg3.lastIndex+'\t'+ret.index+'\t'+ret.input+'\t'+ret);
while(ret = reg4.exec(ts))
{
    console.log(reg4.lastIndex+'\t'+ret.index+'\t'+ret.input+'\t'+ret.toString());
    console.log(ret);
}