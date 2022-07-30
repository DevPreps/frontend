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
    it("should contain PostListItem />", () => {
        expect(wrapper.find("PostListItem").exists()).toBe(true);
    });
    it("should contain sort menu />", () => {
        expect(wrapper.find("SortMenu").exists()).toBe(true);
    });
});
