import React from "react";
import { shallow } from "enzyme";
import Register from "../Register";

// test rendering
describe("Test Register component", () => {
    const wrapper = shallow(<Register />);

    it("should have a title", () => {
        expect(wrapper.find({ children: "Join Devprep" }).length).toBe(1);
    });
    it("should have a TextFieldInput for email", () => {
        expect(wrapper.find({ name: "email" }).length).toBe(1);
    });

    it("should have a TextFieldInput for username", () => {
        expect(wrapper.find({ name: "username" }).length).toBe(1);
    });

    it("should have a PasswordInput for password", () => {
        expect(wrapper.find({ name: "password" }).length).toBe(1);
    });

    it("should have a PasswordInput for confirmPassword", () => {
        expect(wrapper.find({ name: "confirmPassword" }).length).toBe(1);
    });

    it("should have a JOIN NOW button", () => {
        expect(wrapper.find({ children: "JOIN NOW" }).length).toBe(1);
    });

    it("should have a login link", () => {
        expect(wrapper.find({ children: "Log in here" }).prop("href")).toBe(
            "/login"
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
