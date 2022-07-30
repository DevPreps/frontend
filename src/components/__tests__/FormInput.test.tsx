/**
 * @jest-environment jsdom
 */
import React from "react";
import { mount } from "enzyme";
import { TextFieldInput, SelectInput, TagsInput } from "../FormInput";
import { tagOptions } from "../../data";
import { useForm, FormProvider } from "react-hook-form";

const WrapperForm: React.FC = ({ children }) => {
    const methods = useForm();
    return <FormProvider {...methods}>{children}</FormProvider>;
};

// test component rendering
describe("should be able to render <TextFieldInput />", () => {
    const wrapper = mount(
        <WrapperForm>
            <TextFieldInput name="test" helperText="help text" />
        </WrapperForm>
    );
    it("should be able to render <TextFieldInput />", () => {
        console.log(wrapper.debug());
        wrapper;
    });

    it("should have <TextFieldInput>", () => {
        expect(wrapper.find("TextFieldInput").exists()).toBe(true);
    });

    it("should have a label with id #test-input-label, and the text equal to test", () => {
        expect(wrapper.find("label#test-input-label").text()).toEqual("test");
    });

    it("should have a input with id test-input", () => {
        expect(wrapper.find("input#test-input").exists()).toBe(true);
    });

    it("should have a p with id test-input-helper-text and the text equal to help text", () => {
        expect(wrapper.find("p#test-input-helper-text").text()).toEqual(
            "help text"
        );
    });
});

describe("should be able to render <SelectInput />", () => {
    const wrapper = mount(
        <WrapperForm>
            <SelectInput
                name={"category"}
                helperText="help text"
                options={tagOptions}
            />
        </WrapperForm>
    );
    it("should be able to render the whole component", () => {
        console.log(wrapper.debug());
        wrapper;
    });

    it("should have <SelectInput>", () => {
        expect(wrapper.find("SelectInput").exists()).toBe(true);
    });

    it("should have a label with id #category-select-label, and the text equal to category", () => {
        expect(
            wrapper.find("ForwardRef(InputLabel)#category-select-label").text()
        ).toEqual("category");
    });

    it("should have a input with id category-input", () => {
        expect(wrapper.find("ForwardRef(Select)#category-input").exists()).toBe(
            true
        );
    });

    it("should have helperText element and the text equal to help text", () => {
        expect(wrapper.find("ForwardRef(FormHelperText)").text()).toEqual(
            "help text"
        );
    });
});

describe("should be able to render <TagsInput />", () => {
    const wrapper = mount(
        <WrapperForm>
            <TagsInput
                name={"tags"}
                helperText="help text"
                options={tagOptions}
            />
        </WrapperForm>
    );
    it("should be able to render the whole component", () => {
        console.log(wrapper.debug());
        wrapper;
    });

    it("should have <TagsInput>", () => {
        expect(wrapper.find("TagsInput").exists()).toBe(true);
    });

    it("should have a label with id #tags-select-label, and the text equal to tags", () => {
        expect(
            wrapper.find("ForwardRef(InputLabel)#tags-select-label").text()
        ).toEqual("tags");
    });

    it("should have a input with id tags-input", () => {
        expect(wrapper.find("ForwardRef(Select)#tags-input").exists()).toBe(
            true
        );
    });

    it("should have helperText element and the text equal to help text", () => {
        expect(wrapper.find("ForwardRef(FormHelperText)").text()).toEqual(
            "help text"
        );
    });
});
