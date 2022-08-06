import React from "react";
import { shallow } from "enzyme";
import CreateInterviewPost from "../CreateInterviewPost";

describe("Test Compose New Interview Post page", () => {
    const wrapper = shallow(<CreateInterviewPost />);

    it("should contain PostModalLayout component", () => {
        expect(wrapper.find("PostModalLayout").length).toBe(1);
    });

    it("should contain operation property and equal to COMPOSE", () => {
        expect(wrapper.find({ operation: "COMPOSE" }).length).toBe(1);
    });

    it("should contain PostForm component", () => {
        expect(wrapper.find("PostForm").length).toBe(1);
    });
});
