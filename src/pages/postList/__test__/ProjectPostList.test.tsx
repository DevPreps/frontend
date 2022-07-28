import React from "react";
import { shallow } from "enzyme";
import ProjectPostList from "../ProjectPostList";
// test component rendering
describe("<ProjectPostList /> rendering", () => {
    const wrapper = shallow(<ProjectPostList />);
    // test if ProjectPostList component renders
    it("should be able to render <ProjectPostList />", () => {
        wrapper;
    });
});
