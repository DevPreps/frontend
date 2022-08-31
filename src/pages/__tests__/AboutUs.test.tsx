import React from "react";

import { shallow } from "enzyme";

import AboutUs from "../AboutUs";

// test component rendering
describe("Test AboutUs page", () => {
    const wrapper = shallow(<AboutUs />);
    it("Should be able to render StorySection component ", () => {
        expect(wrapper.find("StorySection").children).toHaveLength(1);
    });

    it("Should be able to render TeamCards component ", () => {
        expect(wrapper.find("TeamCards").children).toHaveLength(1);
    });
});
