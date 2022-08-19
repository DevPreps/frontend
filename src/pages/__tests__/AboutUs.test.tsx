import React from "react";
import { shallow } from "enzyme";
import AboutUs from "../AboutUs";

// test component rendering
describe("Test AboutUs component", () => {
    const wrapper = shallow(<AboutUs />);
    it("Should be able to render AboutUsView component ", () => {
        expect(wrapper.find("AboutUsView").children).toHaveLength(1);
    });
});
