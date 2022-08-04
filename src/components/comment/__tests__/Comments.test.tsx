import React from "react";
import { shallow } from "enzyme";
import Comments from "../Comments";
import CommentCard from "../CommentCard";

// describe("Test Comments Entry point", () => {
//     it("should be able to render <Comments />", () => {
//         shallow(<Comments />);
//     });
// });

describe("Test Comments component", () => {
    const wrapper = shallow(<Comments />);
    it("Should be able to render CommentCard component ", () => {
        expect(wrapper.containsMatchingElement(<CommentCard />)).toEqual(true);
    });
});
