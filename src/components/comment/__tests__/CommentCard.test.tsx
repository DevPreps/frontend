import React from "react";
import { shallow } from "enzyme";
import CommentCard from "../CommentCard";
import AddComment from "../AddComment";

// describe("<CommentCard /> rendering", () => {
//     const wrapper = shallow(<CommentCard />);
//     it("should be able to render <CommentCard />", () => {
//         wrapper;
//     });
// });

describe("Test CommentCard component", () => {
    it("Should be able to render AddComment component", () => {
        const wrapper = shallow(<CommentCard />);
        expect(wrapper.containsMatchingElement(<AddComment />)).toEqual(true);
    });
});
