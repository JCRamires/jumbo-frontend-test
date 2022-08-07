import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import GoogleMapsIFrame from "./GoogleMapsIFrame.vue";

describe("GoogleMapsIFrame", () => {
  it("mounted component should match snapshot", async () => {
    const wrapper = mount(GoogleMapsIFrame, {
      props: {
        latitude: "123",
        longitude: "321",
      },
    });

    expect(wrapper.element).toMatchSnapshot();
  });
});
