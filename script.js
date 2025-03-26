const days = ["SUN","MON", "TUE","WED", "THU", "FRI", "SAT"]
//month
const months = ["JAN","FEb","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC",];
setInterval(()=>{
    d=new Date();
    hours=d.getHours();
    mins=d.getMinutes();
    secs=d.getSeconds();
    
    //add zero at start
    ampm=hours>=12?' PM':' AM';
    hours=hours%12;
    hours=hours<10 ? '0'+hours:hours;
    mins=mins<10 ? '0'+mins:mins;
    secs=secs<10 ? '0'+secs:secs;
    
    //rotate hands
    hrotate=((hours*30)+(mins/2));
    mrotate=mins*6;
    srotate=secs*6;
    hour.style.transform=`rotate(${hrotate}deg)`
    minute.style.transform=`rotate(${mrotate}deg)`
    second.style.transform=`rotate(${srotate}deg)`
    let month=

    //day
    // update the time on digital wali ghadi
    dh=document.getElementById("hours")
    dh.innerText=hours+' : '+mins + ' : ' +secs +ampm;
    document.getElementById("year").innerText=d.getFullYear()
    document.getElementById("monnthhhh").innerText=months[d.getMonth()]
    document.getElementById("dayyy").innerText=days[d.getDay()]
    document.getElementById("date").innerText=d.getDate()
},1000)


