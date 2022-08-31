import React from "react";

import { shallow } from "enzyme";

import CommentCard from "../CommentCard";

// test component rendering
describe("Test CommentCard component", () => {
    it("Should be able to render AddComment component", () => {
        const wrapper = shallow(<CommentCard />);
        expect(wrapper.find("AddComment").children).toHaveLength(1);
    });
});
