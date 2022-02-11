function compositNumber(number) {
  let answers = [];
  let indexOf = 0;
  for (let index = 0; index < number; index++) {
    if (index % 2 == 0 && index !=2) continue;
    else if (index % 3 == 0 && index !=3)  continue;
    else if (index % 5 == 0 && index !=5)  continue;
    else if (index % 7 == 0 && index !=7)  continue;
    else if (index % 9 == 0 && index !=9)  continue;
    else answers[indexOf] = index;indexOf++;;
  }
  return answers;
}


console.log(compositNumber(20));

