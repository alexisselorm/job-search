import { flushPromises, mount } from "@vue/test-utils";
import axios from "axios";
import Spotlight from "@/components/JobSearch/Spotlight";
jest.mock("axios");

describe("Spotlight", () => {
  it("provides img attribute to parent component", async () => {
    axios.get.mockResolvedValue({
      data: [{ img: "someimage", title: "title", description: "description" }],
    });
    const wrapper = mount(Spotlight, {
      slots: {
        default: `<template #default="slotProps">
        <h1>{{ slotProps.img }}</h1>
        </template>`,
      },
    });
    await flushPromises();
    expect(wrapper.text()).toMatch("someimage");
  });

  it("provides title attribute to parent component", async () => {
    axios.get.mockResolvedValue({
      data: [{ img: "someimage", title: "title", description: "description" }],
    });
    const wrapper = mount(Spotlight, {
      slots: {
        default: `<template #default="slotProps">
        <h1>{{ slotProps.title }}</h1>
        </template>`,
      },
    });
    await flushPromises();
    expect(wrapper.text()).toMatch("title");
  });

  it("provides description attribute to parent component", async () => {
    axios.get.mockResolvedValue({
      data: [{ img: "someimage", title: "title", description: "description" }],
    });
    const wrapper = mount(Spotlight, {
      slots: {
        default: `<template #default="slotProps">
        <h1>{{ slotProps.description }}</h1>
        </template>`,
      },
    });
    await flushPromises();
    expect(wrapper.text()).toMatch("description");
  });
});
