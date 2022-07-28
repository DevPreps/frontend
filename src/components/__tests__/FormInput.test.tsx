/**
 * @jest-environment jsdom
 */
import React from "react";
import { shallow } from "enzyme";
import { TextFieldInput, SelectInput, TagsInput } from "../FormInput";

// test component rendering
describe("should be able to render <TextFieldInput />", () => {
    const wrapper = shallow(<TextFieldInput name={"title"} />);
    it("should be able to render <TextFieldInput />", () => {
        console.log(wrapper.debug());
        wrapper;
    });

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
