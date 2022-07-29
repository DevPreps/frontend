import React from "react";
import { shallow } from "enzyme";
import UpdateInterviewPost from "../UpdateInterviewPost";

// test rendering
describe("Test Update Interview Post page", () => {
    const wrapper = shallow(<UpdateInterviewPost />);

    it("should be able to render  UpdateInterviewPost />", () => {
        console.log(wrapper.debug());
        wrapper;
    });

    it("should contain  InterviewPostForm component />", () => {
        expect(wrapper.find("InterviewPostForm").length).toBe(1);
    });

    it("should contain edit Post Modal", () => {
        expect(wrapper.find(".editPostModal").length).toBe(1);
    });
});
