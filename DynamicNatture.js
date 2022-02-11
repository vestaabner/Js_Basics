function createAhmad(ahmad)
{
    this.ahmad;
    this.talk = function(){
        console.log("Talking");
    }
}


var  creatahmadOnwe = new createAhmad('Ahmad');
creatahmadOnwe.Color  = 'blur';
creatahmadOnwe.drew = function()
{
    console.log("Deassign");
}
console.log(creatahmadOnwe);



delete createAhmad.prototype;