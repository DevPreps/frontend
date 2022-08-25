import { mount } from "enzyme";
import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { IGeneralFormInputs } from "../IFormInputs";
import { generalFormDefaultValues } from "../formDefaultValues";
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
