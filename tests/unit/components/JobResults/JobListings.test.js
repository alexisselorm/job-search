import { shallowMount, flushPromises, RouterLinkStub } from "@vue/test-utils";

import JobListings from "@/components/JobResults/JobListings";

describe("JobListings", () => {
  const createRoute = (queryParams = {}) => ({
    query: {
      page: "5",
      ...queryParams,
    },
  });

  const createStore = (config = {}) => ({
    getters: {
      FILTERED_JOBS: [{}],
    },
    dispatch: jest.fn(),
    ...config,
  });
  const createConfig = ($route, $store) => ({
    global: {
      mocks: {
        $route,
        $store,
      },
      stubs: {
        "router-link": RouterLinkStub,
      },
    },
  });

  describe("when component mounts", () => {
    it("makes call to fetch jobs from API", () => {
      const $route = createRoute();
      const dispatch = jest.fn();
      const $store = createStore({ dispatch });
      shallowMount(JobListings, createConfig($route, $store));
      expect(dispatch).toHaveBeenCalledWith("FETCH_JOBS");
    });
  });

  it("creates a job listing for a maximum of 10 jobs", async () => {
    const $route = createRoute({ page: "1" });
    const numberOfJobsInStore = 15;
    const $store = createStore({
      getters: {
        FILTERED_JOBS: Array(numberOfJobsInStore).fill({}),
      },
    });
    const wrapper = shallowMount(JobListings, createConfig($route, $store));
    await flushPromises();
    const jobListings = wrapper.findAll("[data-test='job-listing']");
    expect(jobListings).toHaveLength(10);
  });
  describe("when query params exclude page number", () => {
    it("displays page number 1", () => {
      const $route = createRoute({ page: undefined });
      const $store = createStore();
      const wrapper = shallowMount(JobListings, createConfig($route, $store));
      expect(wrapper.text()).toMatch("Page 1");
    });
  });
  describe("when query params include page number", () => {
    it("displays page number", () => {
      const $route = createRoute({ page: "3" });
      const $store = createStore();
      const wrapper = shallowMount(JobListings, createConfig($route, $store));
      expect(wrapper.text()).toMatch("Page 3");
    });
  });
  describe("when user is on first page on job results", () => {
    it("does not show link to previous page", () => {
      const $route = createRoute({ page: "1" });
      const $store = createStore();
      const wrapper = shallowMount(JobListings, createConfig($route, $store));
      const previousPage = wrapper.find("[data-test='previous-page-link']");
      expect(previousPage.exists()).toBe(false);
    });
  });
  it("shows link to next page", async () => {
    const $route = createRoute({ page: "1" });
    const $store = createStore({
      getters: {
        FILTERED_JOBS: Array(15).fill({}),
      },
    });
    const wrapper = shallowMount(JobListings, createConfig($route, $store));
    await flushPromises();
    const nextPage = wrapper.find("[data-test='next-page-link']");
    expect(nextPage.exists()).toBe(true);
  });

  describe("when user is on last page on job results", () => {
    it("does not show link to next page", async () => {
      const $route = createRoute({ page: "2" });
      const $store = createStore({
        getters: {
          FILTERED_JOBS: Array(15).fill({}),
        },
      });
      const wrapper = shallowMount(JobListings, createConfig($route, $store));
      await flushPromises();
      const previousPage = wrapper.find("[data-test='next-page-link']");
      expect(previousPage.exists()).toBe(false);
    });
  });
  it("shows link to previous page", async () => {
    const $route = createRoute({ page: "2" });
    const $store = createStore({
      getters: {
        FILTERED_JOBS: Array(15).fill({}),
      },
    });
    const wrapper = shallowMount(JobListings, createConfig($route, $store));
    await flushPromises();
    const nextPage = wrapper.find("[data-test='previous-page-link']");
    expect(nextPage.exists()).toBe(true);
  });
});
