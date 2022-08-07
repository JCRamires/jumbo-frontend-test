import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import StoresList from "./StoresList.vue";

const STORES = [
  {
    type: "StoreListRO",
    uuid: "V7cKYx4X0QUAAAFMTmYM5CXj",
    addressName: "Jumbo Alkmaar Duijvelshoff",
    street: "Muiderwaard",
    street2: "416",
    street3: "",
    city: "Alkmaar",
    postalCode: "1824 XT",
    distance: 0,
    todayOpen: "07:00",
    todayClose: "22:00",
    latitude: "52.645601",
    longitude: "4.749492",
    locationType: "SupermarktPuP",
    newStore: 0,
    collectionPoint: true,
    complexNumber: "33282",
    sapStoreID: "3574",
    favourite: false,
    isHomeStore: false,
    showWarningMessage: true,
    sundayOpen: true,
  },
  {
    type: "StoreListRO",
    uuid: "xSgKYx4XXk0AAAFTOqsG6pvj",
    addressName: "Jumbo Amersfoort Leusderweg",
    street: "Leusderweg",
    street2: "152",
    street3: "",
    city: "Amersfoort",
    postalCode: "3817 KD",
    distance: 0,
    todayOpen: "07:30",
    todayClose: "21:00",
    latitude: "52.143866",
    longitude: "5.381369",
    locationType: "SupermarktPuP",
    newStore: 0,
    collectionPoint: true,
    complexNumber: "32257",
    sapStoreID: "4730",
    favourite: false,
    isHomeStore: false,
    showWarningMessage: true,
    sundayOpen: true,
  },
];

describe("StoresList", () => {
  it("mounted component should match snapshot", async () => {
    const wrapper = mount(StoresList, {
      props: {
        stores: STORES,
      },
    });

    expect(wrapper.element).toMatchSnapshot();
  });
});
