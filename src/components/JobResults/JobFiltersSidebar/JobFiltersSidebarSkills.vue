<template>
  <div>
    <input
      v-model.lazy.trim="skillsSearchTerm"
      class="p-3 h-12 border border-solid border-brand-gray-1 shadow-gray rounded w-full text-base"
      placeholder="Computer promgramming, Finance degree"
      data-test="skills-search-input"
    />
  </div>
</template>

<script lang="ts">
import { useStore } from "vuex";
import { key } from "@/store";
import { UPDATE_SKILLS_SEARCH_TERM } from "@/store/constants";
import { defineComponent, computed } from "vue";

export default defineComponent({
  name: "JobFiltersSidebarSkills",
  setup() {
    const store = useStore(key);
    // Connection betweek our vuex store and our v-model directly
    const skillsSearchTerm = computed({
      get() {
        return store.state.skillsSearchTerm;
      },
      set(value) {
        store.commit(UPDATE_SKILLS_SEARCH_TERM, value);
      },
    });
    return { skillsSearchTerm };
  },
});
</script>
