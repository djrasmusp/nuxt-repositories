<script setup lang="ts">
const { indexPage } = await useFetchIndex()
</script>

<template>
  <div>
    <pre>{{ indexPage }}</pre>
  </div>
</template>

<style scoped></style>
