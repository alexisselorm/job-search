<template>
  <div>
    <main-nav />
    <HeroSection />
  </div>
</template>

<script>
import MainNav from "@/components/Navigation/MainNav";
import HeroSection from "@/components/JobSearch/Hero";
export default {
  name: "App",
  components: {
    MainNav,
    HeroSection,
  },
};
</script>
