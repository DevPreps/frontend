import React from "react";
import { shallow } from "enzyme";
import UpdateInterviewPost from "../UpdateInterviewPost";

// test rendering
describe("Test Update Interview Post page", () => {
    const wrapper = shallow(<UpdateInterviewPost />);

    it("should contain  InterviewPostForm component />", () => {
        expect(wrapper.find("InterviewPostForm").length).toBe(1);
    });

    it("should contain Edit button", () => {
        expect(wrapper.find({ children: "Edit" }).length).toBe(1);
    });

    it("should contain Close button", () => {
        expect(wrapper.find({ children: "X" }).length).toBe(1);
    });
});
