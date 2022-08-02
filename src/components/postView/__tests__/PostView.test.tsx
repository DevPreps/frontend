import React from "react";
import { shallow } from "enzyme";
import PostView from "../PostView";

// test component rendering
describe("Test PostView render", () => {
    it("PostView child PostCard component should be able to render", () => {
        const wrapper = shallow(<PostView />);
        expect(wrapper.find({ children: "PostCard" }));
    });

    it("PostView child component Comments should be able to render", () => {
        const wrapper = shallow(<PostView />);
        expect(wrapper.find({ children: "Comments" }));
    });
});
