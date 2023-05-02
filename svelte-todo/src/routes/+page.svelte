<script>
    import TodoItem from "../components/TodoItem.svelte";
    let todos = [];
    let inputValue;

    function createTodo() {
        if (inputValue) {
            todos = [
                ...todos,
                {
                    id: todos.length,
                    text: inputValue,
                    checked: false,
                }
            ];

            inputValue = undefined;
        }
    }

    function checkTodo(event) {
        todos = todos.map(todo => {
            if (todo.id === event.detail.id) {
                return {
                    ...todo,
                    checked: event.detail.value
                };
            }

            return todo;
        })
    }
</script>

<div class="create-todo-container">
    <label for="todo-input">Todo:</label>
    <input type="text" id="todo-input" placeholder="New todo ..." bind:value={inputValue}>
    <button on:click={createTodo}>Create</button>
</div>

<div class="todos-container">
    {#each todos as todo}
        <TodoItem todo={todo} on:checkmarkChange={checkTodo}/>
    {/each}
</div>
