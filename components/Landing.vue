<template>
  <p class="mb-3 font-semibold text-primary">Мы предлагаем</p>
  <h1
    class="mb-4 bg-gradient-to-r from-orange-400 to-violet-500 bg-clip-text text-4xl font-semibold text-transparent lg:mb-6 lg:text-5xl"
  >
    широкий выбор картинок
  </h1>
  <p class="text-lg text-muted-foreground lg:text-xl">
    для натяжных потолков, которые подойдут под любой интерьер.
  </p>

  <!-- Featured blog image -->
  <div v-if="products.length > 0" class="mb-10 mt-16">
    <NuxtLink :to="`/products/${products[0].documentId}`">
      <!-- eslint-disable-next-line vue/html-self-closing -->
      <img
        v-if="products[0].image"
        :src="getStrapiMedia(products[0].image.formats.large.url)"
        :alt="products[0].name"
        class="mb-5 h-[240px] w-full rounded-lg object-cover shadow"
      />
    </NuxtLink>
    <p class="mb-2 text-sm font-semibold text-primary">{{ formatMoney(products[0].price) }}</p>
    <p class="mb-2 text-xl font-semibold lg:text-2xl">{{ products[0].name }}</p>
    <p v-if="products[0].description" class="mb-5 line-clamp-2 text-ellipsis text-muted-foreground">
      {{ products[0].description }}
    </p>
  </div>

  <Navigation />

  <section class="mt-12 grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
    <product-card v-for="p in products" :key="p.id" :item="p" />
  </section>
</template>

<script lang="ts" setup>
  import type { ICategory, IProduct } from "~/pages/index.vue";

  interface IProps {
    products: IProduct[];
  }

  const { products } = defineProps<IProps>();
</script>
