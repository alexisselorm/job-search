<template>
  <HeaderContainer>
    <template #title>
      <h1 class="w-full text-4xl font-normal">Teams</h1>
    </template>

    <template #subtitle>
      <h2 class="w-full my-4 text-base font-light">
        It's awesome working here. Come join us!
      </h2>
    </template>
  </HeaderContainer>
</template>

<script>
import HeaderContainer from "@/components/Shared/HeaderContainer";
export default {
  name: "TeamsView",
  components: {
    HeaderContainer,
  },
};
</script>
