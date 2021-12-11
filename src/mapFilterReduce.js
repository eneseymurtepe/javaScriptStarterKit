let cart = [
  {
    id: 1,
    productName: "Telefon",
    quantity: 3,
    unitPrice: 4000,
  },
  {
    id: 2,
    productName: "Bardak",
    quantity: 2,
    unitPrice: 30,
  },
  {
    id: 3,
    productName: "Kalem",
    quantity: 1,
    unitPrice: 20,
  },
  {
    id: 4,
    productName: "Şarj Cihazı",
    quantity: 2,
    unitPrice: 100,
  },
  {
    id: 5,
    productName: "Kitap",
    quantity: 3,
    unitPrice: 30,
  },
  {
    id: 6,
    productName: "Pot",
    quantity: 5,
    unitPrice: 150,
  },
];

/* 
cart.map(product => console.log(product.productName))  ==>> O anki gezdiğin ürüne verdiğin takma isim => product
                                                            Sonrasında her bir product için yapmasını istediğin işlem =>   console.log(product.productName)
*/

console.log("Map Function");

cart.map((product) => {
  console.log(
    product.productName + " : " + product.unitPrice * product.quantity
  );
});

console.log("");
console.log("Filter Function");

let quantityOver2 = cart.filter((product) => product.quantity > 2);
console.log(quantityOver2);

console.log("");
console.log("Reduce Function");

let total = cart.reduce(
  (acc, product) => acc + product.unitPrice * product.quantity,
  0
); // 0 = accumulator başlangıç değeri

console.log(total);
console.log("");

console.log("Sepete ürün ekleme");
function addToCart(sepet) {
  sepet.push({ id: 7, productName: "Ruhsat", quantity: 1, unitPrice: 20 });
}

addToCart(cart);
console.log(cart);

let sayi = 10;

function sayiTopla(number) {
  number += 1;
}
sayiTopla(sayi);
console.log(sayi);
