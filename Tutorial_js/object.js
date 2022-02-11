
///Factory functions
function createHuman(name,fatherNAme,motherName)
{
    
     return {
        name,
        fatherNAme,
        motherName,
        isAlive:true,
        age :0,
        Talking(){
            console.log("Human is Talking");
        },
        Walking()
        {
            console.log("Human is Walking");
        }
    }
}



const humanOne= createHuman('HumanOne','father','Mother')
console.log(humanOne);
console.log(humanOne)
humanOne.Talking();


 //constructor Function  
console.log("constructor");
 function createHumanConst(name,fatherNAme,motherName)
 {
   
    this.name = name;
    this.fatherNAme = fatherNAme;
    this.motherName = motherName;
    this.Talking=function(){
       console.log("Human is Talking");
         },
    this.Walking = function(){
      console.log("Human is Walking");
    }
 }
 var createHumanConstOne = new createHumanConst('Ahmad','Ali','Nasrin');
 console.log(createHumanConstOne);