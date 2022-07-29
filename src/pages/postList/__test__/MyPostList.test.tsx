import React from "react";
import { shallow } from "enzyme";
import MyPostList from "../MyPostList";
// test component rendering
describe("<MyPostList /> rendering", () => {
    const wrapper = shallow(<MyPostList />);
    // test if MyPostList component renders
    it("should be able to render <MyPostList />", () => {
        wrapper;
    });
});
