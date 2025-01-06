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
  };

  const route = useRoute();
  const { find } = useStrapi();

  const { data, status, error, refresh } = await useAsyncData<{ data: ICategory[] }>(
    "categories",
    () => find("categories")
  );

  const isPending = (status: AsyncDataRequestStatus) => status === "pending";
  const isSuccess = (status: AsyncDataRequestStatus) => status === "success";
</script>

<template>
  <div>
    <h3 v-if="error" class="text-red-900">Проверьте интернет соединение</h3>
    <div v-else class="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-4">
      <template v-if="isPending(status)">
        <UiSkeleton v-for="i in [0, 1, 2, 3]" class="h-[250px]" />
      </template>
      <UiCard v-if="isSuccess(status) && data" v-for="category in data.data" :key="category.id">
        <template #content>
          <UiCardContent>
            <h2>{{ category.name }}</h2>
          </UiCardContent>
        </template>
        <!-- <p>{{  }}</p> -->
      </UiCard>
    </div>
  </div>
</template>
