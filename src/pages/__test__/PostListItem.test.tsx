import React from "react";
import { shallow } from "enzyme";
import PostListItem from "../postList/PostListItem";
// test component rendering
describe("<PostListItem /> rendering", () => {
    const wrapper = shallow(<PostListItem />);
    // test if PostListItem component renders
    it("should be able to render <PostListItem />", () => {
        wrapper;
    });
    // test if there are 9 Link elements
    // it("should render 4 Links", () => {
    //     expect(wrapper.find("Link")).toHaveLength(4);
    // });
});
