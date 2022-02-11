



for (let index = 20; index >0; index--) {
    if (index%2==0) {
        console.log(index,'odd');
    }
    else{
        console.log(index,'even');
    }
}



for (let index = 20; index >0; index--) {
  const messgae = index%2 == 0 ? 'even' : 'odd';
  console.log(messgae,index);
}