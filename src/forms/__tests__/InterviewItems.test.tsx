import React from "react";

import { shallow } from "enzyme";

import { interviewFormDefaultValues } from "../formDefaultValues";
import InterviewItems from "../InterviewItems";

// test rendering
describe("Test InterviewItems component", () => {
    const wrapper = shallow(
        <InterviewItems formDefaultValues={interviewFormDefaultValues} />
    );

    // should have input with name "title"
    it("should have input with name companyName", () => {
        expect(wrapper.find({ name: "companyName" }).length).toBe(1);
    });

    // should have input with name "city"
    it("should have input with name city", () => {
        expect(wrapper.find({ name: "city" }).length).toBe(1);
    });

    // should have input with name "jobTitle"
    it("should have input with name jobTitle", () => {
        expect(wrapper.find({ name: "jobTitle" }).length).toBe(1);
    });

    // should have input with name "position"
    it("should have input with name position", () => {
        expect(wrapper.find({ name: "position" }).length).toBe(1);
    });
});
