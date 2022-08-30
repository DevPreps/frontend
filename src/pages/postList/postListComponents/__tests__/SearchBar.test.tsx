import React from "react";

import { shallow } from "enzyme";

import SearchBar from "../SearchBar";

// test component rendering
describe("<SearchBar /> rendering", () => {
    const wrapper = shallow(<SearchBar />);
    // test if SearchBar component renders
    it("should be able to render <SearchBar />", () => {
        expect(wrapper.find({ "data-testid": "searchbar" }).length).toBe(1);
    });
});
