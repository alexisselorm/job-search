<template>
  <div>
    <main-nav />
    <HeroSection />
  </div>
</template>

<script>
import MainNav from "@/components/MainNav";
import HeroSection from "@/components/Hero";
export default {
  name: "App",
  components: {
    MainNav,
    HeroSection,
  },
};
</script>
