<template>
  <main>
    <section class="flex flex-col h-screen pt-20 pb-20 bg-yellow-200">
      <div class="grid grid-cols-12">
        <div class="col-span-1 col-start-1 border border-blue-700">1</div>
        <div class="col-span-5 col-start-2 border border-blue-700">
          <Headline />
        </div>
        <div class="col-span-5 col-start-7 border border-blue-700">5</div>
        <div class="col-span-1 col-start-12 border border-blue-700">1</div>
      </div>
    </section>
  </main>
</template>

<script>
import Headline from "@/components/Headline";
export default {
  name: "HeroSection",
  components: {
    Headline,
  },
};
</script>
