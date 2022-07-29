import React from "react";
import { shallow } from "enzyme";
import { AuthorCardActions, UserCardActions } from "../CardActions";

// test component rendering
describe("<AuthorCardActions /> rendering", () => {
    const wrapper = shallow(<AuthorCardActions />);
    // test if AuthorCardActions component renders
    it("should be able to render <AuthorCardActions />", () => {
        wrapper;
    });

    // test if UpdateGeneralPost Modal renders
    it("should contain UpdateGeneralPost Modal />", () => {
        expect(wrapper.find("UpdateGeneralPost").length).toBe(1);
    });
});

describe("<UserCardActions /> rendering", () => {
    const wrapper = shallow(<UserCardActions />);
    // test if UserCardActions component renders
    it("should be able to render <UserCardActions />", () => {
        wrapper;
    });
});
