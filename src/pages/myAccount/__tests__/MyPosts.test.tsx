import React from "react";

import { shallow } from "enzyme";

import MyPosts from "../MyPosts";

// test component rendering
describe("<MyPosts /> rendering", () => {
    const wrapper = shallow(<MyPosts />);
    it("should have a title My Posts", () => {
        expect(wrapper.find({ title: "My Posts" }).length).toBe(1);
    });

    it("should render PostListLayout component", () => {
        expect(wrapper.find("PostListLayout").length).toBe(1);
    });
});
