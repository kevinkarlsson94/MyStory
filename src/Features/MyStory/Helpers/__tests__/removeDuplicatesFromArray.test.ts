import { removeDuplicatesFromArray } from "../removeDuplicatesFromArray"

describe("removeDuplicatesFromArray", () => {
  it("should remove any duplicates from array", () => {
    const arr = ["1", 5, "1", "2", 5, false, false]
    const result = removeDuplicatesFromArray(arr)
    expect(result).toEqual(["1", 5, "2", false])
  })
})
