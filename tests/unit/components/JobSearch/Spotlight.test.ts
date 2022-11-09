import { flushPromises, mount } from "@vue/test-utils";
import axios from "axios";
import Spotlight from "@/components/JobSearch/Spotlight.vue";
jest.mock("axios");

const axiosGetMock = axios.get as jest.Mock;
describe("Spotlight", () => {
  const mockSpotlightResponse = (data = {}) => {
    axiosGetMock.mockResolvedValue({
      data: [
        {
          // img: "someimage",
          // title: "title",
          // description: "description",
          ...data,
        },
      ],
    });
  };
  it("provides img attribute to parent component", async () => {
    const data = { img: "someimage" };
    mockSpotlightResponse(data);
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
    const data = { title: "title" };
    mockSpotlightResponse(data);
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
    const data = { description: "description" };
    mockSpotlightResponse(data);
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
