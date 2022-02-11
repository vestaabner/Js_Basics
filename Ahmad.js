let time = 10;
let message = undefined;

if (time >= 6 && time < 12) message = "Goood Morning";
else if (time >= 12 && time < 18) message = "Goood evening";
else if (time >= 18 && time < 24) message = "Goood Night ";
else message = "this is not time";

console.log(message);

let chance = 1;
let result = undefined;
switch (chance) {
  case 1:
    result = "2 ta chanse monde ";
    break;
  case 2:
    result = "1 chanse monde ";
    break;
  default:
    result = "shanci namonode baarat  ";
}
console.log(result);

if (chance == 1) message = "avale";
else if (chance == 2) message = "dovome";
else message = "sevome";
console.log(message);

console.log("----------------LOOPS----------------");
for (let index = 0; index < 5; index++) {
  console.log("Hello word!");
}



let person = {
    name :'Ahmad',
    age : 23 
};

  for(let f in person)
    console.log(f,person[f]);

console.log('we user let of in arrayes ');
 let coloers = ['red','blue','green']
   for (let t of coloers)
       console.log(t);
   