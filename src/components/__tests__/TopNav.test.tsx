import React from "react";
import { shallow } from "enzyme";
import TopNav from "../TopNav";

// TODOs: need to figure out the wrapper type before using the following beforeEach code block
// let wrapper;
// beforeEach(()=>{
// 	wrapper = shallow(<TopNav/>);
// })

// test component rendering
describe("<TopNav /> rendering", () => {
    const wrapper = shallow(<TopNav />);
    // test if the TopNav component renders
    it("should be able to render <TopNav />", () => {
        wrapper;
    });
    // test if there are 9 Link elements
    it("should render 9 Links", () => {
        expect(wrapper.find("Link")).toHaveLength(9);
    });
});

// test component interactions
describe("<TopNav /> interactions", () => {
    const wrapper = shallow(<TopNav />);
    // test Home page link
    it("should redirect to Home page when Home link is clicked", () => {
        expect(wrapper.find("Link").first().prop("to")).toEqual("/");
    });
    // test Learn page link
    it("should redirect to Posts Learn page when Learn link is clicked", () => {
        expect(wrapper.find("Link").at(1).prop("to")).toEqual("/posts/learn");
    });
    // test Interview page link
    it("should redirect to Posts Interview page when Interview link is clicked", () => {
        expect(wrapper.find("Link").at(2).prop("to")).toEqual(
            "/posts/interview"
        );
    });
    // test Projects page link
    it("should redirect to Projects page when Projects link is clicked", () => {
        expect(wrapper.find("Link").at(3).prop("to")).toEqual("/posts/project");
    });
    // test Discussions page link
    it("should redirect to Posts Discussions page when Discussions link is clicked", () => {
        expect(wrapper.find("Link").at(4).prop("to")).toEqual("/posts/general");
    });
    // test Login page link
    it("should redirect to login page when login link is clicked", () => {
        expect(wrapper.find("Link").at(5).prop("to")).toEqual("/login");
    });
    // test Register page link
    it("should redirect to register page when register link is clicked", () => {
        expect(wrapper.find("Link").at(6).prop("to")).toEqual("/register");
    });
    // test My Account page link
    it("should redirect to My Account page when My Account link is clicked", () => {
        expect(wrapper.find("Link").at(7).prop("to")).toEqual("/my-account/1");
    });
    // test About Us page link
    it("should redirect to About US page when About Us link is clicked", () => {
        expect(wrapper.find("Link").at(8).prop("to")).toEqual("/about-us");
    });
});
