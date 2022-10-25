import { mount } from "@vue/test-utils";
import ActionButton from "@/components/Shared/ActionButton";

describe("ActionButton", () => {
  it("renders text", () => {
    const wrapper = mount(ActionButton, {
      props: {
        text: "Im so clickable",
      },
    });
    expect(wrapper.text()).toMatch("Im so clickable");
  });
  it("applies primary styles to button", () => {
    const wrapper = mount(ActionButton, {
      props: {
        text: "Im so clickable",
        type: "primary",
      },
    });
    const button = wrapper.find("button");
    expect(button.classes("primary")).toBe(true);
  });
});
