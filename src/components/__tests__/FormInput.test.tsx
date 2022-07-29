/**
 * @jest-environment jsdom
 */
import React from "react";
import { mount, shallow } from "enzyme";
import { TextFieldInput, SelectInput, TagsInput } from "../FormInput";

// test component rendering
describe("should be able to render <TextFieldInput />", () => {
    const wrapper = shallow(<TextFieldInput name="test" />);
    it("should be able to render <TextFieldInput />", () => {
        console.log(wrapper.debug());
        wrapper;
    });
    // wrapper.unmount();
    // it("should have two TextFieldInput", () => {
    //     expect(wrapper.find(TextField).length).toBe(1);
    // });
});

describe("should be able to render <SelectInput />", () => {
    const wrapper = shallow(<SelectInput name={"category"} />);
    it("should be able to render <TextFieldInput />", () => {
        wrapper;
    });
});

describe("should be able to render <TagsInput />", () => {
    const wrapper = shallow(<TagsInput name={"tags"} />);
    it("should be able to render <TagsInput />", () => {
        wrapper;
    });
});
