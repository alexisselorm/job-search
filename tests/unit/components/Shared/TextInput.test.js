import { mount } from "@vue/test-utils";
import TextInput from "@/components/Shared/TextInput";

describe("TextInput", () => {
  it("communicates that user has entered character", () => {
    const wrapper = mount(TextInput, {
      props: {
        modelValue: "",
      },
    });
    const input = wrapper.find("input");
    input.setValue("A");
    input.setValue("AC");
    input.setValue("ACC");
    const messages = wrapper.emitted()["update:modelValue"];
    expect(messages).toEqual([["A"], ["AC"], ["ACC"]]);
  });
});
