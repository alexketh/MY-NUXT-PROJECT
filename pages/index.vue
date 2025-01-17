<template>
  <div class="Main">
    <h1>Main Page</h1>
    <!-- Render backend data  -->
    <pre>{{ data }}</pre>
    <!-- Shared State Management -->
    <div id="main">
      Counter: {{ counter }}
      <button @click="counter++">
        +
      </button>
      <button @click="counter--">
        -
      </button>
    </div>
    <Counter id="counter"/>
    <!-- Renders Content Page -->
    <ContentRenderer v-if="home" :value="home" />
    <div v-else>Home not found</div>
    <!-- Renders Icon  -->
    <IconsBell />
    <!-- Renders images from assets and public -->
    <img src="@/assets/2.jpg" alt="" />
    <img src="/3.jpg" alt="" />
  </div>
</template>

<script setup>
//fetching api/hello.ts
const { data } = await useFetch('/api/hello')
console.log(data.value);
//using pinia
import { useCounterStore } from "~/stores/myStore";
const store = useCounterStore();

console.log(store);

//states composable
const counter = useCounter();

//useState basic usage
// const counter = useState('counter', () => Math.round(Math.random() * 1000))

// using composables
const { sayHello } = useUtils();
sayHello();

// using plugin
const { $sayHello } = useNuxtApp();
$sayHello("Alex from Plugins");

// to use specific middleware without .global
definePageMeta({
  middleware: "auth"
})

//using nuxtContent 
const { data: home } = await useAsyncData(() => queryCollection('content').path('/').first())

useSeoMeta({
  title: home.value?.title,
  description: home.value?.description
})
</script>

<style></style>