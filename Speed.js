console.log(Math.floor(344));
let message = undefined;
CheckSpeed(160);


function CheckSpeed(time) {
    if (time<50) message = "this car not running";
    else if (time > 50 && time < 180) message = time/5;
    else message = "you have a batMan car";
}
console.log(message);
