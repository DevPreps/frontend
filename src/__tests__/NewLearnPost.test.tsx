import React from "react";
import { shallow } from "enzyme";
import NewLearnPost from "../pages/NewLearnPost";

describe("Test Compose New Learn Post page", () => {
    it("should be able to render <NewLearnPost />", () => {
        shallow(<NewLearnPost />);
    });
});
