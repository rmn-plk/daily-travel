<script setup>
const { data, pending, error, refresh } = useCsrfFetch('/api/providers')
</script>

<template>
  <div>
    trips
  </div>
</template>