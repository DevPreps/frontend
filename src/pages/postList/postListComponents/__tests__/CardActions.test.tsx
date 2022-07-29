import React from "react";
import { shallow } from "enzyme";
import { AuthorCardActions, UserCardActions } from "../CardActions";

// test component rendering
describe("<AuthorCardActions /> rendering", () => {
    const wrapper = shallow(<AuthorCardActions />);
    // test if AuthorCardActions component renders
    it("should be able to render <AuthorCardActions />", () => {
        console.log(wrapper.debug());
        wrapper;
    });

    // test if UpdateInterviewPost Modal renders
    it("should contain UpdateInterviewPost Modal />", () => {
        expect(wrapper.find("UpdateInterviewPost").length).toBe(1);
    });
});

describe("<UserCardActions /> rendering", () => {
    const wrapper = shallow(<UserCardActions />);
    // test if UserCardActions component renders
    it("should be able to render <UserCardActions />", () => {
        wrapper;
    });
});
