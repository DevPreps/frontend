import React from "react";

import { shallow } from "enzyme";

import TeamCards from "../TeamCards";

// test component rendering
describe("Test TeamCards component", () => {
    it("Should be able to render TeamDetail component", () => {
        const wrapper = shallow(<TeamCards />);
        expect(wrapper.find("TeamDetail").children).toHaveLength(1);
    });
});
