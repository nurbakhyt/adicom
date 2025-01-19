<template>
  <div>
    <slot />
  </div>

  <UiContainer class="border-t border-gray-200 pb-12 pt-8">
    <NuxtLink
      to="/"
      class="bg-gradient-to-r from-indigo-400 to-sky-300 bg-clip-text text-xl font-bold text-transparent"
    >
      Adicom.kz &copy;{{ new Date().getFullYear() }}
    </NuxtLink>
    <p class="text-sm text-muted-foreground">All rights reserved.</p>
  </UiContainer>
</template>
