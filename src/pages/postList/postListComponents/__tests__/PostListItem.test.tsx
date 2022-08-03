import React from "react";
import { shallow } from "enzyme";
import PostListItem from "../PostListItem";
import { posts } from "../../../../data";
// test component rendering
describe("<PostListItem /> rendering", () => {
    const wrapper = shallow(<PostListItem post={posts[0]} />);
    // test if PostListItem component renders
    it("should contain post title", () => {
        expect(wrapper.find({"data-testid":"post-title"}).text()).toEqual(posts[0].title)
    });
    it("should contain post date", () => {
        expect(wrapper.find({"data-testid":"post-date"}).text()).toEqual(posts[0].date)
    });
    it("should contain post content", () => {
        expect(wrapper.find({"data-testid":"post-description"}).text()).toEqual(posts[0].description)
    });
    it("should contain post image", () => {
        expect(wrapper.find({"alt":"image text"}).prop("image")).toEqual(posts[0].image)
    });
});

