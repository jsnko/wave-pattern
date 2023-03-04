let line = "~~~~~~~";
console.log(line);
var counter = 7;
while (counter > 1) {
  line = line.substring(0, line.length - 2);
  counter = counter - 2;
  console.log(line);
}
