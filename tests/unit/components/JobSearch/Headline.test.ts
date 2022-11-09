import { mount } from "@vue/test-utils";

import Headline from "@/components/JobSearch/Headline.vue";
import { nextTick } from "vue";

describe("Headline", () => {
  beforeEach(() => {
    jest.useFakeTimers("legacy");
  });
  afterEach(() => {
    jest.useRealTimers();
  });
  it("displays first(Build) action verb ", () => {
    const wrapper = mount(Headline);
    const actionPhrase = wrapper.find("[data-test='action-phrase']");
    expect(actionPhrase.text()).toBe("Build for everyone");
  });
  it("changes action verb at a consistent interval", () => {
    mount(Headline);
    expect(setInterval).toHaveBeenCalled();
  });
  it("swaps action verb after first interval", async () => {
    const wrapper = mount(Headline);
    const actionPhrase = wrapper.find("[data-test='action-phrase']");
    jest.runOnlyPendingTimers();
    await nextTick();
    expect(actionPhrase.text()).toBe("Create for everyone");
  });
  it("removes interval when component is destroyed", () => {
    const wrapper = mount(Headline);
    wrapper.unmount();
    expect(clearInterval).toHaveBeenCalled();
  });
});
