import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Header from "./Header.vue";

describe("Header", () => {
  it("mounted component should match snapshot", async () => {
    const wrapper = mount(Header);

    expect(wrapper.element).toMatchSnapshot();
  });
});
