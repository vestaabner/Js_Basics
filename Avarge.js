


const market =[50,40,10]
// 1-59 > F
// 60 -70 > DO
// 70 -80 > c
// 80 - 90 > b
// 90 _ 100 


function Avarage(input)
{
    let sum = 0 ;
    let count = 0;
    var firstRes =0 ;
    let LastReult = undefined;
    for(let s in input) 
    {
       sum += input[s];
       count ++;
    } 
    firstRes = sum/count;
   
    if (firstRes<=59) LastReult ='f';
    else if (firstRes>60 && firstRes<70)  LastReult ='d';
    else if (firstRes>70 && firstRes<80)  LastReult ='c';
    else if (firstRes>80 && firstRes<90)  LastReult ='p';
    else LastReult ='q';
    return LastReult;    
}
    // switch(firstRes) {
    //     case(firstRes<=59):
    //         LastReult ='f';
    //       break;
    //     case(firstRes>60 && firstRes<70):
    //         LastReult ='d';
    //       break;
    //    case(firstRes>70 && firstRes<80):
    //         LastReult ='c';
    //    break;
    //    case (firstRes>80 && firstRes<90):
    //       LastReult ='f';
    //     break;
    //     default:
    //       LastReult ='q';
    //   }



console.log(Avarage(market));


