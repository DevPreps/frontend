import React from "react";
import { shallow } from "enzyme";
import UpdateGeneralPost from "../UpdateGeneralPost";
import { posts } from "../../../../data";

// test rendering
describe("Test Update General Post modal", () => {
    const wrapper = shallow(<UpdateGeneralPost post={posts[0]} />);

    it("should render PostForm component />", () => {
        expect(wrapper.find("PostForm").length).toBe(1);
    });

    it("should render EDIT button", () => {
        expect(wrapper.find({ operation: "EDIT" }).length).toBe(1);
    });
});
