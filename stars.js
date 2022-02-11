let repeat = 5;

repeatstars(5);
function repeatstars(input) {
  for (let index = 1; index <= input; index++) {
    let pattern = "";
    for (let secondeIndex = 0; secondeIndex < index; secondeIndex++) 
    pattern += "*";
    console.log(pattern);
  }
}
