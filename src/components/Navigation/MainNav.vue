<template>
  <header :class="['w-full', 'text-sm', headerHeightClass]">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div
        class="flex h-full px-8 mx-auto border-b border-solid flex-nowrap border-brand-gray-1"
      >
        <router-link
          :to="{ name: 'home' }"
          class="flex items-center h-full text-xl"
          >Ship Happens</router-link
        >

        <nav class="h-full ml-12">
          <ul class="flex h-full p-0 m-0 list-none">
            <li
              v-for="menuItem in menuItems"
              :key="menuItem.text"
              data-test="main-nav-list-item"
              class="h-full ml-9 first:ml-0"
            >
              <router-link
                :to="menuItem.url"
                class="flex items-center h-full py-2.5"
                >{{ menuItem.text }}</router-link
              >
            </li>
          </ul>
        </nav>
        <div class="flex items-center h-full ml-auto">
          <ProfileImage v-if="isLoggedIn" data-test="profile-image" />
          <ActionButton
            v-else
            data-test="login-button"
            text="Sign In"
            @click="loginUser"
          />
        </div>
      </div>
      <SubNav v-if="isLoggedIn" data-test="subnav" />
    </div>
  </header>
</template>

<script>
import ActionButton from "@/components/Shared/ActionButton";
import ProfileImage from "@/components/Navigation/ProfileImage";
import SubNav from "@/components/Navigation/SubNav";
export default {
  name: "MainNav",
  components: {
    ActionButton,
    ProfileImage,
    SubNav,
  },
  data() {
    return {
      url: "https://careers.google.com",
      menuItems: [
        { text: "Teams", url: "/teams" },
        { text: "Locations", url: "/location" },
        { text: "Life at Ship Happens", url: "/life" },
        { text: "How we hire", url: "/hiring" },
        { text: "Students", url: "/students" },
        { text: "Jobs", url: "/jobs/results/" },
      ],
    };
  },
  computed: {
    headerHeightClass() {
      return {
        "h-16": !this.isLoggedIn,
        "h-32": this.isLoggedIn,
      };
    },
    isLoggedIn() {
      return this.$store.state.isLoggedIn;
    },
  },
  methods: {
    loginUser() {
      this.$store.commit("LOGIN_USER");
    },
  },
};
</script>
