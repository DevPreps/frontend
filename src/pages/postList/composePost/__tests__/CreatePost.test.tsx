import React from "react";
import { shallow } from "enzyme";
import CreatePost from "../CreatePost";

describe("Test Compose New Interview Post page", () => {
    const wrapper = shallow(<CreatePost />);

    it("should contain PostModalLayout component", () => {
        expect(wrapper.find("PostModalLayout").length).toBe(1);
    });

    it("should contain CategoryInput component", () => {
        expect(wrapper.find("CategoryInput").length).toBe(1);
    });

    it("should contain operation property and equal to COMPOSE", () => {
        expect(wrapper.find({ operation: "COMPOSE" }).length).toBe(1);
    });

    it("should contain PostForm component", () => {
        expect(wrapper.find("PostForm").length).toBe(1);
    });
});
