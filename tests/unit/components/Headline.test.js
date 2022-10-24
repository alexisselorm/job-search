import { mount } from "@vue/test-utils";

import Headline from "@/components/Headline";
import { nextTick } from "vue";

describe("Headline", () => {
  it("displays first(Build) action verb ", () => {
    jest.useFakeTimers();
    const wrapper = mount(Headline);
    const actionPhrase = wrapper.find("[data-test='action-phrase']");
    expect(actionPhrase.text()).toBe("Build for everyone");
    jest.useRealTimers();
  });
  it("changes action verb at a consistent interval", () => {
    jest.useFakeTimers("legacy");
    mount(Headline);
    expect(setInterval).toHaveBeenCalled();
    jest.useRealTimers();
  });
  it("swaps action verb after first interval", async () => {
    jest.useFakeTimers();
    const wrapper = mount(Headline);
    const actionPhrase = wrapper.find("[data-test='action-phrase']");
    jest.runOnlyPendingTimers();
    await nextTick();
    expect(actionPhrase.text()).toBe("Create for everyone");

    jest.useRealTimers();
  });
  it("removes interval when component is destroyed", () => {
    jest.useFakeTimers("legacy");
    const wrapper = mount(Headline);
    wrapper.unmount();
    expect(clearInterval).toHaveBeenCalled();
    jest.useRealTimers();
  });
});
