import React from "react";

import { shallow } from "enzyme";

import PostView from "../PostView";

// test component rendering
describe("Test PostView component", () => {
    const wrapper = shallow(<PostView />);

    it("Should be able to render PostCard component", () => {
        expect(wrapper.find("PostCard").children).toHaveLength(1);
    });

    it("Should be able to render Comments component", () => {
        expect(wrapper.find("Comments").children).toHaveLength(1);
    });
});
