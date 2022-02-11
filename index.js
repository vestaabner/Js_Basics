console.log('Hello wo');



//for declare variable we use 
let namse = 'Ahmad';
console.log(namse)


///cosntr for const variable 
const age = 22;
// age = 23 ; error 



//                                        data type 
//                          primitiveTypes           RefrenceTypes 
//                          string                   object
//                          numbers                  Arrayes
//                          boolean                  Function
//                          undifined
//                          nulls 

let name = 'Ahad';
let isMan = true ;
let FirName = undefined;
let LastName = null;
console.log(typeof(name));
console.log(typeof(age));
console.log(typeof(isMan));
console.log(typeof(FirName));
console.log(typeof(LastName));


LastName = 'HAmidi';
FirName = 'Ahmad';
console.log(LastName);
console.log(FirName);

///Objects
let person = {
    name :"Mohmmad",
    lastName : "Hosseni"
};

console.log(person);

//Access Field 
//dot notayion 
console.log(person.name);
console.log(person['name']);



//Arrayes 

let seletedColores = ['red','blue'];
console.log(seletedColores);
//Acess element in arrayes by index 
console.log(seletedColores[0]);
seletedColores[2] ='Green';
console.log(seletedColores);


let dynamicArrayes = ['Ahmad',true,1,seletedColores]
console.log(dynamicArrayes);


console.log(dynamicArrayes.length);




///Fuctions 
function greet() {return 'hello word '};

function sayeHello(name) {
    return 'hi'+' '+name
}

function sayeHelloWhiteLAstName(lastName,firstName) {
    return `hello ${firstName} \t ${lastName}`
}

console.log(greet());  
console.log(sayeHello('ahmad'));  
console.log(sayeHelloWhiteLAstName('Ahmad','Hamidi'));


//JavaScript Arithmetic operation 
console.log(2 +4);
console.log(2 -3);
console.log(2 * 3);
console.log(2 % 3);
console.log(2 ** 3);

console.log('------------------------------------------------');

let x = 2 ;
let y = 2 ;
console.log(x++); // first log that and them increment white that
console.log(x); 
console.log(++y); ///increament by one first and then log that 
console.log(y);


console.log('-------------------------mines-----------------------');
let q = 2;
let r = 2;
console.log(q--);
console.log(q);
console.log(--r);
console.log(r);


//AssignmentOpeartion
// +=
// -=
// *=
// /=
// %=
// x = x+5 ; ==> x+=5;



//Comparison
//  ==  equal to 
//  ===  	equal value and equal type
//  != 	not equal
//  !== not equal value or not equal type
console.log(2 == '2');
console.log(2 === '2');
console.log(1 == true);
console.log( 0 == false);
console.log( null == false);
console.log( undefined == false);



//ternary operator 
let isOk = 200;
let answer = undefined;
answer = isOk >= 100 ? 'is gretenThan 100 ' : 'is lesster than 100';
console.log(answer); 


//Logical operation 
console.log('------------------Logical operation-------------------');
console.log(true && true ); //true
console.log(2 && false && 3); // false
console.log(true || false); // true
console.log(false|| false); //false 
console.log('firstelemtnr' && 'secoundElemnt' ); //secound 
console.log('2' && 3); //3
console.log('2' ||  3); //2
console.log('2' && 3 && 5) ; //5 
console.log('2' ||  3 || 4); //2
console.log(null && 3 || 5) ; // 5
console.log(undefined || 3 );
console.log(undefined && 3); 
console.log('!');


console.log('--------------------------------------------------------------');
console.log(false || true);
console.log(false || 2);
console.log(false || 'Mosh');

console.log(false && true);
console.log(false &&  2);
console.log(false && 'Mosh');
console.log('---------------------------------------------------------------');
let w = 'blue';
let qq = 'red';
console.log(w);
console.log(qq);
let c = w ; //blue
w =qq; //red 
qq = c;
console.log(w);
console.log(qq);
console.log('----------------------------condtional stateMent ---------------');





