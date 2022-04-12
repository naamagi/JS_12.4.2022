const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

const listOfNeighboursLength = listOfNeighbours.length;
let i = 0;
let tempArr;
while (i < listOfNeighboursLength) {
  let j = 0;
  tempArr = listOfNeighbours[i];
  while (j < tempArr.length) {
    let country = tempArr[j];
    console.log("Neighbor: " + country);
    j++;
  }
  i++;
}

//The for loop is better for a problem where the number of iterations is known.