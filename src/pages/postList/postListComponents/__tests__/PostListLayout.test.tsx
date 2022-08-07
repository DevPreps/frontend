import React from "react";
import { shallow } from "enzyme";
import PostListLayout from "../PostListLayout";
import { posts } from "../../../../data";
import CreatePost from "../../composePost/CreatePost";

describe("Test PostListLayout component", () => {
    const wrapper = shallow(
        <PostListLayout title="test" posts={posts} withSearchBar={true}>
            <CreatePost />
        </PostListLayout>
    );

    it("should be able to render test as title", () => {
        expect(wrapper.find({ children: "test" }).length).toBe(1);
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
        expect(wrapper.find({ children: "Load More" }).length).toBe(1);
    });
});
