import React from "react";
import { shallow } from "enzyme";
import MyDrafts from "../MyDrafts";

// test component rendering
describe("<MyDrafts /> rendering", () => {
    const wrapper = shallow(<MyDrafts />);
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
