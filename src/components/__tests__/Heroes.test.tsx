import React from "react";
import { shallow } from "enzyme";
import Heroes from "../Heroes";

describe("Test Heroes page", () => {
    const wrapper = shallow(<Heroes />);
    it("should be able to render the title", () => {
        expect(wrapper.find({ "data-testid": "hero-title" }).exists()).toBe(
            true
        );
    });

    it("should be able to render the subtitle", () => {
        console.log(wrapper.debug());
        expect(wrapper.find({ "data-testid": "hero-subtitle" }).exists()).toBe(
            true
        );
    });
});
