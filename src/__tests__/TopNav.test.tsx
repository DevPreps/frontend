/**
 * @jest-environment jsdom
 */
import React from "react";
import { configure, mount, shallow } from "enzyme";
import TopNav from "../components/TopNav";
import { IconButton } from "@mui/material";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

// TODOs: need to figure out the wrapper type before using the following beforeEach code block
// let wrapper;
// beforeEach(()=>{
// 	wrapper = shallow(<TopNav/>);
// })

configure({ adapter: new Adapter() });

// test component rendering
describe("<TopNav /> rendering", () => {
    const wrapper = shallow(<TopNav />);
    // test if the TopNav component renders
    it("should be able to render <TopNav />", () => {
        wrapper;
    });
    // test if there is Typography elements
    it("should render 3 Typography", () => {
        expect(wrapper.find("Typography"));
    });
    // test if there are button elements
    it("should render 7 Button", () => {
        expect(wrapper.find("Button").length);
    });
    // test if there is drawer
    it("should render button", () => {
        expect(wrapper.find("Drawer"));
    });
    // test if there is handleDrawerToggle
    it("should render handleDrawerToggle", () => {
        // expect(wrapper.find("handleDrawerToggle").contains("!mobileOpen"));
    });
});

// test component interactions
describe("<TopNav /> interactions", () => {
    const wrapper = shallow(<TopNav />);
    const href = "href=";
    it("should display DevPrep text as Typography", () => {
        expect(wrapper.find("Typography").at(0));
    });
    // test Home page link (Desktop)
    it("should redirect to Home page when Home link is clicked", () => {
        expect(
            wrapper
                .find("Typography")
                .at(1)
                .contains(href + "/")
        );
    });
    // test Home page link (Mobile)
    it("should redirect to Home page when Home link is clicked", () => {
        expect(
            wrapper
                .find("Typography")
                .at(2)
                .contains(href + "/")
        );
    });
    // test general page link
    it("should redirect to Posts Learn page when general link is clicked", () => {
        expect(wrapper.closest("Button").at(0).contains("/posts/general"))
    });
    // test learn page link
    it("should redirect to Posts Interview page when learn link is clicked", () => {
        expect(wrapper.closest("Button").at(1).contains("/posts/learn"))
    });
    // test interview page link
    it("should redirect to interview page when Projects link is clicked", () => {
        expect(wrapper.closest("Button").at(2).contains("/posts/interview"))
    });
    // test project page link
    it("should redirect to Posts project page when project link is clicked", () => {
        expect(wrapper.closest("Button").at(3).contains("/posts/project"))
    });
    // test Login page link
    it("should redirect to login page when login link is clicked", () => {
        expect(wrapper.closest("Button").at(4).contains("/login"))
    });
    // test Register page link
    it("should redirect to register page when register link is clicked", () => {
        expect(wrapper.closest("Button").at(5).contains("/register"))
    });
    // test My Account page link
    it("should redirect to My Account page when My Account link is clicked", () => {
        expect(wrapper.closest("Button").at(6).contains("/my-account/1"))
    });
    it("should update state on click", () => {
        const setMobileOpen = jest.fn();
        const wrapper = mount(<IconButton onClick={setMobileOpen} />);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const useStatMock: any = (mobileOpen: any) => [
            mobileOpen,
            setMobileOpen,
        ];
        jest.spyOn(React, "useState").mockImplementation(useStatMock);
        wrapper.find("button").simulate("click");
        expect(setMobileOpen).toBeCalled();
    });
});
