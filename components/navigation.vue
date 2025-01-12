<template>
  <div class="flex w-full items-center justify-center">
    <UiNavigationMenu>
      <UiNavigationMenuList>
        <UiNavigationMenuItem>
          <UiNavigationMenuLink as-child>
            <UiButton to="/" variant="ghost">Все</UiButton>
          </UiNavigationMenuLink>
        </UiNavigationMenuItem>
        <UiNavigationMenuItem v-if="items" v-for="c in items.data" :key="c.name">
          <UiNavigationMenuLink as-child>
            <UiButton
              :to="`/${c.slug}`"
              :variant="route.params.slug === c.slug ? 'outline' : 'ghost'"
            >
              {{ c.name }}
            </UiButton>
          </UiNavigationMenuLink>
        </UiNavigationMenuItem>
      </UiNavigationMenuList>
    </UiNavigationMenu>
  </div>
</template>

<script setup lang="ts">
  import type { ICategory } from "~/pages/index.vue";

  const { find } = useStrapi();
  const route = useRoute();

  const {
    data: items,
    status,
    error,
    refresh,
  } = await useAsyncData<{ data: ICategory[] }>("categories", () => find("categories"));
</script>
