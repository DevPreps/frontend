import React from "react";
import { shallow } from "enzyme";
import ReportModal from "../ReportModal";

describe("Test Report Modal", () => {
    const wrapper = shallow(<ReportModal />);

    it("should contain PostModalLayout component", () => {
        expect(wrapper.find("PostModalLayout").length).toBe(1);
    });

    it("should contain a Typography component for the subtitle", () => {
        expect(wrapper.find("ForwardRef(Typography)").length).toBe(1);
    });

    it("should contain ReportForm component", () => {
        expect(wrapper.find("ReportForm").length).toBe(1);
    });
});
