const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

for (let index = 0; index < listOfNeighbours.length; index++) {
  const element = listOfNeighbours[index];
  for (let index2 = 0; index2 < element.length; index2++) {
    const country = element[index2];
    console.log("Neighbor: " + country);
  }
}
