///for Object ==> just for-in ==> access to key 
///For check that this property is exist in my object i must user the "in" keyword  



const car = {type:"Fiat", model:"500", color:"white"};


for (const key in car)
 {
     console.log( car[key],key);}

if(['type'] in car)console.log("Yes");

let uu = Object.assign({},car) //copy car In to other object 
console.log(uu);

let uuu = Object.assign({price:1200},car) //copy car In to other object 
console.log(uuu);

const yyy = {...uuu};
console.log(yyy);


console.log(Math.random());
console.log(Math.round(1.6));
console.log(Math.max([1,2,4]));
