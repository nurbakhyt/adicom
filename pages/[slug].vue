<template>
  <UiContainer class="py-16 lg:py-24">
    <Navigation class="mb-8 mt-4" />

    <section class="mt-12 grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
      <UiAlert
        v-if="category?.data[0]?.products && category?.data[0]?.products?.length < 1"
        description="Нет картинок для отображения"
        class="col-span-full"
      >
        <template #icon>
          <Icon name="lucide:info" class="mt-0.5 size-4 text-blue-500" aria-hidden="true" />
        </template>
      </UiAlert>

      <product-card
        v-if="category?.data && category?.data[0]?.products"
        v-for="p in category?.data[0]?.products"
        :key="p.id"
        :item="p"
      />
    </section>
  </UiContainer>
</template>

<script setup lang="ts">
  import type { ICategory, IProduct } from "./index.vue";

  const {
    params: { slug },
  } = useRoute();
  const { findOne } = useStrapi<ICategory[]>();

  // const {
  //   data: products,
  //   status,
  //   error,
  //   refresh,
  // } = await useAsyncData<{ data: IProduct[] }>(`products`, () =>
  //   findOne("products", {
  //     filters: { category: { slug: { $eq: slug } } },
  //     populate: ["image"],
  //   })
  // );

  const {
    data: category,
    status,
    error,
  } = await useAsyncData<{ data: ICategory[] | null }>(`category-${slug}`, () =>
    findOne("categories", {
      filters: { slug: { $eq: slug } },
      populate: ["products", "products.image"],
    })
  );

  useHead({
    title: "Картинки",
  });
</script>
