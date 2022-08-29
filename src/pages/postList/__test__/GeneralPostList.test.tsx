import React from "react";

import { shallow } from "enzyme";

import GeneralPostList from "../GeneralPostList";

// test component rendering
describe("<GeneralPostList /> rendering", () => {
    const wrapper = shallow(<GeneralPostList />);

    it("should be able to render title General Posts", () => {
        expect(wrapper.find({ title: "General Posts" }).length).toBe(1);
    });

    it("should be able to render CreatePost Modal", () => {
        expect(wrapper.find("CreatePost").length).toBe(1);
    });
});
