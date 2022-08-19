import { shallow } from "enzyme";
import React from "react";
import SideNav from "../SideNav";

describe("SideNav", () => {
    const wrapper = shallow(<SideNav />);
    it("renders a button with 'Toggle' as children", () => {
        expect(wrapper.find(".hamburger")).toHaveLength(1);
    });
});
