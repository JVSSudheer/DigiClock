function showTime(){
    var date = new Date()
    var h = date.getHours() 
    var m = date.getMinutes() 
    var s = date.getSeconds() 
    var ms = date.getMilliseconds()
    var session= "AM"

    if (h==0) h=12

    if (h>12) {
        h=h-12;
        session="PM";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    ms = (ms < 10) ? "00" + ms : ms;
    ms = (ms >10 && ms<100) ? "0" + ms : ms;

    
    var time = h + ":" + m + ":" + s + ":" + ms +" " +session;
    document.getElementById("ClockDisplay").innerHTML = time;
}
setInterval(showTime,1);