<script>
    import {createEventDispatcher} from 'svelte';

    export let todoItem;

    let done = false;

    const dispatch = createEventDispatcher();

    function onToggleTodoItem() {
        done = true;
        dispatch('changed', {
            ...todoItem,
            done: !todoItem.done
        });
    }
</script>

<li>
    <span>{todoItem.id}. {todoItem.title}</span>
    <input type=checkbox bind:checked={todoItem.done} on:click={onToggleTodoItem}/>
</li>

<style>
    li {
        display: flex;
        justify-content: space-between;
        padding: 0.5rem;
        list-style-type: none;
        border: 1px solid black;
    }
</style>