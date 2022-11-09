import { shallowMount } from "@vue/test-utils";
import MainNav from "@/components/Navigation/MainNav.vue";
import createConfig from "@/utils/mainNavStub";

describe("MainNav", () => {
  it("displays our company name", () => {
    const $store = {
      state: {
        isLoggedIn: false,
      },
    };
    const wrapper = shallowMount(MainNav, createConfig($store));
    expect(wrapper.text()).toMatch("Ship Happens");
  });
  it("displays menu items for navigation", () => {
    const $store = {
      state: {
        isLoggedIn: false,
      },
    };
    const wrapper = shallowMount(MainNav, createConfig($store));
    const navigationMenuItems = wrapper.findAll(
      "[data-test='main-nav-list-item']"
    );
    const navigationMenuText = navigationMenuItems.map((item) => item.text());
    expect(navigationMenuText).toEqual([
      "Teams",
      "Locations",
      "Life at Ship Happens",
      "How we hire",
      "Students",
      "Jobs",
    ]);
  });
  describe("when user is logged out", () => {
    const $store = {
      state: {
        isLoggedIn: false,
      },
    };
    it("promps user to sign in", () => {
      const wrapper = shallowMount(MainNav, createConfig($store));
      const loginButton = wrapper.find("[data-test='login-button']");
      expect(loginButton.exists()).toBe(true);
    });
  });
  describe("when user is logged in", () => {
    it("displays profile image", async () => {
      const $store = {
        state: {
          isLoggedIn: true,
        },
      };
      const wrapper = shallowMount(MainNav, createConfig($store));
      const profileImage = wrapper.find("[data-test='profile-image']");
      expect(profileImage.exists()).toBe(true);
    });
    it("displays subnav with additional information", async () => {
      const $store = {
        state: {
          isLoggedIn: true,
        },
      };
      const wrapper = shallowMount(MainNav, createConfig($store));
      const subnav = wrapper.find("[data-test='subnav']");
      expect(subnav.exists()).toBe(true);
    });
  });
  describe("when user is logged out", () => {
    it("issues call to Vuex to login user", async () => {
      const commit = jest.fn();
      const $store = {
        state: {
          isLoggedIn: false,
        },
        commit,
      };
      const wrapper = shallowMount(MainNav, createConfig($store));
      const loginButton = wrapper.find("[data-test='login-button']");
      await loginButton.trigger("click");
      expect(commit).toHaveBeenCalledWith("LOGIN_USER");
    });
  });
});
