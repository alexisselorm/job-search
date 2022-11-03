<template>
  <div class="py-5 border-b border-solid border-brand-gray-2">
    <div
      data-test="clickable-area"
      class="flex flex-wrap items-center justify-between cursor-pointer"
      @click="open"
    >
      <h3 class="text-base font-semibold">{{ header }}</h3>
      <font-awesome-icon :icon="caretIcon" />
    </div>
    <div v-if="isOpen" class="w-full mt-5">
      <slot>
        <p>I will show when nothing is passed in my parent where I am called</p>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Accordion",
  props: {
    header: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isOpen: false,
    };
  },
  computed: {
    caretIcon() {
      return this.isOpen ? ["fas", "angle-up"] : ["fas", "angle-down"];
    },
  },
  methods: {
    open() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>
