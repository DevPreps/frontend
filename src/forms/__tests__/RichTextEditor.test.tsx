import { mount } from "enzyme";
import React from "react";
import RichTextEditor from "../RichTextEditor";

describe("<RichTextEditor />", () => {
    it("finds quill text editor", () => {
        const wrapper = mount(<RichTextEditor />);
        expect(wrapper.find(".quill")).toHaveLength(1);
    });
});
