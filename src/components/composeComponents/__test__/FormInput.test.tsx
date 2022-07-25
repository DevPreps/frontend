import React from "react";
import { shallow } from "enzyme";
import {TextFieldInput, SelectInput} from "../FormInput";

describe("Test rendering", () => {
    it("should be able to render <TextFieldInput />", () => {
        shallow(<TextFieldInput name={""} />);
    });

    describe("should be able to render <SelectInput />", () => {
        shallow(<SelectInput name={""} />);
    });

});

