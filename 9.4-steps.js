function printSteps(n) {
  let line = "#";

  for (let i = 0; i < n - 1; i++) {
    line += " ";
  }
  console.log(line);
  for (let j = 0; j < n - 1; j++) {
    line = "#" + line.slice(0, n - 1);
    console.log(line);
  }
}
printSteps(1);
printSteps(2);
printSteps(3);
printSteps(4);
