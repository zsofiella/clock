const getCurrentTime=(startTime)=>{
    const currentDate=startTime ? new Date(startTime) : new Date ();
    const hours=padNumbers(currentDate.getHours());
    const minutes=padNumbers(currentDate.getMinutes());
    const seconds=padNumbers(currentDate.getSeconds());

    return `${[hours, minutes, seconds].join(':')}`;
};

const padNumbers = (num) => {
    return num < 10 ? `0${num}` : `${num}`;
};

setInterval( () => {
    const time=getCurrentTime();
    const clockFace=document.querySelector('.clock-face');
    clockFace.textContent = time;
}, 1000 );
