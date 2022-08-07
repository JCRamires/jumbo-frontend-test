import { describe, it, expect } from "vitest";
import { getters } from "./getters";

const {
  getStores,
  getCities,
  getCitiesByName,
  getStoreById,
  getStoresByCity,
  getStoresBySearchTerm,
} = getters;

const ALL_STORES = [
  {
    addressName: "Jumbo Aalsmeer Ophelialaan",
    city: "Aalsmeer",
    sapStoreID: "3178",
  },
  {
    addressName: "Jumbo Alphen aan den Rijn Ten Brink Food",
    city: "Alphen aan den Rijn",
    sapStoreID: "3546",
  },
  {
    addressName: "Jumbo Fake Store",
    city: "Alphen aan den Rijn",
    sapStoreID: "5555",
  },
];

const ALL_STORES_NO_PREFIX = [
  {
    addressName: "Aalsmeer Ophelialaan",
    city: "Aalsmeer",
    sapStoreID: "3178",
  },
  {
    addressName: "Alphen aan den Rijn Ten Brink Food",
    city: "Alphen aan den Rijn",
    sapStoreID: "3546",
  },
  {
    addressName: "Fake Store",
    city: "Alphen aan den Rijn",
    sapStoreID: "5555",
  },
];

const ALL_CITIES = ["Aalsmeer", "Alphen aan den Rijn"];

const FAKE_GETTERS = {
  getStores: ALL_STORES_NO_PREFIX,
  getCities: ALL_CITIES,
};

const DEFAULT_STATE = {
  isLoading: false,
  stores: ALL_STORES,
};

describe("getters", () => {
  describe("stores", () => {
    it("getStores should return all stores with the Jumbo prefix removed", () => {
      const expected = [
        {
          addressName: "Aalsmeer Ophelialaan",
          city: "Aalsmeer",
          sapStoreID: "3178",
        },
        {
          addressName: "Alphen aan den Rijn Ten Brink Food",
          city: "Alphen aan den Rijn",
          sapStoreID: "3546",
        },
        {
          addressName: "Fake Store",
          city: "Alphen aan den Rijn",
          sapStoreID: "5555",
        },
      ];

      const stores = getStores(DEFAULT_STATE);

      expect(stores).toEqual(expected);
    });

    it("getStoreById should find stores", () => {
      const expected = {
        addressName: "Alphen aan den Rijn Ten Brink Food",
        city: "Alphen aan den Rijn",
        sapStoreID: "3546",
      };

      const store = getStoreById(DEFAULT_STATE, FAKE_GETTERS)("3546");

      expect(store).toEqual(expected);
    });

    it("getStoresByCity should find stores", () => {
      const expected = [
        {
          addressName: "Alphen aan den Rijn Ten Brink Food",
          city: "Alphen aan den Rijn",
          sapStoreID: "3546",
        },
        {
          addressName: "Fake Store",
          city: "Alphen aan den Rijn",
          sapStoreID: "5555",
        },
      ];

      const stores = getStoresByCity(
        DEFAULT_STATE,
        FAKE_GETTERS
      )("Alphen aan den Rijn");

      expect(stores).toEqual(expected);
    });

    it("getStoresBySearchTerm should find stores by address name", () => {
      const expected = [
        {
          addressName: "Fake Store",
          city: "Alphen aan den Rijn",
          sapStoreID: "5555",
        },
      ];

      const stores = getStoresBySearchTerm(DEFAULT_STATE, FAKE_GETTERS)("Fake");

      expect(stores).toEqual(expected);
    });

    it("getStoresBySearchTerm should find stores by city name", () => {
      const expected = [
        {
          addressName: "Alphen aan den Rijn Ten Brink Food",
          city: "Alphen aan den Rijn",
          sapStoreID: "3546",
        },
        {
          addressName: "Fake Store",
          city: "Alphen aan den Rijn",
          sapStoreID: "5555",
        },
      ];

      const stores = getStoresBySearchTerm(DEFAULT_STATE, FAKE_GETTERS)("Rijn");

      expect(stores).toEqual(expected);
    });
  });
  describe("cities", () => {
    it("getCities should return a Set with all cities", () => {
      const expected = new Set(ALL_CITIES);

      const cities = getCities(DEFAULT_STATE);

      expect(cities).toEqual(expected);
    });

    it("getCitiesByName should return all cities when search term is empty", () => {
      const cities = getCitiesByName(DEFAULT_STATE, FAKE_GETTERS)("");

      expect(cities).toEqual(ALL_CITIES);
    });

    it("getCitiesByName should search when a search term is provided", () => {
      const expected = ["Alphen aan den Rijn"];

      const cities = getCitiesByName(DEFAULT_STATE, FAKE_GETTERS)("Rijn");

      expect(cities).toEqual(expected);
    });
  });
});
