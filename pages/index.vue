<template>
  <div>
    <Cta />

    <UiContainer class="py-16 lg:py-24">
      <template v-if="error">
        <h3 class="text-red-900">Проверьте интернет соединение</h3>
      </template>

      <Landing v-if="data" :products="data?.data" />
    </UiContainer>
  </div>
</template>

<script setup lang="ts">
  import type { AsyncDataRequestStatus } from "#app";

  type ILocale = "en" | "ru" | "kz";

  export type ICategory = {
    id: number;
    documentId: string;
    name: string;
    description: string;
    slug: string;
    locale: ILocale;
    products?: IProduct[];
  };

  export type IImage = {
    id: number;
    documentId: string;
    name: string;
    alternativeText: string;
    caption: string;
    width: number;
    height: number;
    formats: {
      thumbnail: {
        url: string;
        width: number;
        height: number;
      };
      large: {
        url: string;
        width: number;
        height: number;
      };
      medium: {
        url: string;
        width: number;
        height: number;
      };
      small: {
        url: string;
        width: number;
        height: number;
      };
    };
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string;
    provider: string;
    provider_metadata: string;
    created_at: string;
    updated_at: string;
  };

  export type IProduct = {
    id: number;
    documentId: string;
    name: string;
    description: string;
    price: number;
    slug: string;
    locale: ILocale;
    image: IImage;
    category?: ICategory;
  };

  const route = useRoute();
  const { find } = useStrapi();
  const runtimeConfig = useRuntimeConfig();

  useHead({
    title: "Главная страница",
  });

  const { data, status, error, refresh } = await useAsyncData<{ data: IProduct[] }>(
    "products",
    () => find("products", { populate: ["category", "image"] })
  );

  const isPending = (status: AsyncDataRequestStatus) => status === "pending";
  const isSuccess = (status: AsyncDataRequestStatus) => status === "success";
</script>
