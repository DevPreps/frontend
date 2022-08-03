import React from "react";
import { shallow } from "enzyme";
import CreateInterviewPost from "../CreateInterviewPost";

describe("Test Compose New Interview Post page", () => {
    const wrapper = shallow(<CreateInterviewPost />);

    it("should contain GeneralPostForm component", () => {
        expect(wrapper.find("GeneralPostForm").length).toBe(1);
    });

    it("should contain Compose button", () => {
        expect(wrapper.find({ children: "Compose" }).length).toBe(1);
    });

    it("should contain Close button", () => {
        expect(wrapper.find({ children: "X" }).length).toBe(1);
    });
});
