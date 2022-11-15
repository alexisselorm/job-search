import nextElementInList from "@/utils/nextElementInList";

describe("nextElementInList", () => {
  it("locates element in list and returns the next element in the list", () => {
    const list = ["A", "B", "C", "D", "E"];
    const value = "C";
    const result = nextElementInList<string>(list, value);
    expect(result).toBe("D");
  });
  describe("when element is at the end of the list", () => {
    it("returns the starting element in the list", () => {
      const list = ["A", "B", "C", "D", "E"];
      const value = "E";
      const result = nextElementInList<string>(list, value);
      expect(result).toBe("A");
    });
  });
});
