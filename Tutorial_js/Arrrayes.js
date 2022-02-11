const number = [23,7,9,10,14,18,60,6,16,26,36,46,56,66];
const numberTwo = new Array(23,7,9,10,14,18,60,6,16,26,36,46,56,66);
const fruit = ['saam','Maam','GooleSam'];
let lengthFruit = fruit.length();
console.log(Array.isArray(fruit));
let partOfNumber = number[2]; 
number.pop();//Delete from end of array 
number.shift();//Delete from start 
let indexOfNumber = number[2];
let rrr = number.indexOf(9);
console.log(rrr);
number.push(5); ///of end 
number.unshift(2); ///insert from start
number.splice(1,3); ///az indexe 1 ta 3 ro pak kon 
number.reverse();//Ba aks mikone 
number.concat(fruit)//ye arraye ro be ye arraye dige ezafe mikone 



number.sort();//sort by number of alaphabet 
///have mistake oon sorting wfor that we user this way 
let sort = number.sort(function(x,y)
{
    return x -y ;
});
console.log(sort);


///Number .sort desending 
let Disendingsort = number.sort(function(x,y)
{
    return y -x ;
});
console.log(sort);

