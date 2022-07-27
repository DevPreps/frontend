import React from "react";
import { shallow } from "enzyme";
import CreateInterviewPost from "../CreateInterviewPost";

describe("Test Compose New Interview Post page", () => {
    const wrapper = shallow(<CreateInterviewPost />);

    it("should be able to render  CreateInterviewPost />", () => {
        console.log(wrapper.debug());
        wrapper;
    });

    it("should contain InterviewPostForm component />", () => {
        expect(wrapper.find("InterviewPostForm").length).toBe(1);
    });
});
