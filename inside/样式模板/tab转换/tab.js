let tab = $('.tab1');
let div = $('.div');
for(let i=0;i<tab.length;i++)
{
    $(tab[i]).click(function(){
        div.css('display','none');
        $('.div'+(i+1)).css('display','block');
    });
}