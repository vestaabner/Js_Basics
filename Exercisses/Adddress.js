
 
function createAddress(street,city,zipCode)
{
    return {
        street ,
        city,
        zipCode,
        ShadowArress()
        {
            return 'salam ${street} , {city} + {zipCode}';
        }
    }
}

let object = new  createAddress('ValiAsr','tehran','1234455');
let object1 =new  createAddress('object1','tehran','1234455');
let object2 =new createAddress('object2','tehran','1234455');
let object3 =new createAddress('object3','tehran','1234455');
let object4 =new createAddress('object4','tehran','1234455');
let object5 =new createAddress('object5','tehran','1234455');

function show(object)
{
    for (let key in object) {
            console.log(key,object[key]);            
        }
    }


console.log(show(object))





