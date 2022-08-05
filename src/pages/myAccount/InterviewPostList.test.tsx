import React from "react";
import { shallow } from "enzyme";
import InterviewPostList from "../postList/InterviewPostList";
// test component rendering
describe("<InterviewPostList /> rendering", () => {
    const wrapper = shallow(<InterviewPostList />);
    // test if InterviewPostList component renders
    it("should be able to render <InterviewPostList />", () => {
        wrapper;
    });
});
