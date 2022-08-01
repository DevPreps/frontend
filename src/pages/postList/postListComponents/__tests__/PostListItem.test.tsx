import React from "react";
import { shallow } from "enzyme";
import PostListItem from "../PostListItem";
import { posts } from "../../../../data";
// test component rendering
describe("<PostListItem /> rendering", () => {
    const wrapper = shallow(<PostListItem post={posts[0]} />);
    // test if PostListItem component renders
    it("should be able to render <PostListItem />", () => {
        wrapper;
    });
    // test if there are 9 Link elements
    // it("should render 4 Links", () => {
    //     expect(wrapper.find("Link")).toHaveLength(4);
    // });
});
