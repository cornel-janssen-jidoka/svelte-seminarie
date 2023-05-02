<template>
  <div class="container">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  height: 1024px;
  justify-content: center;
}

.content {
  width: 1024px;
}
</style>
