//1° ESERCIZIO
//// Exercise: Given an array of products, filter only the products that are in stock
// and return an array with their names in uppercase

/*const products = [
  { id: 1, name: 'Laptop', price: 999, inStock: true },
  { id: 2, name: 'Mouse', price: 25, inStock: false },
  { id: 3, name: 'Keyboard', price: 75, inStock: true },
  { id: 4, name: 'Monitor', price: 350, inStock: false },
  { id: 5, name: 'Headphones', price: 85, inStock: true },
];*/

/*filtro la condizione dei device disponibili con product.filter (serve a creare un nuovo array che contengono solo gli elementi
che soddisfano una condizione specifica in questo caso true ------- mentre product.inStock è una 
proprietà di ogni ogetto del prodotto che può avere come valore true o false)
in questo caso è true perchè si è filtrato solamente i prodotti disponibili*/

//const availableDevice = products.filter(products => products.inStock);
//console.log(availableDevice);//

// se voglio filtrare solamente i prodotti non disponibili creo la stessa sintassi ma aggiungo l'operatore logico NOT(!)//

/*const notavaibleDevice = products.filter(product => !product.inStock);
console.log(notavaibleDevice); //qui mi stampa nel console.log i prodotti non disponibili*/

//2° ESERCIZIO

// Exercise: Given an array of products, filter only the products that are in stock
// considering quantity and applying a 10% discount if total is over 100

/*const shoppingCart = [
  { item: 'Book', price: 15, quantity: 2 },
  { item: 'Pen', price: 2, quantity: 10 },
  { item: 'Notebook', price: 8, quantity: 3 },
  { item: 'Backpack', price: 45, quantity: 1 },
];
/* ho dichiarato una variabile che fa un operazione tra il prezzo e la quantità utilizzando reduce e mi da 119*/
/*const totalCart = shoppingCart.reduce((acc, products) =>{
  return acc + products.price * products.quantity
}, 0);
/* per applicare lo sconto del 10% ho creato una variabile let che permette di modificare e la condizione if
e con il console.log ho stampato sia il totale e il prezzo finale con il 10% di sconto*/

/*let finalPrice = totalCart;
if(totalCart > 100){
  finalPrice = totalCart -(0.1 * totalCart);
}

console.log("totale", totalCart);
console.log("prezzo finale", finalPrice);*/

//3° ESERCIZIO

// Exercise: Find the first user who is both active and has admin role
// Then check if there's at least one user from Italy

/*const users = [
  { id: 1, name: 'John', active: true, role: 'user', country: 'USA' },
  { id: 2, name: 'Maria', active: false, role: 'admin', country: 'Spain' },
  { id: 3, name: 'Luigi', active: true, role: 'admin', country: 'Italy' },
  { id: 4, name: 'Anna', active: true, role: 'user', country: 'Germany' },
];
 
const activeUser = users.find(user => user.active === true && user.role === "user");

const userItaly = users.some(user => user.country === "Italy");

console.log("First active user", activeUser);
console.log("User italy", userItaly);*/

//4° ESERCIZIO
// Exercise: Sort students by grade (descending) and return the top 3 students

const students = [
  { name: 'Alice', grade: 85 },
  { name: 'Bob', grade: 92 },
  { name: 'Charlie', grade: 78 },
  { name: 'Diana', grade: 95 },
  { name: 'Eve', grade: 88 },
  { name: 'Frank', grade: 90 },
];


const decrescentStudent = students
.sort((a, b) => b.grade - a.grade)
.slice(0, 3);

console.log(decrescentStudent);