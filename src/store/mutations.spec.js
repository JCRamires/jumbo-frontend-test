import { describe, it, expect } from "vitest";
import { mutations } from "./mutations";

const { setIsLoading, setStores } = mutations;

const DEFAULT_STATE = { isLoading: false, stores: [] };

describe("mutations", () => {
  it("should set isLoading", () => {
    const state = { ...DEFAULT_STATE };

    setIsLoading(state, true);

    expect(state.isLoading).toBe(true);
  });

  it("should set stores", () => {
    const state = { ...DEFAULT_STATE };

    setStores(state, [{ addressName: "test store" }]);

    expect(state.stores.length).toEqual(1);
  });
});
