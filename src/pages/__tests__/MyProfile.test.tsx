import React from "react";
import { shallow } from "enzyme";
import MyProfile from "../myAccount/MyProfile";

describe("Test MyProfile Page", () => {
    it("should be able to render <MyProfile />", () => {
        shallow(<MyProfile />);
    });
});
