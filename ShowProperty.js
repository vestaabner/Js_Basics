let object = {
    name : 'Ahmad',
    FName : 'vestaabner',
    Age : 23 
}


function ShowStringProperty(object)
{
    for(let s in object) 
    {
        if (typeof object[s]  == "string") {
        console.log(s,object[s]);
        }
    }
}

ShowStringProperty(object)