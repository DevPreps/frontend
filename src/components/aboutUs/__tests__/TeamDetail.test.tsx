import React from "react";

import { shallow } from "enzyme";

import TeamDetail from "../TeamDetail";

// test component rendering
describe("Test StorySection component", () => {
    const wrapper = shallow(<TeamDetail />);

    it("Should be able to render Card styles", () => {
        expect(wrapper.find("Card").children).toHaveLength(1);
    });

    it("Should be able to render Avatar styles", () => {
        expect(wrapper.find("Avatar").children).toHaveLength(1);
    });

    it("Should be able to render Typography styles", () => {
        expect(wrapper.find("Typography").children).toHaveLength(1);
    });

    it("Should be able to render CardContent styles", () => {
        expect(wrapper.find("CardContent").children).toHaveLength(1);
    });
});
