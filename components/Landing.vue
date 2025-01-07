<template>
  <UiContainer class="py-16 lg:py-24">
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
    <div
      title="Blog page on image"
      class="mt-10 hidden h-60 w-full items-end overflow-hidden rounded-lg bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover drop-shadow lg:mt-20 lg:flex lg:h-[720px]"
    >
      <div class="w-full border-t border-white/10 bg-black/40 p-10 text-white backdrop-blur-2xl">
        <NuxtLink to="#">
          <h2 class="mb-2 text-2xl font-semibold">
            Improve your design skills: Develop an "eye" for design
          </h2>
        </NuxtLink>
        <p>
          Tools and trends change, but good design is timeless. Learn how to quickly develop an
          "eye" for design.
        </p>

        <div class="mt-5 flex flex-wrap items-center gap-2">
          <template v-for="t in ['Design', 'Research', 'Presentation']" :key="t">
            <UiBadge class="border-white px-3 py-1 text-sm text-white" variant="outline">{{
              t
            }}</UiBadge>
          </template>
        </div>
      </div>
    </div>

    <div v-if="products.length > 0" class="mb-10 mt-16 lg:hidden">
      <NuxtLink :to="`/products/${products[0].id}`">
        <!-- eslint-disable-next-line vue/html-self-closing -->
        <img
          v-if="products[0].image"
          :src="getStrapiMedia(products[0].image.formats.medium.url)"
          :alt="products[0].title"
          class="mb-5 h-[240px] w-full rounded-lg object-cover shadow"
        />
      </NuxtLink>
      <p class="mb-2 text-sm font-semibold text-primary">{{ products[0].price }}</p>
      <p class="mb-2 text-xl font-semibold lg:text-2xl">{{ products[0].title }}</p>
      <p
        v-if="products[0].description"
        class="mb-5 line-clamp-2 text-ellipsis text-muted-foreground"
      >
        {{ products[0].description }}
      </p>
    </div>

    <!-- Filter -->
    <UiTabs v-if="categories" class="mt-5" :default-value="categories.data[0].name">
      <UiTabsList :pill="false" class="relative h-auto w-full justify-start gap-3 overflow-x-auto">
        <template v-for="c in categories.data" :key="c.name">
          <UiTabsTrigger
            class="p-2 focus-visible:ring-0 focus-visible:ring-offset-0"
            :pill="false"
            :value="c.name"
          >
            {{ c.name }}
          </UiTabsTrigger>
        </template>
        <UiTabsIndicator />
      </UiTabsList>
    </UiTabs>

    <!-- Articles -->

    <section class="mt-12 grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
      <template v-for="p in products" :key="n">
        <div>
          <NuxtLink :to="`/products/${p.id}`">
            <!-- eslint-disable-next-line vue/html-self-closing -->
            <img
              v-if="p.image"
              :src="getStrapiMedia(p.image.formats.thumbnail.url)"
              :alt="p.title"
              class="mb-5 h-[240px] w-full rounded-lg object-cover shadow"
            />
          </NuxtLink>
          <p class="mb-2 text-sm font-semibold text-primary">{{ p.price }}</p>
          <p class="mb-2 text-xl font-semibold lg:text-2xl">{{ p.title }}</p>
          <p v-if="p.description" class="mb-5 line-clamp-2 text-ellipsis text-muted-foreground">
            {{ p.description }}
          </p>
        </div>
      </template>
    </section>
  </UiContainer>
</template>

<script lang="ts" setup>
  import { getStrapiMedia } from "~/utils/media";
  import type { ICategory, IProduct } from "~/pages/index.vue";

  interface IProps {
    products: IProduct[];
  }

  const { products } = defineProps<IProps>();
  const { find } = useStrapi();

  const {
    data: categories,
    status,
    error,
    refresh,
  } = await useAsyncData<{ data: ICategory[] }>("categories", () => find("categories"));
</script>
