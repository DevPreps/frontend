import React from "react";
import { shallow } from "enzyme";
import MyPosts from "../MyPosts";

// test component rendering
describe("<MyPublish /> rendering", () => {
    const wrapper = shallow(<MyPosts />);
    it("should have a <SortMenu />", () => {
        expect(wrapper.find("SortMenu").exists()).toBe(true);
    });

    it("should contain <PostListItem />", () => {
        expect(wrapper.find("PostListItem").exists()).toBe(true);
    });

    it("should contain <AuthorCardActions />", () => {
        expect(wrapper.find("AuthorCardActions").exists()).toBe(true);
    });

    it("should contain a Load More Button />", () => {
        expect(wrapper.find({ children: "Load More" }).length).toBe(1);
    });
});