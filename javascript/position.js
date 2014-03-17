/**
 * Created by caozhiqiang on 14-3-17.
 */
$(function(){
    var cont;



    cont=document.getElementById("canvas").getContext("2d");  //获取2d对象

    drawLine();//画直线

    drawCircle();//画圆

    drawRect();//画矩形


    function drawLine(){

        cont.beginPath();//定义一个路径的开始

        cont.moveTo(230,200);//路径的起始点

        cont.lineTo(250,240);//起始点和该点确定一条直线

        cont.lineTo(270,200);

        cont.lineWidth=10;//线条宽度

        cont.strokeStyle="red";//线条颜色

        cont.lineCap="round";//线条两端点类型，butt：默认，round：圆角，square：直角

        cont.stroke(); //为线条赋予颜色，如果未设定默认为黑色

    }



    function drawCircle(){

        cont.beginPath();

        cont.arc(250,200,100,0,2*Math.PI,0);

        //参数依次说明：圆心X轴坐标，圆心Y轴坐标，圆的半径，起始角度，结束角度，画圆方向（0-顺，1-逆）

        cont.lineWidth=5;//宽度

        cont.strokeStyle="blue";//颜色

        cont.stroke();

    }



    function drawRect(){

        cont.beginPath();

        cont.rect(200,150,20,20);

        //参数依次说明：左上角X轴坐标，左上角Y轴坐标，矩形宽，矩形高

        cont.rect(280,150,20,20);

        cont.rect(220,260,60,20);

        cont.lineWidth=5;//线条宽度

        cont.strokeStyle="yellow";//线条颜色

        cont.stroke();

    }
});