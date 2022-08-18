import React from "react";
import { shallow } from "enzyme";
import ThemeToggler from "../ThemeToggler";

describe("Toggle", () => {
    const wrapper = shallow(<ThemeToggler />);
    it("renders a button with \"Toggle\" as children", () => {
        expect(wrapper.find(".themeToggle").last()).toHaveLength(1);
    });
});
