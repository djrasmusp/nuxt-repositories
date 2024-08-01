<script setup lang="ts">
const { data } = await useFetchTest('headphones')

</script>

<template>
  <div>

    <ChildComponent />
    ---
    <pre>{{ data }}</pre>
    ---
    <Child2Component />
  </div>
</template>

<style scoped></style>
