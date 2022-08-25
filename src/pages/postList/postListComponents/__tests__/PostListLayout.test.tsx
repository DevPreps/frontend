import React from "react";

import { shallow } from "enzyme";

import { posts } from "../../../../data";
import CreatePost from "../../composePost/CreatePost";
import PostListLayout from "../PostListLayout";

describe("Test PostListLayout component", () => {
    const wrapper = shallow(
        <PostListLayout title="test" posts={posts} withSearchBar={true}>
            <CreatePost />
        </PostListLayout>
    );

    it("should be able to render test as title", () => {
        console.log(wrapper.debug());
        expect(wrapper.find({ "data-testid": "title" }).contains("test")).toBe(
            true
        );
    });
    it("should be able to render searchBar", () => {
        expect(wrapper.find("SearchBar").length).toBe(1);
    });
    it("should be able to render CreatePost", () => {
        expect(wrapper.find("CreatePost").length).toBe(1);
    });
    it("should be able to render SortMenu", () => {
        expect(wrapper.find("SortMenu").length).toBe(1);
    });
    it("should be able to render PostListItem", () => {
        expect(wrapper.find("PostListItem").exists()).toBe(true);
    });
    it("should be able to render Load More button", () => {
        expect(wrapper.find({ children: "Load More Posts" }).length).toBe(1);
    });
});
