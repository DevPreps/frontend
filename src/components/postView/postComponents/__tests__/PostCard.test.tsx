import React from "react";
import { shallow } from "enzyme";
import PostCard from "../PostCard";
import AddComment from "../../../comment/AddComment";

// test component rendering
describe("Test PostCard component", () => {
    it("Should be able to render AddComment component", () => {
        const wrapper = shallow(<PostCard />);
        expect(wrapper.containsMatchingElement(<AddComment />)).toEqual(true);
    });
});
