import React from "react";

import { Button } from "@mui/material";
import { mount, shallow } from "enzyme";
import { BrowserRouter as Router } from "react-router-dom";

import TopNav from "../TopNav";

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
];

// test component rendering
describe("<TopNav />", () => {
    const wrapper = mount(
        <Router>
            <TopNav />
        </Router>
    );
    // test if the TopNav component renders
    it("should be able to render <TopNav />", () => {
        wrapper;
    });
    // test if there are 9 Link elements
    it("should render 14 Links", () => {
        expect(wrapper.find(Button).at(0).prop("to")).toHaveLength(14);
    });
    it("should test links", () => {
        links.map((link, index) =>
            expect(wrapper.find("Link").at(index).prop("to")).toEqual(link.to)
        );
    });
});
