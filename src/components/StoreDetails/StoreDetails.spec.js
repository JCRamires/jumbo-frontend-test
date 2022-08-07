import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import StoreDetails from "./StoreDetails.vue";

const JUMBO_STORE = {
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
};

describe("StoreDetails", () => {
  it("mounted component should match snapshot", async () => {
    const wrapper = mount(StoreDetails, {
      props: {
        store: JUMBO_STORE,
      },
    });

    expect(wrapper).toMatchSnapshot();
  });
});
