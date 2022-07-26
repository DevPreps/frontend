import React from "react";
import { shallow } from "enzyme";
import { TextFieldInput, SelectInput } from "../FormInput";

describe("Test rendering", () => {
    const wrapper = shallow(<TextFieldInput name={""} />);
    it("should be able to render <TextFieldInput />", () => {
        wrapper;
    });
});

describe("should be able to render <SelectInput />", () => {
    const wrapper = shallow(<SelectInput name={""} />);
    it("should be able to render <TextFieldInput />", () => {
        wrapper;
    });
});
