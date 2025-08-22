//1° ESERCIZIO
//// Exercise: Given an array of products, filter only the products that are in stock
// and return an array with their names in uppercase

////const products = [
  //{ id: 1, name: 'Laptop', price: 999, inStock: true },
  //{ id: 2, name: 'Mouse', price: 25, inStock: false },
//  { id: 3, name: 'Keyboard', price: 75, inStock: true },
  //{ id: 4, name: 'Monitor', price: 350, inStock: false },
  //{ id: 5, name: 'Headphones', price: 85, inStock: true },
//];

/*filtro la condizione dei device disponibili con product.filter (serve a creare un nuovo array che contengono solo gli elementi
che soddisfano una condizione specifica in questo caso true ------- mentre product.inStock è una 
proprietà di ogni ogetto del prodotto che può avere come valore true o false)
in questo caso è true perchè si è filtrato solamente i prodotti disponibili*/

/*const availableDevice = products.filter(products => products.inStock);
console.log(availableDevice);//

const present = products
.filter(s => s.inStock)
.map(s => s.name.toUpperCase());

console.log(present);*/
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

//8° ESERCIZIO


// Exercise: Group transactions by category and calculate total spent per category

/*const transactions = [
  { id: 1, category: 'Food', amount: 25 },
  { id: 2, category: 'Transport', amount: 15 },
  { id: 3, category: 'Food', amount: 30 },
  { id: 4, category: 'Entertainment', amount: 50 },
  { id: 5, category: 'Transport', amount: 20 },
  { id: 6, category: 'Food', amount: 15 },
];

const totalByCategory = transactions.reduce((acc, transaction) => {
  const category = transaction.category;
  const amount = transaction.amount;
  if (!acc[category]) {
    acc[category] = 0;
  }
  acc[category] += amount;
  return acc;
}, {});
console.log(totalByCategory);*/
/*ho utilizzato il .reduce per Partire da un oggetto vuoto: {} → dove salverà i totali.
Guardare ogni transazione.
Aggiungere l’importo alla categoria giusta.
Se la categoria non esiste ancora (es. "Food"), la crea con valore 0, poi ci somma l’importo.*/

//9° ESERCIZIO

// Calculate the average age of users who have verified email

/*const userData = [
  { name: 'Tom', age: 25, emailVerified: true },
  { name: 'Lisa', age: 30, emailVerified: false },
  { name: 'Mike', age: 22, emailVerified: true },
  { name: 'Sarah', age: 28, emailVerified: true },
  { name: 'James', age: 35, emailVerified: false },
];
const userVerified = userData.filter(user => user.emailVerified);
console.log("User emailVerified", userVerified);
const sommaEta = userVerified.reduce((somma, user) => somma + user.age, 0);
const etaMedia = sommaEta / userVerified.length;

console.log("età Media", etaMedia);*/

/* filter() crea un nuovo array con solo le persone che hanno emailVerified: true.
user.emailVerified è un booleano (true o false), quindi:
se è true → l’utente viene incluso
se è false → viene escluso 
.reduce() serve a comprimere un array in un unico valore.
Parte da 0 (il valore iniziale).
Per ogni persona, aggiunge la sua età (user.age) alla somma.
userData.length = numero di persone = 5*/

//10° ESERCIZIO

// Exercise: Find the index of the task with id 3 and remove it from the array
// Then add a new task at that position

/*const tasks = [
  { id: 1, task: 'Study JavaScript', completed: true },
  { id: 2, task: 'Practice coding', completed: false },
  { id: 3, task: 'Read documentation', completed: false },
  { id: 4, task: 'Build project', completed: false },
]

const index = tasks.findIndex(item => item.id === 3);

console.log("Indice del task con id 3", index);

if (index !== -1) { //controllo di sicurezza
  tasks.splice(index, 1, {/* index è il risultato di tasks.findIndex(...)
Se findIndex trova l’elemento → restituisce il suo indice (es: 2)
Se non trova nulla → restituisce -1*/
   // id: 5,
    //task: "Watch tutorial",
   // completed: false
  //});
//}
//console.log("Aggiornato", tasks);

/*findIndex(item => item.id === 3) → cerca il task con id uguale a 3 → indice 2
splice(index, 1, nuovoElemento) → rimuove 1 elemento e lo sostituisce con il nuovo
Il vecchio task { id: 3, ... } viene sostituito da uno nuovo
Se volessi solo rimuovere il task con id 3: tasks.splice(index, 1);
Controllo di sicurezza: if (index !== -1)
È fondamentale verificare che l’elemento esista prima di modificare l’array.
Evita operazioni su posizioni non valide (es: splice(-1, 1, ...) non avrebbe senso).*/ 

//ESERCIZIO CON .map()

/*const tasks = [
  { id: 1, task: 'Study JavaScript', completed: true },
  { id: 2, task: 'Practice coding', completed: false },
  { id: 3, task: 'Read documentation', completed: false },
  { id: 4, task: 'Build project', completed: false },
]

//creo un nuovo task al posto di id: 3

const newTask = {
  id: 5,
  task: "Watch tutorial",
  completed: false
};

//utilizzo .map() per creare un nuovo array

const uptadedTasks = tasks.map(tasks => {
  // Se il task ha id === 3, sostituiscilo con nuovoTask
  // Altrimenti, lascialo invariato
  return tasks.id === 3 ? newTask : tasks;
});

console.log("Original", tasks);
console.log("Updated", uptadedTasks);

// map() è perfetto per aggiornare un elemento mantenendo l’immutabilità.
//È più sicuro, prevedibile e adatto alle app moderne.
/*Cosa succede?
map() scorre ogni elemento dell’array tasks
Per ogni task:
Se è quello con id: 3 → lo sostituisce con il nuovo
Se è un altro → lo lascia com’è
Alla fine, restituisce un nuovo array chiamato updatedTasks
 Perché non usare splice?
splice() modifica l’array originale → non è sicuro in alcuni contesti (es. React)
map() crea un nuovo array → più sicuro, prevedibile e facile da controllare
Riassunto in 3 punti
map() crea un nuovo array, non cambia quello vecchio. Controlla ogni elemento: se è quello che cerchi, 
lo sostituisce; altrimenti lo copia.
 È il modo pulito e sicuro per aggiornare una lista.
Immagina di avere una fotocopia di un foglio con una lista:
Con splice: cancelli e riscrivi direttamente sul foglio originale.
Con map: fai una nuova fotocopia con le modifiche già fatte.*/

//11° ESERCIZIO

// Exercise: Double the scores of all students who passed (score >= 60)
// and return only those with final score above 100

/*const examScores = [
  { student: 'Alex', score: 45 },
  { student: 'Beth', score: 65 },
  { student: 'Carl', score: 55 },
  { student: 'Dana', score: 70 },
  { student: 'Eric', score: 80 },
];

const result = examScores
.filter( student => student.score >= 60) // filtro chi ha passato
.map(student =>({    //raddoppio il punteggio
  student: student.student, //****** 
  score: student.score * 2 //*****
}))
.filter(student => student.score > 100); //solo punteggio > 100
console.log(result);*/

//12° ESERCIZIO

// Exercise: Flatten the nested array structure and filter out all numbers less than 5

/*const nestedNumbers = [
  [1, 2, [3, 4]],
  [5, [6, [7, 8]]],
  [9, 10],
  [[11, 12], 13],
];

const flatArray = nestedNumbers.flat(Infinity);
const lessNumber = nestedNumbers
.flat(Infinity) //estrae tutti i numeri
.filter(num => num < 10); //tengo solo num minori di 10
console.log(lessNumber);*/

//13°ESERCIZIO

// Exercise: Given an array of products, filter only the products that are in stock

/*const library = [
  { title: 'The Great Gatsby', author: 'Fitzgerald', year: 1925 },
  { title: 'To Kill a Mockingbird', author: 'Lee', year: 1960 },
  { title: '1984', author: 'Orwell', year: 1949 },
  { title: 'Animal Farm', author: 'Orwell', year: 1945 },
  { title: 'Brave New World', author: 'Huxley', year: 1932 },
  { title: 'Fahrenheit 451', author: 'Bradbury', year: 1953 },
];

const bookYears = library.sort((a, b) => a.year - b.year);

const alphabeticOrder = [...library].sort((a, b) => a.title.localeCompare (b.title));
console.log("ordinamento per data", bookYears);
console.log("in ordine alfabetico", alphabeticOrder)*/

//14° ESERCIZIO
// Exercise: Given an array of products, filter only the products that are in stock

/*const inventory = [
  { name: 'Shirt', category: 'Clothing', price: 30 },
  { name: 'Laptop', category: 'Electronics', price: 1000 },
  { name: 'Shoes', category: 'Footwear', price: 80 },
  { name: 'Phone', category: 'Electronics', price: 600 },
  { name: 'Jeans', category: 'Clothing', price: 50 },
  { name: 'Watch', category: 'Accessories', price: 200 },*/
//];

//const selectedCategories = ['Electronics', 'Clothing']; //definizione di un array delle categorie che interessano

/* 1- creo una nuova variabile che conterrà i prodotti filtrati
2- uso il metodo .filter() sull'array "inventory"
3- per ogni prodotto nell'inventario, verifica la condizione.*/

/*controllo se la categoria del prodotto corrente è presente nell'array selectedCategories
se si, il prodotto viene incluso nel nuovo array*/

//const inStockSelectedProducts = inventory.filter(product => {
  //return selectedCategories.includes(product.category)

   /*Quindi tutti i prodotti delle categorie 'Electronics' o 'Clothing' saranno inclusi,
   anche se non sono disponibili)*/

//});

/*stampo il risultato del filtro nella console e
si vede i prodotti che appartengono alle categorie interessate.*/

//console.log(inStockSelectedProducts);*/

//15° ESERCIZIO

// Exercise: Convert the array of key-value pairs into an object

//const keyValuePairs = [
  //['name', 'John'],
  //['age', 30],
  //['city', 'New York'],
  //['profession', 'Developer'],
  //['hobby', 'Photography'],
//];

//const obj = Object.fromEntries(keyValuePairs);
//console.log(obj);

/* Object.fromEntries() → metodo del costruttore Object
Accetta un array di coppie [chiave, valore]
Restituisce un oggetto JavaScript*/

//16° ESERCIZIO

// Exercise: Add a 'hasDiscount' property to each product
// Set it to true if any of its tags includes 'sale' or 'promo'

// Array dei prodotti (catalogo)

//const catalog = [
// { id: 1, name: 'Tablet', tags: ['electronics', 'sale'] },
 // { id: 2, name: 'Chair', tags: ['furniture', 'office'] },
  //{ id: 3, name: 'Desk', tags: ['furniture', 'promo', 'office'] },
//  { id: 4, name: 'Lamp', tags: ['lighting', 'home'] },
//];

/*Uso .map() per creare un NUOVO array di prodotti
 Ogni prodotto sarà uguale al precedente, ma con una nuova proprietà: hasDiscount*/

//const catalogWithDiscount = catalog.map(product => {

  /* Controllo se il prodotto ha almeno uno dei tag di sconto
   .includes('sale') → true se 'sale' è presente nei tag
  .includes('promo') → true se 'promo' è presente nei tag
   Usiamo l'operatore OR (||) → se almeno uno è vero, hasDiscount sarà true*/

  //const hasDiscount = product.tags.includes('sale') || product.tags.includes('promo');
  
   /* Creo un nuovo oggetto che:
   - copia tutte le proprietà del prodotto originale (...product)
  - aggiunge la nuova proprietà 'hasDiscount' con il valore calcolato */

  //return {
    //...product,
    //hasDiscount: hasDiscount  // si può scrivere solo `hasDiscount` (shorthand)
  //};
//});

// Stampo il risultato finale: il catalogo aggiornato con la nuova proprietà

//console.log(catalogWithDiscount);

//17° ESERCIZIO


// Exercise: Extract emails of active users older than 25 who joined after 2020
// Return them in lowercase

//const accounts = [
//  { email: 'John@EXAMPLE.com', age: 28, active: true, joinYear: 2021 },
//  { email: 'MARY@example.COM', age: 24, active: true, joinYear: 2022 },
  //{ email: 'Bob@EXAMPLE.com', age: 30, active: false, joinYear: 2021 },
//  //{ email: 'alice@Example.COM', age: 26, active: true, joinYear: 2019 },
  //{ email: 'TOM@example.com', age: 27, active: true, joinYear: 2023 },
//];

//const emailOver = accounts
  //.filter(a => a.active && a.age > 25) 

  /*filtra solo gli account che soddisfano tutte e tre le condizioni
  1- a.active se l utente è attivo
  2- a.age > 25 se l utente ha più di 25 anni
  3- si è iscritto dopo il 2020
  a- è un abbreviazione di "account"
  &&- operatore logico AND: tutte le condizioni devono essere true*/
  
  //.map(s => s.email.toLowerCase());

  /* 
  1- prende ogni account rimasto dopo il filtro
  2- estrae la proprietà AND
  3- la trasforma in minuscolo con .toLowerCase()*/
  
//console.log(emailOver);
