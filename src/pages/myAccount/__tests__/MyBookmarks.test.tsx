import React from "react";
import { shallow } from "enzyme";
import MyBookmarks from "../MyBookmarks";

// test component rendering
describe("<MyBookmarks /> rendering", () => {
    const wrapper = shallow(<MyBookmarks />);
    it("should have a title My Bookmarks", () => {
        expect(wrapper.find({ title: "My Bookmarks" }).length).toBe(1);
    });

    it("should render PostListLayout component", () => {
        expect(wrapper.find("PostListLayout").length).toBe(1);
    });
});
