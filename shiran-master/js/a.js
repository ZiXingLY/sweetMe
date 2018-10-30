function timeElapse(){
    var date = new Date();
    var years = date.getFullYear();
    var months = date.getMonth()+1;
    var days = date.getDate();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var result = "现在是：<span class='digit'>"+ years +"</span> 年 <span class='digit'>"+ months +"</span> 月 <span class=\"digit\">" + days + "</span> 日 <span class=\"digit\">" + hours + "</span> 时 <span class=\"digit\">" + minutes + "</span> 分 <span class=\"digit\">" + seconds + "</span> 秒，给你雪糕吃！";
    $("#elapseClock").html(result);
}