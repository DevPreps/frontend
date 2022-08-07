import React from "react";
import { shallow } from "enzyme";
import RecommendPostList from "../RecommendPostList";

// test component rendering
describe("<RecommendPostList /> rendering", () => {
    const wrapper = shallow(<RecommendPostList />);

    it("should be able to render title Project Posts", () => {
        expect(wrapper.find({ title: "Recommend Posts" }).length).toBe(1);
    });

    it("should be able to render CreatePost Modal", () => {
        expect(wrapper.find("CreatePost").length).toBe(1);
    });
});
