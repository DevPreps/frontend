import React from "react";

import { shallow } from "enzyme";

import MyDrafts from "../MyDrafts";

// test component rendering
describe("<MyDrafts /> rendering", () => {
    const wrapper = shallow(<MyDrafts />);
    it("should have a title My Drafts", () => {
        expect(wrapper.find({ title: "My Drafts" }).length).toBe(1);
    });

    it("should render PostListLayout component", () => {
        expect(wrapper.find("PostListLayout").length).toBe(1);
    });
});
