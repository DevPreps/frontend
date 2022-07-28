import React from "react";
import { shallow } from "enzyme";
import GeneralPostList from "../GeneralPostList";
// test component rendering
describe("<GeneralPostList /> rendering", () => {
    const wrapper = shallow(<GeneralPostList />);
    // test if GeneralPostList component renders
    it("should be able to render <GeneralPostList />", () => {
        wrapper;
    });
});
