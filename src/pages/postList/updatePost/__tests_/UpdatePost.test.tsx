import React from "react";
import { shallow } from "enzyme";
import UpdatePost from "../UpdatePost";
import { posts } from "../../../../data";

// test rendering
describe("Test Update Post modal", () => {
    const wrapper = shallow(<UpdatePost post={posts[0]} />);

    it("should render PostForm component />", () => {
        expect(wrapper.find("PostForm").length).toBe(1);
    });

    it("should contain CategoryInput component", () => {
        expect(wrapper.find("CategoryInput").length).toBe(1);
    });

    it("should render EDIT button", () => {
        expect(wrapper.find({ operation: "EDIT" }).length).toBe(1);
    });
});
