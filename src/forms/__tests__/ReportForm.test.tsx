import React from "react";
import { shallow } from "enzyme";
import ReportForm from "../ReportForm";

// import form data interface
import { IReportFormInputs } from "../IFormInputs";

// test rendering
describe("Test ReportForm component", () => {
    const formDefaultValues = {
        reportedUrl: "#",
        message: "",
        violationType: "other",
    }
    const onSubmit = (data: IReportFormInputs) => console.log(data);
    const wrapper = shallow(
    <ReportForm 
    onSubmit={onSubmit} 
    formDefaultValues={formDefaultValues}
    />
    );
    console.log(wrapper.debug());

    it("should have a TextFieldInput for name", () => {
        expect(wrapper.find({ name: "reportedUrl" }).length).toBe(1);
    });

    it("should have a SelectInput for violationType", () => {
        expect(wrapper.find({ name: "violationType" }).length).toBe(1);
    });
    it("SelectInput should have defaultValue=other", () => {
        expect(wrapper.find("SelectInput").prop("defaultValue")).toBe("other");
    });

    it("should have a TextFieldInput for message", () => {
        expect(wrapper.find({ name: "message" }).length).toBe(1);
    });

    it("should have SEND button", () => {
        expect(wrapper.find({ children: "SEND REPORT" }).length).toBe(1);
    });
});