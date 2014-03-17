var x=3;
var y=3;
var z = 3;
var left=0;
var right=0;
var up=0;
var down=0;

$(function () {



    /*   alert("height"+$(window).height()); //浏览器时下窗口可视区域高度
     alert("width"+$(window).width()); //浏览器时下窗口可视区域宽度*/


    /* var height = $(window).height(); //浏览器时下窗口可视区域高度
     var width = $(window).width(); //浏览器时下窗口可视区域宽度
     var h = Math.round(height / 256);
     var w = Math.round(width / 256);*/


    /*
     初始化地图，缩放比列为3
     */
    var x1;
    var y1;
    for (var i = 0; i < 5; i++) {
        for (var j = 0; j < 7; j++) {
            x1=j+x-3;
            y1=y+i-2;
            var image = "<img  style='width:100%;height:100%' src='http://map.ctrack.com.cn/UserMapSvr/UM_Maping?version=1.0&type=chart&x=" + x1 + "&y=" + y1 + "&z=" + z + "'>";
            $("#pic" + i + "_" + j).append(image);
            //$("#pic" + i + "_" + j).click(big());
        }
    }

    var p=10;

/*
     单击触发放大事件，缩放比例+1
*/

        $(window).bind("click",function(){
            p=p+10;
            $("#zoom").css("width",p+"%");
            if(p>0 && p<90){
                var xt;
                var yt;

                z=z+1;
                x=x*2;
                y=y*2;
                xt=x;
                yt=y;

                for (var i =0; i < 5; i++) {
                    for (var j = 0; j < 7; j++) {
                        xt =x-3+j;
                        yt=y-2+i;

                        $("#pic" + i + "_" + j).empty();
                        var image = "<img style='width:100%;height:100%' src='http://map.ctrack.com.cn/UserMapSvr/UM_Maping?version=1.0&type=chart&x=" +xt+ "&y=" +yt+ "&z=" + z + "'>";
                        $("#pic" + i + "_" + j).append(image);
                        //$("#pic" + i + "_" + j).click(big());
                    }
                }


            }
            else
            {
                p=80;
                $("#zoom").css("width",p+"%");
            }

            $("#getx").attr("value",x);
            $("#gety").attr("value",y);
            $("#getz").attr("value",z);
        });

    /*
     键盘触发事件
     */
    $(window).keydown(function(event){


        //键盘“D”，触发地图向右移动事件
        if(event.which == 68)
        {
            right++;movemap();
        }

        //键盘“A”，触发地图向左移动事件
        if(event.which == 65)
        {
            left++;movemap();
        }

        //键盘“W”，触发地图向上移动事件
        if(event.which == 87)
        {
            up++;movemap();
        }

        //键盘“S”，触发地图向下移动事件
        if(event.which == 83)
        {
            down++;movemap();
        }

        //键盘“Q”，触发地图缩小事件，缩放比列-1
        if(event.which == 81)
        {
            p=p-10;
            $("#zoom").css("width",p+"%");
            if(p>0 && p<90){
                var xt;
                var yt;
                xt=x;
                yt=y;
                z=z-1;
                x=parseInt(x/2);
                y=parseInt(y/2);

                for (var i =0; i < 5; i++) {
                    for (var j = 0; j < 7; j++) {
                        xt=x+j-3;
                        yt=y+i-2;

                        $("#pic" + i + "_" + j).empty();
                        var image = "<img style='width:100%;height:100%' src='http://map.ctrack.com.cn/UserMapSvr/UM_Maping?version=1.0&type=chart&x=" +xt+ "&y=" +yt+ "&z=" + z + "'>";
                        $("#pic" + i + "_" + j).append(image);
                        // $("#pic" + i + "_" + j).fadeIn(500);
                        //$("#pic" + i + "_" + j).click(big());
                    }
                }


            }
            else
            {
                p=10;
                $("#zoom").css("width",p+"%");
            }
            $("#getx").attr("value",x);
            $("#gety").attr("value",y);
            $("#getz").attr("value",z);
        }


    });

$('#pic4_4').click(function(){
    p=p+10;
    $("#zoom").css("width",p+"%");
    if(p>0 && p<90){
        var xt;
        var yt;

        z=z+1;
        x=x*2;
        y=y*2;
        xt=x;
        yt=y;

        for (var i =0; i < 5; i++) {
            for (var j = 0; j < 7; j++) {
                xt =x-2+j;
                yt=y-2+i;

                $("#pic" + i + "_" + j).empty();
                var image = "<img style='width:100%;height:100%' src='http://map.ctrack.com.cn/UserMapSvr/UM_Maping?version=1.0&type=chart&x=" +xt+ "&y=" +yt+ "&z=" + z + "'>";
                document.getElementById("pic" + i + "_" + j).onload = function() {alert(1);};
                $("#pic" + i + "_" + j).append(image);
                //$("#pic" + i + "_" + j).click(big());
            }
        }


    }
    else
    {
        p=80;
        $("#zoom").css("width",p+"%");
    }

    $("#getx").attr("value",x);
    $("#gety").attr("value",y);
    $("#getz").attr("value",z);


});


});


//移动后刷新地图
function movemap(){
    x=x+right-left;
    y=y-up+down;
    var yt;
    var xt;
    for (var i = 0; i < 5; i++) {
        for (var j = 0; j < 7; j++) {
            xt=x+j-2;
            yt=y+i-2;
            $("#pic" + i + "_" + j).empty();
            var image = "<img style='width:100%;height:100%;' src='http://map.ctrack.com.cn/UserMapSvr/UM_Maping?version=1.0&type=chart&x=" + xt + "&y=" + yt + "&z=" + z + "'>";
            $("#pic" + i + "_" + j).append(image);
            // $("#img" + i + "_" + j).fadeIn(500);
            //$("#pic" + i + "_" + j).click(big());
        }
    }
    left=0;
    right=0;
    up=0;
    down=0;

    $("#getx").attr("value",x);
    $("#gety").attr("value",y);
    $("#getz").attr("value",z);


}





