<template>
  <UiContainer class="py-8">
    <UiButton
      class="mb-4"
      variant="secondary"
      icon-placement="left"
      icon="lucide:arrow-left"
      @click="$router.back()"
    >
      Назад
    </UiButton>
    <div v-if="status === 'success'" class="grid grid-cols-1 gap-8 md:grid-cols-3">
      <div class="col-span-2 grid grid-cols-1 gap-8">
        <img
          class="mb-8 rounded-xl"
          :src="product?.data?.image?.formats?.large?.url"
          alt="Product Image"
        />
      </div>
      <div>
        <p class="mb-4 text-3xl font-bold">{{ formatMoney(product?.data?.price) }}</p>
        <UiButton class="w-full text-lg" variant="gooeyRight">Купить</UiButton>
      </div>
    </div>
    <div v-else-if="status === 'pending'">
      <p>Loading...</p>
    </div>
    <div v-else-if="status === 'error'">
      <p>Error loading product: {{ error }}</p>
    </div>
  </UiContainer>
</template>

<script setup lang="ts">
  import type { IProduct } from "../index.vue";

  const {
    params: { id },
  } = useRoute();
  const { findOne } = useStrapi<IProduct>();

  useHead({
    title: "Страница продукта",
  });

  const {
    data: product,
    status,
    error,
    refresh,
  } = await useAsyncData<{ data: IProduct }>(`products-${id}`, () =>
    findOne("products", id as string, {
      populate: ["image"],
    })
  );
</script>
