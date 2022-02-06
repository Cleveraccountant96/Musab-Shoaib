setInterval(setTime, 1000);
    function setTime(){
        const clock= new Date();
        document.getElementById("time").innerHTML=clock.toLocaleTimeString();
        let hour= now.getHours();
        let min= now.getMinutues();
        let seconds= now.getSeconds();
        let result= hours +":"+ mins +":"+sec;
    }