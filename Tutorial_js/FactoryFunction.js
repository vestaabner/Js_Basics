


function CreateHuman(fname,Lname,age)
{
    return {
        fname,
        Lname,
        age,
        walk()
        { console.log("Walking");}
        ,
        talk()
        { console.log("Talking"); }
    }
}


let human =new CreateHuman('Ahmad','Hamdidi',18);
console.log(human);
