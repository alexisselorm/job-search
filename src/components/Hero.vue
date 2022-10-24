<template>
  <main>
    <section class="flex flex-col h-screen pt-10 pb-20">
      <div class="grid grid-cols-12">
        <div class="col-span-1 col-start-1"></div>
        <div class="col-span-5 col-start-2">
          <Headline />
          <JobSearchForm />
        </div>
        <div class="col-span-5 col-start-7"></div>
        <div class="col-span-1 col-start-12"></div>
      </div>
    </section>
  </main>
</template>

<script>
import Headline from "@/components/Headline";
import JobSearchForm from "./JobSearchForm.vue";
export default {
  name: "HeroSection",
  components: {
    Headline,
    JobSearchForm,
  },
};
</script>
