import React from "react";
import { shallow } from "enzyme";
import PostView from "../PostView";
import PostCard from "../postComponents/PostCard";
import Comments from "../../comment/Comments";

// test component rendering
describe("Test PostView component", () => {
    const wrapper = shallow(<PostView />);

    it("Should be able to render PostCard component", () => {
        expect(wrapper.containsMatchingElement(<PostCard />)).toEqual(true);
    });

    it("Should be able to render Comments component", () => {
        expect(wrapper.containsMatchingElement(<Comments />)).toEqual(true);
    });
});
