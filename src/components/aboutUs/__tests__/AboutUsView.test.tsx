import React from "react";
import { shallow } from "enzyme";
import AboutUsView from "../AboutUsView";

// test component rendering
describe("Test AboutUsView component", () => {
    const wrapper = shallow(<AboutUsView />);
    it("Should be able to render StorySection component ", () => {
        expect(wrapper.find("StorySection").children).toHaveLength(1);
    });

    it("Should be able to render TeamCards component ", () => {
        expect(wrapper.find("TeamCards").children).toHaveLength(1);
    });
});
