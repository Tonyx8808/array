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

async function fetchTodos() {
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
fetchTodos();