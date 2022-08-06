import React from "react";
import { shallow } from "enzyme";
import UpdateInterviewPost from "../UpdateInterviewPost";
import { posts } from "../../../../data";

// test rendering
describe("Test Update Interview Post modal", () => {
    const wrapper = shallow(<UpdateInterviewPost post={posts[0]} />);

    it("should render PostForm component />", () => {
        expect(wrapper.find("PostForm").length).toBe(1);
    });

    it("should render EDIT button", () => {
        expect(wrapper.find({ operation: "EDIT" }).length).toBe(1);
    });
});
