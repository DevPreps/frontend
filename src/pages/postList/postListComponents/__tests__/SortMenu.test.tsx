import React from "react";
import { shallow } from "enzyme";
import SortMenu from "../SortMenu";
// test component rendering
describe("<SortMenu /> rendering", () => {
    const wrapper = shallow(<SortMenu />);
    // test if SortMenu component renders
    it("should contain a Sort label />", () => {
        expect(wrapper.find({ children: "Sort" }).length).toBe(1);
    });

    it("should contain latest, likes, most saved MenuItems />", () => {
        ["latest", "likes", "most saved"].map((item) =>
            expect(wrapper.find({ value: item }).length).toBe(1)
        );
    });
});
