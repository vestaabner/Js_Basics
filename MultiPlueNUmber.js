



function sum(number)
{
    let answer = 0;
    
    for (let index = 0; index <= number; index++) {
        if (index % 3 == 0  || index % 5 == 0) {
            answer+=index;
        }
    }
    return answer;
}


console.log(sum(10));