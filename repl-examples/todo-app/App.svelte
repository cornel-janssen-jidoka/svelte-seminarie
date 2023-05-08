<script>
    import TodoItem from './TodoItem.svelte';
    import {onMount} from 'svelte';

    let todoItems = []
    $: completedTodos = todoItems.filter(v => v.done).length;
    $: {
        console.log(todoItems);
    }
    $: if (completedTodos === todoItems.length) {
        alert('You have completed all todos!');
    }

    async function loadTodoItems() {
        const res = await fetch(`http://localhost:3001/todos`);
        todoItems = await res.json();
    }

    onMount(() => {
        loadTodoItems();
    });

    function onChangedTodoItem(event) {
        todoItems = todoItems.map(todoItem => {
            if (todoItem.id === event.detail.id) {
                return {
                    ...todoItem,
                    done: event.detail.done,
                };
            }
            return todoItem;
        });
    }
</script>

<h1>
    Todo App
</h1>

<section>
    Completed todos: {completedTodos}
</section>

<section>
    {#if (completedTodos === todoItems.length)}
        <span>All Todos have been completed</span>
    {/if}

    {#each todoItems as todoItem}
        <TodoItem todoItem={todoItem} on:changed={onChangedTodoItem}/>
    {/each}
</section>