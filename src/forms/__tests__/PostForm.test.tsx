import React from "react";
import { shallow } from "enzyme";
import PostForm from "../PostForm";
import { IInterviewFormInputs } from "../IFormInputs";
import { interviewFormDefaultValues } from "../formDefaultValues";
import { interviewFormSchema } from "../validationSchemas";

// test rendering
describe("Test InterviewPost Form component", () => {
    const onSubmit = (data: IInterviewFormInputs) => console.log(data);
    const wrapper = shallow(
        <PostForm
            onSubmit={onSubmit}
            formDefaultValues={interviewFormDefaultValues}
            validationSchema={interviewFormSchema}
        />
    );

    // should have input with name "title"
    it("should have input with name title", () => {
        expect(wrapper.find({ name: "title" }).length).toBe(1);
    });

    // should have input with name "category"
    it("should have input with name category", () => {
        expect(wrapper.find({ name: "category" }).length).toBe(1);
    });

    // should have input with name "companyName"
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

    // should have input with name "content"
    it("should have input with name content", () => {
        expect(wrapper.find({ name: "content" }).length).toBe(1);
    });

    // should have input with name "tags"
    it("should have input with name tags", () => {
        expect(wrapper.find({ name: "tags" }).length).toBe(1);
    });
});
