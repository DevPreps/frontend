import React from "react";
import { shallow } from "enzyme";
import ContactForm from "../ContactForm";

// import form data interface
import { IContactFormInputs } from "../IFormInputs";

// test rendering
describe("Test ContactForm component", () => {
    const onSubmit = (data: IContactFormInputs) => console.log(data);
    const wrapper = shallow(<ContactForm onSubmit={onSubmit} />);
    console.log(wrapper.debug());

    it("should have a TextFieldInput for name", () => {
        expect(wrapper.find({ name: "name" }).length).toBe(1);
    });

    it("should have a TextFieldInput for subject", () => {
        expect(wrapper.find({ name: "subject" }).length).toBe(1);
    });

    it("should have a TextFieldInput for email", () => {
        expect(wrapper.find({ name: "email" }).length).toBe(1);
    });

    it("should have a TextFieldInput for message", () => {
        expect(wrapper.find({ name: "message" }).length).toBe(1);
    });

    it("should have SEND button", () => {
        expect(wrapper.find({ children: "SEND" }).length).toBe(1);
    });
});