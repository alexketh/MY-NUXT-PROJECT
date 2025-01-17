<template>
  <div class="Main container mx-auto my-4">
    <h1>Main Page</h1>
    <!-- Render api data  -->
    <pre>{{ productStatus.value == 'pending' ? "Loading..." : products }}</pre>
    <pre>{{ pStatus.value == 'pending' ? "Loading..." : productCount }}</pre>
    <button @click="refresh">Refresh</button>
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
//using useAsyncData
const { data: productCount, status: pStatus } = await useLazyAsyncData("pcounter", () => 
  $fetch('/api/pcounter')
);
console.log(productCount.value)
console.log(pStatus.value)
const refresh = () => refreshNuxtData("pcounter");

//useFetch json data from api 
//you have to use { data } for const or rename using { data: whateverName }
const { data: products, status: productStatus } = await useLazyFetch('/api/products');
// console.log(toRaw(products.value));
console.log(productStatus.value);

//fetching api/hello.ts
const { data: hello } = await useFetch('/api/hello');
console.log(hello.value);

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

// useSeoMeta({
//   title: home.value?.title,
//   description: home.value?.description
// })
</script>

<style></style>