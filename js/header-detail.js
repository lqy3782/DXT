var last="-1";
$(".header-rigth li").on("click",function(){
    var index=$(this).index();
    $li=$(".headerD-ul li").eq(index);
    if(last==index){
        $(".header-detail").toggle();
    }
    else{
        $(".header-detail").show();
        $li.show().siblings().hide();
    };
    last=index;
});

$(".header-wap").click(function(){
    $(".header-shape").toggle();
})

$(".shape-ul h1").click(function(){
    $(this).siblings().toggle();
});
