<template>
  <main class="flex flex-col h-screen">
    <section class="flex flex-col pt-10 pb-20">
      <div class="grid grid-cols-12">
        <div class="col-span-1 col-start-1"></div>
        <div class="col-span-5 col-start-2 text-start">
          <Headline />
          <JobSearchForm />
        </div>
        <div class="self-center col-span-5 col-start-7 justify-self-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png"
            alt="vue"
            class="object-contain w-80 h-80"
          />
        </div>
        <div class="col-span-1 col-start-12"></div>
      </div>
    </section>
    <Spotlight class="flex flex-row justify-center pb-16">
      <template #default="slotProps">
        <router-link
          to="/jobs/results"
          class="flex flex-col mx-5 border rounded-leg w-72 bg-brand-gray-2 h-96"
        >
          <img :src="slotProps.img" class="object-contain" alt="" />
          <div class="h-48 px-6 py-4 mt-3">
            <h3 class="text-lg font-medium">{{ slotProps.title }}</h3>

            <p class="mt-3 text-sm">{{ slotProps.description }}</p>
          </div>

          <router-link
            to="/jobs/results"
            class="px-6 pb-4 text-sm text-brand-blue-1"
            >See jobs</router-link
          >
        </router-link></template
      >
    </Spotlight>
  </main>
</template>

<script>
import Headline from "@/components/JobSearch/Headline";
import JobSearchForm from "@/components/JobSearch/JobSearchForm.vue";
import Spotlight from "@/components/JobSearch/Spotlight";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Hero",
  components: {
    Headline,
    JobSearchForm,
    Spotlight,
  },
};
</script>
