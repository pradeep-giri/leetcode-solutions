function digitalClock(mins) {
    let hour = Math.floor(mins/60);
    let min = mins % 60;
    let time = `${hour}:${min}`;
    return time;
}

console.log(digitalClock(60))