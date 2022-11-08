import useCurrentPage from "@/composables/useCurrentPage";
import { useRoute } from "vue-router";
jest.mock("vue-router");

describe("useCurrentPage", () => {
  describe("when query params include page", () => {
    it("returns page", () => {
      useRoute.mockReturnValue({ query: { page: "5" } });
      const result = useCurrentPage();
      expect(result.value).toBe(5);
    });
  });
  describe("when query params excludes page", () => {
    it("defaults to page 1", () => {
      useRoute.mockReturnValue({ query: {} });
      const result = useCurrentPage();
      expect(result.value).toBe(1);
    });
  });
});
