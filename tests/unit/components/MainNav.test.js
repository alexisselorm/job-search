import { shallowMount } from "@vue/test-utils";
import MainNav from "@/components/MainNav";

describe("MainNav", () => {
  it("displays our company name", () => {
    const wrapper = shallowMount(MainNav);
    expect(wrapper.text()).toMatch("Ship Happens");
  });
  it("displays menu items for navigation", () => {
    const wrapper = shallowMount(MainNav);
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
    it("promps user to sign in", () => {
      const wrapper = shallowMount(MainNav);
      const loginButton = wrapper.find("[data-test='login-button']");
      expect(loginButton.exists()).toBe(true);
    });
  });
  describe("when user logs in", () => {
    it("displays profile image", async () => {
      const wrapper = shallowMount(MainNav);
      const loginButton = wrapper.find("[data-test='login-button']");
      await loginButton.trigger("click");
      const profileImage = wrapper.find("[data-test='profile-image']");

      expect(profileImage.exists()).toBe(true);
    });
  });
});
