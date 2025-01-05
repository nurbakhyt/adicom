<script setup lang="ts">
  const route = useRoute();
  const { find } = useStrapi();

  const { data, pending, error, refresh } = await useAsyncData("products", () => find("products"));
</script>

<template>
  <div>
    <div v-if="!error" class="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-4">
      <template v-if="pending">
        <UiSkeleton v-for="i in [0, 1, 2, 3]" class="h-[250px]" />
      </template>
      <UiCard v-for="product in data.data" :key="product.id">
        <h2>{{ product.title }}</h2>
        <p>{{ product.price }}</p>
      </UiCard>
    </div>

    <h3 v-else class="text-red-900">Проверьте интернет соединение</h3>
  </div>
</template>
