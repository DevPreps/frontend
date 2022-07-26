import React from "react";
import { shallow } from "enzyme";
import SortMenu from "../SortMenu";
// test component rendering
describe("<SortMenu /> rendering", () => {
    const wrapper = shallow(<SortMenu />);
    // test if SortMenu component renders
    it("should be able to render <SortMenu />", () => {
        wrapper;
    });
});
