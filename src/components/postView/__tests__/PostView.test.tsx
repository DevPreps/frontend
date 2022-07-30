import React from "react";
import { shallow } from "enzyme";
import PostView from "../PostView";

// test component rendering
describe("<PostView /> rendering", () => {
    const wrapper = shallow(<PostView />);
    // test if PostView component renders
    it("should be able to render <PostView />", () => {
        wrapper;
    });
});
