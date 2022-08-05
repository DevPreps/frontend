import React from "react";
import { shallow } from "enzyme";
import MyProfileForm from "../MyProfileForm";

// import form data interface
import { IMyProfileFormInputs } from "../IFormInputs";

// import form default values
import { myProfileFormDefaultValues } from "../formDefaultValues";

// test rendering
describe("Test MyProfileForm component", () => {
    const onSubmit = (data: IMyProfileFormInputs) => console.log(data);
    const wrapper = shallow(
        <MyProfileForm
            onSubmit={onSubmit}
            formDefaultValues={myProfileFormDefaultValues}
        />
    );

    it("should have a TextFieldInput for firstName", () => {
        expect(wrapper.find({ name: "firstName" }).length).toBe(1);
    });

    it("should have a TextFieldInput for lastName", () => {
        expect(wrapper.find({ name: "lastName" }).length).toBe(1);
    });

    it("should have a TextFieldInput for username", () => {
        expect(wrapper.find({ name: "username" }).length).toBe(1);
    });

    it("should have a TextFieldInput for email", () => {
        expect(wrapper.find({ name: "email" }).length).toBe(1);
    });

    it("should have a TextFieldInput for jobTitle", () => {
        expect(wrapper.find({ name: "jobTitle" }).length).toBe(1);
    });

    it("should have a TextFieldInput for position", () => {
        expect(wrapper.find({ name: "position" }).length).toBe(1);
    });

    it("should have a TextFieldInput for city", () => {
        expect(wrapper.find({ name: "city" }).length).toBe(1);
    });

    it("should have a TextFieldInput for linkedin", () => {
        expect(wrapper.find({ name: "linkedIn" }).length).toBe(1);
    });

    it("should have a TextFieldInput for github", () => {
        expect(wrapper.find({ name: "github" }).length).toBe(1);
    });
    it("should have a change password button", () => {
        expect(wrapper.find({ children: "CHANGE MY PASSWORD" }).length).toBe(1);
    });

    it("should have a Edit My Profile button", () => {
        expect(wrapper.find({ children: "Edit My Profile" }).length).toBe(1);
    });
});
