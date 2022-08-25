import React from "react";

import { shallow } from "enzyme";

import Comments from "../Comments";

// test component rendering
describe("Test Comments component", () => {
    const wrapper = shallow(<Comments />);
    it("Should be able to render CommentCard component ", () => {
        expect(wrapper.find("CommentCard").children).toHaveLength(1);
    });
});
