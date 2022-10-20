import { mount } from "@vue/test-utils";
import MainNav from "@/components/MainNav";

describe("MainNav", () => {
  it("displays our company name", () => {
    const wrapper = mount(MainNav);
    expect(wrapper.text()).toMatch("Super Man");
  });
});
