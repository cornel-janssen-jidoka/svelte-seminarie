<script setup lang="ts">
const props = defineProps({
  todo: Object
});

const emits = defineEmits(['checkmarkChange'])

function onCheckboxChange() {
  if (props.todo) {
    emits('checkmarkChange', {
      id: props.todo.id,
      value: !props.todo.checked
    })
  }
}
</script>

<template>
  <div class="todo-item-container" v-bind:class="{'todo-item-completed': todo.checked}">
    <input class="todo-item-checkbox" type="checkbox" v-model="todo.checked" v-on:change="onCheckboxChange"/>
    <div class="todo-item-text">
      {{ todo.text }}
    </div>
  </div>
</template>

<style scoped>
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
