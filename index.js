//1° ESERCIZIO
//// Exercise: Given an array of products, filter only the products that are in stock
// and return an array with their names in uppercase

const products = [
  { id: 1, name: 'Laptop', price: 999, inStock: true },
  { id: 2, name: 'Mouse', price: 25, inStock: false },
  { id: 3, name: 'Keyboard', price: 75, inStock: true },
  { id: 4, name: 'Monitor', price: 350, inStock: false },
  { id: 5, name: 'Headphones', price: 85, inStock: true },
];

/*filtro la condizione dei device disponibili con product.filter (serve a creare un nuovo array che contengono solo gli elementi
che soddisfano una condizione specifica in questoc aso true ------- mentre product.inStock è una 
proprietà di ogni ogetto del prodotto che può avere come valore true o false)
in questo caso è true perchè si è filtrato solamente i prodotti disponibili*/

const availableDevice = products.filter(product => product.inStock);
console.log(availableDevice);
/* se voglio filtrare solamente i prodotti non disponibili creo la stessa sintassi ma aggiungo l'operatore logico NOT(!)

const notavaibleDevice = product.filter(product => !product.inStock);
console.log(notavaibleDevice); qui mi stampa nel console.log i prodotti non disponibili*/