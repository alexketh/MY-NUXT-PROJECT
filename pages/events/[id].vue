<script setup>
const route = useRoute();
console.log(route.params.id);

const nuxt = useNuxtApp();
console.log(nuxt);
</script>

<template lang="">
    <div>
        event id: {{ $route.params.id }}
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style> 