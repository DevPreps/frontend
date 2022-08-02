import React from "react";
import { shallow } from "enzyme";
import CommentCard from "../CommentCard";

// describe("<CommentCard /> rendering", () => {
//     const wrapper = shallow(<CommentCard />);
//     it("should be able to render <CommentCard />", () => {
//         wrapper;
//     });
// });

describe("Test CommentCard render", () => {
    it("CommentCard child component should be able to render", () => {
        const wrapper = shallow(<CommentCard />);
        expect(wrapper.find({ children: "AddComment" }));
    });
});
