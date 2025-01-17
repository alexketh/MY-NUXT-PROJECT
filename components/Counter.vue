<template>
  <div>
    <div>
      Counter: {{ counter }}
      <button @click="counter++">
        +
      </button>
      <button @click="counter--">
        -
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
//using states composable
const counter = useCounter();
</script>