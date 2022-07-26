import React from "react";
import { shallow } from "enzyme";
import RecommendPostList from "../RecommendPostList";
// test component rendering
describe("<RecommendPostList /> rendering", () => {
    const wrapper = shallow(<RecommendPostList />);
    // test if RecommendPostList component renders
    it("should be able to render <RecommendPostList />", () => {
        wrapper;
    });
});
