const cart = [
  {
    name: "Laptop",
    price: 50000,
    quantity: 1,
  },
  {
    name: "Mouse",
    price: 500,
    quantity: 2,
  },
  {
    name: "Keyboard",
    price: 1500,
    quantity: 1,
  },
];

const total = cart.reduce((sum, item) => {
  return sum + item.price + item.quantity;
}, 0);

console.log(total);

function validateusername(name) {
  if (name.length >= 5) {
    if (isNaN(name[0])) {
      console.log(true);
    } else {
      console.log(false);
    }
  } else {
    console.log(false);
  }
}
validateusername("john12");
validateusername("12john");

const emails = [
  "user@gmail.com",
  "admin@gmail.com",
  "user@gmail.com",
  "test@gmail.com",
  "admin@gmail.com",
];
function duplicate(emails) {
  const duplicates = emails.filter((item, index) => {
    return emails.indexOf(item) != index;
  });
  return duplicates;
}
console.log(duplicate(emails));

const products = [
  { name: "Laptop", stock: 3 },
  { name: "Mouse", stock: 0 },
  { name: "Keyboard", stock: 5 },
];

function isAvailable(productName) {
  const product = products.find((p) => p.name === productName);
  if (product && product.stock > 0) {
    console.log("Yes, available");
  } else {
    console.log("Not available");
  }
}

isAvailable("Mouse");
isAvailable("Laptop");
