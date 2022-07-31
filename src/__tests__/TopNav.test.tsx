/**
 * @jest-environment jsdom
 */
import React from "react";
import { configure, mount, shallow } from "enzyme";
import TopNav from "../components/TopNav";
import { IconButton } from "@mui/material";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17"

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
    // test if there are 9 Link elements
    it("should render 7 Links", () => {
        expect(wrapper.find("Link")).toHaveLength(7);
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
        expect(wrapper.find("Typography").at(1).contains(href+"/"));
    });
    // test Home page link (Mobile)
    it("should redirect to Home page when Home link is clicked", () => {
        expect(wrapper.find("Typography").at(2).contains(href+"/"));
    });
    // test general page link
    it("should redirect to Posts Learn page when general link is clicked", () => {
        expect(wrapper.find("Link").at(0).prop("to")).toEqual("/posts/general");
    });
    // test learn page link
    it("should redirect to Posts Interview page when learn link is clicked", () => {
        expect(wrapper.find("Link").at(1).prop("to")).toEqual("/posts/learn");
    });
    // test Projects page link
    it("should redirect to Projects page when Projects link is clicked", () => {
        expect(wrapper.find("Link").at(2).prop("to")).toEqual("/posts/interview");
    });
    // test project page link
    it("should redirect to Posts Discussions page when project link is clicked", () => {
        expect(wrapper.find("Link").at(3).prop("to")).toEqual("/posts/project");
    });
    // test Login page link
    it("should redirect to login page when login link is clicked", () => {
        expect(wrapper.find("Link").at(4).prop("to")).toEqual("/login");
    });
    // test Register page link
    it("should redirect to register page when register link is clicked", () => {
        expect(wrapper.find("Link").at(5).prop("to")).toEqual("/register");
    });
    // test My Account page link
    it("should redirect to My Account page when My Account link is clicked", () => {
        expect(wrapper.find("Link").at(6).prop("to")).toEqual("/my-account/1");
    });
    it("should update state on click", () => {
        const setMobileOpen = jest.fn();
        const wrapper = mount(<IconButton onClick={setMobileOpen} />);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const useStatMock: any = (mobileOpen :any) => [mobileOpen, setMobileOpen];
        jest.spyOn(React, "useState").mockImplementation(useStatMock)
        wrapper.find("button").simulate("click");
        expect(setMobileOpen).toBeCalled();
    });
});