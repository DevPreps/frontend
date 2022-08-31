import React from "react";

import { mount } from "enzyme";
import { useForm, FormProvider } from "react-hook-form";

import { generalFormDefaultValues } from "../formDefaultValues";
import { IGeneralFormInputs } from "../IFormInputs";
import RichTextEditor from "../RichTextEditor";

const WrapperForm: React.FC = ({ children }) => {
    const methods = useForm<IGeneralFormInputs>({
        defaultValues: generalFormDefaultValues,
    });
    return <FormProvider {...methods}>{children}</FormProvider>;
};
describe("<RichTextEditor />", () => {
    it("finds quill text editor", () => {
        const wrapper = mount(
            <WrapperForm>
                <RichTextEditor />
            </WrapperForm>
        );
        expect(wrapper.find(".quill")).toHaveLength(1);
    });
});
