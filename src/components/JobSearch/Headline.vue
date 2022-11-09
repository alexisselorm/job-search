<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="mb-16">
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

<script lang="ts">
import { defineComponent } from "vue";
import nextElementInList from "@/utils/nextElementInList";

interface Data {
  action: string;
  interval?: number;
}
interface ActionClasses {
  [x: string]: boolean;
}
export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Headline",
  data(): Data {
    return {
      action: "Build",
      // Leave this undefined property here so that it's easily readable. This property keeps track of the number that will be used to clearinterval once we leave the page
      interval: undefined,
    };
  },
  computed: {
    actionClasses(): ActionClasses {
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
        const actions = ["Build", "Create", "Design", "Code", "Good"];
        this.action = nextElementInList(actions, this.action);
        // console.log("Running", this.action);
      }, 3000);
    },
  },
});
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

.good {
  color: #0d6892;
}
</style>
