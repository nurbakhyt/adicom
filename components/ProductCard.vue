<template>
  <div>
    <NuxtLink :to="`/products/${item.documentId}`">
      <!-- eslint-disable-next-line vue/html-self-closing -->
      <img
        v-if="item.image"
        :src="item.image.formats.small.url"
        :alt="item.name"
        class="mb-5 h-[240px] w-full rounded-lg object-cover shadow"
      />
    </NuxtLink>
    <p class="mb-2 text-sm font-semibold text-primary">{{ formatMoney(item.price) }}</p>
    <p v-if="item.name" class="mb-2 text-xl font-semibold lg:text-2xl">{{ item.name }}</p>
    <p v-if="item.description" class="mb-5 line-clamp-2 text-ellipsis text-muted-foreground">
      {{ item.description }}
    </p>
  </div>
</template>

<script setup lang="ts">
  import type { IProduct } from "~/pages/index.vue";

  const { item } = defineProps<{ item: IProduct }>();
</script>
