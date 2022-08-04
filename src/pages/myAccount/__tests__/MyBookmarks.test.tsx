import React from "react";
import { shallow } from "enzyme";
import MyBookmarks from "../MyBookmarks";

// test component rendering
describe("<MyBookmarks /> rendering", () => {
    const wrapper = shallow(<MyBookmarks />);
    it("should have a <SortMenu />", () => {
        expect(wrapper.find("SortMenu").exists()).toBe(true);
    });

    it("should contain <PostListItem />", () => {
        expect(wrapper.find("PostListItem").exists()).toBe(true);
    });

    it("should contain <UserCardActions />", () => {
        expect(wrapper.find("UserCardActions").exists()).toBe(true);
    });

    it("should contain a Load More Button />", () => {
        expect(wrapper.find({ children: "Load More" }).length).toBe(1);
    });
});
