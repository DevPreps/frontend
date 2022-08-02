import React from "react";
import { shallow } from "enzyme";
import PostCard from "../PostCard";

// test component rendering
describe("Test PostCard render", () => {
    it("PostCard child component should be able to render", () => {
        const wrapper = shallow(<PostCard />);
        expect(wrapper.find({ children: "<AddComment />" }));
    });
});
