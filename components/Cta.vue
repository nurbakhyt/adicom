<template>
  <div class="bg-sky-600/75 bg-[url('/images/night-sky.avif')] bg-cover bg-center">
    <UiContainer
      class="py flex min-h-screen flex-col items-center justify-center py-16 text-center lg:py-24"
    >
      <h3 class="text mb-4 text-2xl text-white md:mb-5 md:text-4xl lg:text-5xl">
        <span
          class="bg-gradient-to-r from-indigo-400 to-sky-200 bg-clip-text text-3xl font-bold text-transparent md:text-5xl"
          >Adi.com.kz</span
        >
        каталог изображений с фотопечатью натяжных потолков
      </h3>
      <p class="text-white md:text-xl">Больше 1000 рисунков на выбор</p>
      <div class="mt-8 flex w-full flex-col-reverse justify-center gap-3 md:w-auto md:flex-row">
        <UiButton size="lg" @click="triggerError">
          Посмотреть
          <Icon class="size-4" name="lucide:arrow-right" />
        </UiButton>
      </div>
    </UiContainer>
  </div>
</template>

<script lang="ts" setup>
  const triggerError = () => {
    throw new Error("Nuxt Button Error");
  };
</script>
