<script setup lang="ts">
import {ref} from 'vue'
import Layout from './components/Layout.vue'
import TodoItem from '@/components/TodoItem.vue'

let inputValue = ref<string | undefined>('');
const todos = ref<any[]>([]);

function createTodo () {
  if (inputValue) {
    todos.value = [
      ...todos.value,
      {
        id: todos.value.length,
        text: inputValue.value,
        checked: false
      }
    ]

    inputValue.value = undefined;
  }
}

function checkTodo (event: any) {
  todos.value = todos.value.map(todo => {
    if (todo.id === event.detail.id) {
      return {
        ...todo,
        checked: event.detail.value
      }
    }

    return todo
  })
}
</script>

<template>
  <Layout>
    <div class="create-todo-container">
      <label for="todo-input">Todo:</label>
      <input type="text" id="todo-input" placeholder="New todo ..." v-model="inputValue">
      <button v-on:click="createTodo">Create</button>
    </div>

    <div class="todos-container">
      <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo" v-bind:checkmarkChange={checkTodo} />
    </div>
  </Layout>
</template>