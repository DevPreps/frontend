import React from "react";

import { shallow } from "enzyme";

import ContactForm from "../ContactForm";
// import form data interface
import { IContactFormInputs } from "../IFormInputs";

// test rendering
describe("Test ContactForm component", () => {
    const onSubmit = (data: IContactFormInputs) => console.log(data);
    const wrapper = shallow(
        <ContactForm
            emailError={null}
            onSubmit={onSubmit}
            isError={false}
            isSucceed={false}
        />
    );

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

    it("should have a Typography for success message", () => {
        expect(wrapper.find({ "data-testid": "successMessage" }).length).toBe(
            1
        );
    });

    it("the visibility of success message should be hidden", () => {
        const successMessage = wrapper.find({
            "data-testid": "successMessage",
        });
        expect(successMessage.prop("sx").visibility).toBe("hidden");
    });
});
