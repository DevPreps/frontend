import React from "react";

import { shallow } from "enzyme";

import ProjectPostList from "../ProjectPostList";
// test component rendering
describe("<ProjectPostList /> rendering", () => {
    const wrapper = shallow(<ProjectPostList />);

    it("should be able to render title Project Posts", () => {
        expect(wrapper.find({ title: "Project Posts" }).length).toBe(1);
    });

    it("should be able to render CreatePost Modal", () => {
        expect(wrapper.find("CreatePost").length).toBe(1);
    });
});
