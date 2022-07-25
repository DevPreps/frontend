import React from "react";
import { shallow } from "enzyme";
import MyAccount from "../MyAccount";

// test component rendering
describe("<MyAccount /> rendering", () => {
    const wrapper = shallow(<MyAccount />);
    // test if the Compose component renders
    it("should be able to render <MyAccount />", () => {
        wrapper;
    });
    // test if there are 9 Link elements
    it("should render 4 Links", () => {
        expect(wrapper.find("Link")).toHaveLength(4);
    });
});

// test component interactions
describe("<MyAccount /> interactions", () => {
    const wrapper = shallow(<MyAccount />);
    // test PersonalInfo page link
    it("should redirect to My Personal Info page when My Personal Info link is clicked", () => {
        expect(wrapper.find("Link").at(0).prop("to")).toEqual("/my-account");
    });
    // test My Posts link
    it("should redirect to My Post page when My Posts link is clicked", () => {
        expect(wrapper.find("Link").at(1).prop("to")).toEqual(
            "/my-account/my-posts"
        );
    });
    // test My Drafts page link
    it("should redirect to My Drafts page when My Drafts link is clicked", () => {
        expect(wrapper.find("Link").at(2).prop("to")).toEqual(
            "/my-account/my-drafts"
        );
    });
    // test My Bookmarks page link
    it("should redirect to My Bookmarks page when My Bookmarks link is clicked", () => {
        expect(wrapper.find("Link").at(3).prop("to")).toEqual(
            "/my-account/my-bookmarks"
        );
    });
});
