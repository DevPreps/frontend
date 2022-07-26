import React from "react";
import { shallow } from "enzyme";
import LearnPostList from "../LearnPostList";
// test component rendering
describe("<LearnPostList /> rendering", () => {
    const wrapper = shallow(<LearnPostList />);
    // test if LearnPostList component renders
    it("should be able to render <LearnPostList />", () => {
        wrapper;
    });
});
