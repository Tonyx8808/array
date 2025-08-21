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

/*const students = [
  { name: 'Alice', grade: 85 },
  { name: 'Bob', grade: 92 },
  { name: 'Charlie', grade: 78 },
  { name: 'Diana', grade: 95 },
  { name: 'Eve', grade: 88 },
  { name: 'Frank', grade: 90 },
];*/

/*(VOGLIO CHIARIRLO CON MANFREDI VENERDI)//
//creo una costante decrescent student
//const decrescentStudent = students
.sort((a, b) => b.grade - a.grade) // utilizzo .sort per ordinare gli elementi di un array
.slice(0, 3); utilizzo .slice  un metodo che permette di estrarre una porzione di una stringa o di un array e 
restituirla come nuovo oggetto, senza modificare l'originale. 
In altre parole, slice() crea una copia di una parte della sequenza originale. 

console.log(decrescentStudent);*/

//5° ESERCIZIO
// Exercise: Extract all tags from all posts into a single array,
// removing duplicates and sorting alphabetically

/*const blogPosts = [
  { title: 'Post 1', tags: ['javascript', 'web', 'frontend'] },
  { title: 'Post 2', tags: ['nodejs', 'backend', 'javascript'] },
  { title: 'Post 3', tags: ['react', 'frontend', 'web'] },
  { title: 'Post 4', tags: ['mongodb', 'database', 'backend'] },
];


const newArray = blogPosts.flatMap(post => post.tags);
const uniqueTags = [...new Set(newArray)];
const alphabeticOrder = uniqueTags.sort();
console.log(alphabeticOrder);*/


/*Funzionerà esattamente allo stesso modo, ma post rende più chiaro cosa rappresenta.
const newArray = blogPosts.flatMap(boh => boh.tags);
console.log(newArray);
ogni oggetto di blogPosts, che noi abbiamo chiamato "post", 
si trasforma nel contenuto di "tags" e quindi avremo un nuovo array 
con il contenuto di tags.
flatMap ci permette di trasformare come map e si unificare come flat.*/
/*per rimuovere i duplicati si utilizza SET (che non permette di default i duplicati)
° flapMap( estrae tutti i tag in un array piatto);
°newSet(allTags) crea un ogetto Set che memorizza solo valori unici
°[...new Set(allTags)] converte nuovamente il Set in un array.
° ho utilizzato il .sort() per ordinare in ordine alfabetico gli elementi dell array*/

//6° ESERCIZIO
// Exercise: Given an array of products, filter only the products that are in stock
// Then filter only the days with negative temperatures

/*const temperatures = [
  { day: 'Monday', temp: -2 },
  { day: 'Tuesday', temp: -5 },
  { day: 'Wednesday', temp: 1 },
  { day: 'Thursday', temp: -3 },
  { day: 'Friday', temp: 0 },
];

const underZero = temperatures.every(under => under.temp < 0);
console.log(underZero);
const negativeTemp = temperatures.filter(t => t.temp < 0);
console.log(negativeTemp);*/

/* per controllare se tutti i giorni avevano le temperature 0 ho utilizzato il .every() che mi controlla se tutti gli elementi
soddisfano una certa condizione se restituisce true ogni singolo elemento passa il test mentre false se non lo passa.
dopo utilizzato il .every() che mi controlla la condizione della temperatura, ho utilizzato il .filter() che mi filtrava 
solo i giorni con temperature negative*/ 

//7° ESERCIZIO

// Exercise: Create a formatted string of email addresses separated by semicolons
// Format: "firstName.lastName@company.com"

/*const employees = [
  { firstName: 'John', lastName: 'Doe', department: 'IT' },
  { firstName: 'Jane', lastName: 'Smith', department: 'HR' },
  { firstName: 'Bob', lastName: 'Johnson', department: 'Sales' },
  { firstName: 'Alice', lastName: 'Brown', department: 'IT' },
];

const company = "terchcorp";

//creo un array di mail per formattare

const mail = employees.map(emp => {
  const username = `${emp.firstName}.${emp.lastName}`.toLowerCase();
  return `${username}@${company}.com`;
});

//unisco tutte le mail con il punto e virgola

const formattedMail = mail.join(";");
console.log(formattedMail);*/

/*ho creato una costante chiamata mail ho utilizzato il metodo .map() per ogni persona che dice (prendi ogni persona nella lista,
una alla volta, e trasformala in qualcosa di nuovo). In questo caso sta trasformando in un qualcosa di nuovo, in questo caso
una mail.
La emp è solo un nome che ho dato ad ogni singolo dipendente mentre lo si processa
tipo: adesso prendi John, Jane, e Bob uno per uno.
Utilizzando la stringa dei template literal dice metti il nome poi il punto e poi il cognome, per far diventare (John.Doe).
il .toLowerCase trasforma tutto in minuscolo.
con il return disciamo ( prendi l'username tipo John.Doe e aggiungi la @ e poi il nome dell'azienda terchcop e poi .com)
e lo restituisce john.doe@terchcorp.com, E lo restituiamo — cioè, diciamo al .map() di mettere questo valore nel nuovo array.
Alla fine, .map() ha fatto il suo lavoro per tutti:
John → john.doe@terchcorp.com
Jane → jane.smith@terchcorp.com
Bob → bob.johnson@terchcorp.com
Alice → alice.brown@terchcorp.com
E li ha messi tutti in un nuovo array chiamato mail.
 */