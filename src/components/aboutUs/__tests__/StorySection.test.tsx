import React from "react";

import { shallow } from "enzyme";

import StorySection from "../StorySection";

// test component rendering
describe("Test StorySection component", () => {
    const wrapper = shallow(<StorySection />);
    it("Should be able to render Typography styles ", () => {
        expect(wrapper.find("Typography").children).toHaveLength(1);
    });
});
