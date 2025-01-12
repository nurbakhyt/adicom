<template>
  {{ id }}
</template>

<script setup lang="ts">
  const {
    params: { id },
  } = useRoute();
</script>
