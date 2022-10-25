<template>
  <input
    :value="value"
    class="w-full text-lg font-normal focus:outline-none"
    :placeholder="placeholder"
    type="text"
    @input="handleInput"
  />
</template>

<script>
export default {
  name: "TextInput",
  props: {
    placeholder: {
      type: String,
      required: false,
      default: "",
    },
  },
  data() {
    return {
      value: "",
    };
  },
  methods: {
    handleInput($event) {
      this.value = $event.target.value;
    },
  },
};
</script>
