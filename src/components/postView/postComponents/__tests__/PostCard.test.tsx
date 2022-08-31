import React from "react";

import { shallow } from "enzyme";

import PostCard from "../PostCard";

// test component rendering
describe("Test PostCard component", () => {
    it("Should be able to render AddComment component", () => {
        const wrapper = shallow(<PostCard />);
        expect(wrapper.find("AddComment").children).toHaveLength(1);
    });
});
