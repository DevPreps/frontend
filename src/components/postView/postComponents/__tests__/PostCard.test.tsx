import React from "react";
import { shallow } from "enzyme";
import PostCard from "../PostCard";

// test component rendering
describe("<PostCard /> rendering", () => {
    const wrapper = shallow(<PostCard />);
    // test if PostCard component renders
    it("should be able to render <PostCard />", () => {
        wrapper;
    });
});
