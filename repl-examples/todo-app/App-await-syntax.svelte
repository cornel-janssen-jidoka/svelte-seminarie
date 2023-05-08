<script>
    import TodoItem from './TodoItem.svelte';
    import {onMount} from 'svelte';

    let todoItemsPromise;

    async function loadTodoItems() {
        const res = await fetch(`http://localhost:3001/todos`);
        return await res.json();
    }

    onMount(() => {
        todoItemsPromise = loadTodoItems();
    });
</script>

<h1>
    Todo App
</h1>

{#if todoItemsPromise}
    {#await todoItemsPromise}
        <p>...loading</p>
    {:then todoItems}
        <section>
            {#each todoItems as todoItem}
                <TodoItem todoItem={todoItem}/>
            {/each}
        </section>
    {/await}
{/if}