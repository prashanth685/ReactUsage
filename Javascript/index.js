// var a = 12;
// {
//   let x = 12;
//   x = 13;
//   console.log(x);
//   const age = 12;
//   //   age = 13;
//   console.log(age);
// }
// age = 13;
// console.log(age);

const obj = {
  animal: "lion",
  color: "yellow",
};
// obj.animal = "elephant";
obj.color = "red";
// console.log(obj);

let product = obj.animal ?? "elephant";
console.log(product);

let num1 = 98e-7;
console.log(num1);

let name = "ajay";
name = undefined;

console.log(name);
delete obj.animal;
console.log(obj);

let num2 = 12,
  num3 = 12;
console.log(eval(num1, num2));

let x = 12;
if (12 === x) {
  console.log("yes");
}

let num4 = 6,
  num5 = 8;
console.log(num4 ^ num5);
console.log(typeof num4);

function* test() {
  console.log("im before yield exp");
  yield 21;
}
const genObj = test();
console.log(genObj.next());

for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1);
}
for (let i = 0; i < 3; i++) {
  console.log(i);
}
var count = 0;
while (count < 5) {
  console.log(count);
  count++;
}
do {
  console.log(count);
  count++;
} while (count < 44);

let names = "ajay";
for (item in names) {
  console.log(names[item]);
}
for (item of names) {
  console.log(item);
}
