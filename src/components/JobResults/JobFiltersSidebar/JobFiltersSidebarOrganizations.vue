<template>
  <Accordion header="Organizations">
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-row flex-wrap">
          <li
            v-for="organization in uniqueOrganizations"
            :key="organization"
            class="w-1/2 h-8"
          >
            <input
              :id="organization"
              v-model="selectedOrganizations"
              :data-test="organization"
              :value="organization"
              type="checkbox"
              class="mr-3"
              @change="selectOrganization"
            />
            <label data-test="organization" :for="organization">{{
              organization
            }}</label>
          </li>
        </ul>
      </fieldset>
    </div>
  </Accordion>
</template>

<script>
import Accordion from "@/components/Shared/Accordion.vue";
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { useUniqueOrganizations } from "@/store/composables";
import { ADD_SELECTED_ORGANIZATIONS } from "@/store/constants";
// import
export default {
  name: "JobFiltersSidebarOrganizations",
  components: {
    Accordion,
  },
  setup() {
    const router = useRouter();
    const store = useStore();
    const selectedOrganizations = ref([]);
    const uniqueOrganizations = useUniqueOrganizations();

    const selectOrganization = () => {
      store.commit(ADD_SELECTED_ORGANIZATIONS, selectedOrganizations.value);
      router.push({ name: "JobResults" });
    };

    return { selectOrganization, selectedOrganizations, uniqueOrganizations };
  },
  // data() {
  //   return {
  //     selectedOrganizations: [],
  //   };
  // },
  // computed: {
  //   ...mapGetters([UNIQUE_ORGANIZATIONS]),
  // },
  // methods: {
  //   ...mapMutations([ADD_SELECTED_ORGANIZATIONS]),
  //   selectOrganization() {
  //     this.ADD_SELECTED_ORGANIZATIONS(this.selectedOrganizations);
  //     this.$router.push({ name: "JobResults" });
  //   },
  // },
};
</script>
