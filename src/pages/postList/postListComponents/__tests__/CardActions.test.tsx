import React from "react";
import { shallow } from "enzyme";
import { AuthorCardActions, UserCardActions } from "../CardActions";

// test component rendering
describe("<AuthorCardActions /> rendering", () => {
    const wrapper = shallow(<AuthorCardActions />);

    it("should contain UpdateInterviewPost Modal />", () => {
        expect(wrapper.find("UpdateInterviewPost").length).toBe(1);
    });

    it("should contain a delete button />", () => {
        expect(wrapper.find({ children: "DELETE" }).length).toBe(1);
    });
});

describe("<UserCardActions /> rendering", () => {
    const wrapper = shallow(<UserCardActions />);

    it("should contain add comment button />", () => {
        expect(wrapper.find({ "aria-label": "add comment" }).length).toBe(1);
    });

    it("should contain a like button />", () => {
        expect(wrapper.find({ "aria-label": "like the post" }).length).toBe(1);
    });

    it("should contain a bookmark button />", () => {
        expect(wrapper.find({ "aria-label": "bookmark" }).length).toBe(1);
    });
});
