function showDate() {

var obj = new Date();
var hr = obj.getHours();
var min = obj.getMinutes();
var sec = obj.getSeconds();
var day = obj.getDate();
var month = 1+obj.getMonth();
var year = obj.getFullYear();
var session = "AM";

if(hr==0){
    hr=12;
}

if(hr>12){
    hr -= 12;
    session = "PM";
}

hr = (hr<10)?"0"+hr:hr;
min = (min<10)?"0"+min:min;
sec = (sec<10)?"0"+sec:sec;
day = (day<10)?"0"+day:day;
month = (month<10)?"0"+month:month;

document.getElementById("digiclock").innerHTML =
  "Current Time : "+hr + " : " + min + " : " + sec +" "+ session +" <br>"+"Todays Date : "+day+" / "+month+" / "+year;

  setTimeout(showDate, 1000);
}

showDate();