<script>
	import { createEventDispatcher } from 'svelte';

	export let todo;
	const dispatch = createEventDispatcher();

	function onCheckboxChange() {
		dispatch('checkmarkChange', {
			id: todo.id,
			value: !todo.checked
		});
	}
</script>

<div class="todo-item-container" class:todo-item-completed={todo.checked}>
	<input class="todo-item-checkbox" type="checkbox" on:change={onCheckboxChange} bind:checked={todo.checked}/>
	<div class="todo-item-text">
		{todo.text}
	</div>
</div>

<style>
	.todo-item-container {
		display: flex;
		border: 1px solid black;
		padding: 10px;
	}

	.todo-item-checkbox {
		width: 50px;
	}

	.todo-item-text {
		flex-grow: 2;
	}

	.todo-item-completed {
		border-color: grey;
		color: grey;
	}
</style>
