import React from "react";

import { shallow } from "enzyme";

import MyAccount from "../MyAccount";

// test component rendering
const currentUser = { userId: "1" };
const sidebarLinks = [
    {
        to: `/my-account/${currentUser.userId}`,
        text: "My Profile",
    },
    {
        to: `/my-account/${currentUser.userId}/my-posts`,
        text: "My Posts",
    },
    {
        to: `/my-account/${currentUser.userId}/my-drafts`,
        text: "My Drafts",
    },
    {
        to: `/my-account/${currentUser.userId}/my-bookmarks`,
        text: "My Bookmarks",
    },
];
describe("<MyAccount /> rendering", () => {
    const wrapper = shallow(<MyAccount />);

    // the links in sidebarLinks should be rendered
    it("should render the links in sidebarLinks", () => {
        sidebarLinks?.map((link) =>
            expect(
                wrapper.find({ "data-testid": link.text }).prop("to")
            ).toEqual(link.to)
        );
    });
});

// test component interactions
// describe("<MyAccount /> interactions", () => {
//     const wrapper = shallow(<MyAccount />);
//     // test links
//     it("should redirect to My Personal Info page when My Personal Info link is clicked", () => {
//         expect(wrapper.find({children: ""}).at(0).prop("to")).toEqual("/my-account");
//     });

// });
