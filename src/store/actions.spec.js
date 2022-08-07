import { describe, it, expect, vi } from "vitest";
import { actions } from "./actions";

const FAKE_JSON = { mock: "return" };

const fetchMock = vi.fn(() =>
  Promise.resolve({ json: () => Promise.resolve(FAKE_JSON) })
);

vi.stubGlobal("fetch", fetchMock);

const { fetchStores } = actions;

describe("actions", () => {
  it("should fetch stores", async () => {
    const commit = vi.fn();

    await fetchStores({ commit });

    expect(commit).toHaveBeenCalledWith("setIsLoading", true);
    expect(commit).toHaveBeenCalledWith("setStores", FAKE_JSON);
    expect(commit).toHaveBeenCalledWith("setIsLoading", false);
  });
});
