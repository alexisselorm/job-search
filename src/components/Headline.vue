<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section>
    <h1
      data-test="action-phrase"
      class="font-bold tracking-tighter text-8xl mb-14"
    >
      <span :class="actionClasses">{{ action }}</span>
      <br />
      for everyone
    </h1>
    <h2 class="text-3xl font-light">Find your next job at Ship Happens</h2>
  </section>
</template>

<script>
import nextElementInList from "@/utils/nextElementInList";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Headline",
  data() {
    return {
      action: "Build",
      interval: null,
    };
  },
  computed: {
    actionClasses() {
      return {
        [this.action.toLowerCase()]: true,
      };
    },
  },
  created() {
    this.changeTitle();
    // console.log("Hey, I've been created. My data exists: ", this.action);
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
  methods: {
    changeTitle() {
      this.interval = setInterval(() => {
        const actions = ["Build", "Create", "Design", "Code"];
        this.action = nextElementInList(actions, this.action);
        // console.log("Running", this.action);
      }, 3000);
    },
  },
};
</script>

<style scoped>
.build {
  color: #1a73e8;
}
.create {
  color: #34a853;
}
.design {
  color: #f9ab00;
}

.code {
  color: #d93025;
}
</style>
