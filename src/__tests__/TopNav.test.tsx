/**
 * @jest-environment jsdom
 */
import React from "react";
import { shallow } from "enzyme";
import TopNav from "../components/TopNav";

// TODOs: need to figure out the wrapper type before using the following beforeEach code block
// let wrapper;
// beforeEach(()=>{
// 	wrapper = shallow(<TopNav/>);
// })

const links = [
    {
        to: "/posts/general",
        text: "General",
    },
    {
        to: "/posts/learn",
        text: "Learn",
    },
    {
        to: "/posts/interview",
        text: "Interview",
    },
    {
        to: "/posts/project",
        text: "Project",
    },     
    {
        to: "/login",
        text: "SignIn",
    },
    {
        to: "/register",
        text: "SignUp",
    },
    {
        to: "/my-account/1",
        text: "Profile",
    },
]

// test component rendering
describe("<TopNav /> rendering", () => {
    const wrapper = shallow(<TopNav />);
    // test if the TopNav component renders
    it("should be able to render <TopNav />", () => {
        wrapper;
    });
    // the links in topnav links variables should be rendered
    it("should render the links", () => {
        links.map((link) =>  
            expect(wrapper.find({children: link.text}).prop("to")).toEqual(link.to)
        );
    });
    // test if there is drawer
    it("should render button", () => {
        expect(wrapper.find("Drawer"));
    });
});