import React from "react";
import { shallow } from "enzyme";
import Login from "../Login";

// test rendering
describe("Test Login component", () => {
    const wrapper = shallow(<Login />);
    console.log(wrapper.debug());

    it("should have a TextFieldInput for email", () => {
        expect(wrapper.find({ name: "email" }).length).toBe(1);
    });

    it("should have a PasswordInput for password", () => {
        expect(wrapper.find({ name: "password" }).length).toBe(1);
    });

    it("should have a LOG IN button", () => {
        expect(wrapper.find({ children: "LOG IN" }).length).toBe(1);
    });
    // TODO - the reset password link needs to be updated later
    it("should have a reset password link", () => {
        expect(
            wrapper.find({ children: "Forgot password?" }).prop("href")
        ).toBe("/");
    });

    it("should have a register link", () => {
        expect(wrapper.find({ children: "Sign up now" }).prop("href")).toBe(
            "/register"
        );
    });
    // TODO - the link needs to be updated
    it("should have a link for terms and conditions", () => {
        expect(
            wrapper.find({ children: "Terms and Conditions." }).prop("href")
        ).toBe("#");
    });
    // TODO - the link needs to be updated
    it("should have a link for privacy policy", () => {
        expect(wrapper.find({ children: "Privacy Policy" }).prop("href")).toBe(
            "#"
        );
    });
});
