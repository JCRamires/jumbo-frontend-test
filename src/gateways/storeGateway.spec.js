import { describe, it, expect } from "vitest";
import { fetchStores } from "./storesGateway";

const ENDPOINT =
  "https://api.jsonstorage.net/v1/json/00000000-0000-0000-0000-000000000000/c4357a15-46e2-4542-8e93-6aa6a0c33c1e";
const FAKE_JSON = { mock: "return" };

const fetchMock = vi.fn(() =>
  Promise.resolve({ json: () => Promise.resolve(FAKE_JSON) })
);

vi.stubGlobal("fetch", fetchMock);

describe("storeGateway", () => {
  it("should fetch data from the endpoint", async () => {
    const stores = await fetchStores()

    expect(fetchMock).toHaveBeenCalledWith(ENDPOINT)
    expect(stores).toEqual(FAKE_JSON)
  });
});
