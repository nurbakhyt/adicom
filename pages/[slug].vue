<template>
  <div>
    <Navigation class="mb-8 mt-4" />

    <section class="mt-12 grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
      <UiAlert
        v-if="products && products?.data?.length < 1"
        description="Нет картинок для отображения"
        class="col-span-full"
      >
        <template #icon>
          <Icon name="lucide:info" class="mt-0.5 size-4 text-blue-500" aria-hidden="true" />
        </template>
      </UiAlert>

      <product-card v-for="p in products?.data" :key="p.id" :item="p" />
    </section>
  </div>
</template>

<script setup lang="ts">
  import type { ICategory, IProduct } from "./index.vue";

  const {
    params: { slug },
  } = useRoute();
  const { findOne } = useStrapi<ICategory[]>();

  const {
    data: products,
    status,
    error,
    refresh,
  } = await useAsyncData<{ data: IProduct[] }>(`products`, () =>
    findOne("products", {
      filters: { category: { slug: { $eq: slug } } },
      populate: ["image"],
    })
  );
</script>
