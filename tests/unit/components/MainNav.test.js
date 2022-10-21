import { mount } from "@vue/test-utils";
import MainNav from "@/components/MainNav";

describe("MainNav", () => {
  it("displays our company name", () => {
    const wrapper = mount(MainNav);
    expect(wrapper.text()).toMatch("Ship Happens");
  });
  it("displays menu items for navigation", () => {
    const wrapper = mount(MainNav);
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
});
