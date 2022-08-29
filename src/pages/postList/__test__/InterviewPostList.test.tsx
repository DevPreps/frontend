import React from "react";

import { shallow } from "enzyme";

import InterviewPostList from "../InterviewPostList";
// test component rendering
describe("<InterviewPostList /> rendering", () => {
    const wrapper = shallow(<InterviewPostList />);
    // test if InterviewPostList component renders
    it("should be able to render title Interview Posts", () => {
        expect(wrapper.find({ title: "Interview Posts" }).length).toBe(1);
    });

    it("should be able to render CreatePost Modal", () => {
        expect(wrapper.find("CreatePost").length).toBe(1);
    });
});
