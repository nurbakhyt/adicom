<template>
  <div class="bg-sky-600/75 bg-[url('/images/night-sky.avif')] bg-cover bg-center">
    <UiContainer
      class="py flex min-h-screen flex-col items-center justify-center py-16 text-center lg:py-24"
    >
      <h3
        class="title mb-4 bg-gradient-to-r from-orange-200 to-violet-200 bg-clip-text text-3xl font-semibold text-transparent md:mb-5 md:text-4xl"
      >
        Adi.com.kz фотопечать натяжных потолков.
      </h3>
      <p
        class="bg-gradient-to-r from-green-400 to-yellow-400 bg-clip-text text-transparent md:text-xl"
      >
        Больше 1000 рисунков на выбор
      </p>
      <div class="mt-8 flex w-full flex-col-reverse justify-center gap-3 md:w-auto md:flex-row">
        <UiButton size="lg">
          Посмотреть
          <Icon class="size-4" name="lucide:arrow-right" />
        </UiButton>
      </div>
    </UiContainer>
  </div>
</template>

<script lang="ts" setup></script>
