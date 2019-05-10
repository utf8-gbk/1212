1.let的块级作用域  

2.let box=$('.box'),$(box[i])=>$($('.box')[i]) 给数组类包裹jq

3.$('right'+(i+1))





```
var box = $('.box');
var right = $('.rightMenu');
for(let i=0;i<box.length;i++)
{
	$(box[i]).click(function(){
		right.css('display','none');
		$('.right'+(i+1)).css('display','block');
});
}
```

