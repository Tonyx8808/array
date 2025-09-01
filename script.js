//ESERCIZIO 1

/*async function fetchUsers() {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                const users = await response.json();

                // Filtra solo gli utenti con email che terminano con .biz
                const filteredUsers = users.filter(user => user.email.endsWith('.biz'));

                // Mostra gli utenti filtrati in una lista <ul>
                const userList = document.getElementById('userList');
                userList.innerHTML = filteredUsers.map(user => 
                    `<li>${user.name} - ${user.email}</li>`
                ).join('');

                // Mostra il numero totale di utenti filtrati
                const totalCount = document.getElementById('totalCount');
                totalCount.textContent = `Totale utenti filtrati: ${filteredUsers.length}`;

            } catch (error) {
                console.error('Errore nel recupero degli utenti:', error);
            }
        }

        // Avvia la funzione al caricamento della pagina
        fetchUsers();*/

        //ESERCIZIO 2

/*async function fetchTodos() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos");
        const todos = await response.json();

        // totale todos
        const totalTodos = todos.length;

        // todos completi e incompleti
        const completeTodos = todos.filter(todo => todo.completed).length;
        const incompleteTodos = todos.filter(todo => !todo.completed).length;

        // contare i todos per utente
        const todosPerUser = todos.reduce((acc, todo) => {
            acc[todo.userId] = (acc[todo.userId] || 0) + 1;
            return acc;
        }, {});

        // trovare utente con più todos
        const topUser = Object.entries(todosPerUser).reduce((max, [userId, count]) => {
            return count > max.count ? { userId, count } : max;
        }, { userId: null, count: 0 });

        // mostrare i risultati nel DOM
        document.getElementById("totalTodos").textContent = `Totale todos: ${totalTodos}`;
        document.getElementById("completeTodos").textContent = `Todos completati: ${completeTodos}`;
        document.getElementById("incompleteTodos").textContent = `Todos incompleti: ${incompleteTodos}`;
        document.getElementById("topUser").textContent = `Utente con più todos: ${topUser.userId} (${topUser.count})`;
    } catch (error) {
        console.error('Errore nel recupero dei todos:', error);
    }
}
fetchTodos();*/

//ESERCIZIO 3

//recupero i post API

fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => response.json())
  .then(posts => {
    const searchInput = document.getElementById("searchInput");
    const postsList = document.getElementById("postsList");
    const countElement = document.getElementById("countElement");

    // funzione per visualizzare i post
    const displayPosts = (postsToShow) => {
      // svuota la lista
      postsList.innerHTML = "";

      // aggiorna il conteggio
      countElement.textContent = `Post trovati: ${postsToShow.length}`;

      // utilizzo forEach per aggiungere i risultati al DOM
      postsToShow.forEach(post => {
        const li = document.createElement("li");
        li.textContent = post.title;
        postsList.appendChild(li);
      });
    };

    // Visualizza tutti i post all'inizio
    displayPosts(posts);

    // Aggiungi l'evento di ricerca
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase();

      // Usa filter() e includes() per cercare nei titoli
      const filteredPosts = posts.filter(post =>
        post.title.toLowerCase().includes(query)
      );

      // Visualizza i post filtrati
      displayPosts(filteredPosts);
    });
  })
  .catch(error => {
    console.error('Errore nel recupero dei post:', error);
    document.getElementById('postsList').innerHTML = '<li>Errore nel caricamento dei post.</li>';
  });