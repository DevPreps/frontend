import React from "react";
import { shallow } from "enzyme";
import LearnPostList from "../LearnPostList";
// test component rendering
describe("<LearnPostList /> rendering", () => {
    const wrapper = shallow(<LearnPostList />);
    // test if LearnPostList component renders
    it("should be able to render title Learn Posts", () => {
        expect(wrapper.find({ title: "Learn Posts" }).length).toBe(1);
    });

    it("should be able to render CreatePost Modal", () => {
        expect(wrapper.find("CreatePost").length).toBe(1);
    });
});
