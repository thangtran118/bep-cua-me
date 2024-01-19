<script setup>
const appConfig = useAppConfig()

useSeoMeta({
  title: appConfig.pageTitle.default,
  description: appConfig.appInfo.description,
})
</script>

<template>
  <NuxtLoadingIndicator />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
