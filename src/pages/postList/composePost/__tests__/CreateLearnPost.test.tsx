import React from "react";
import { shallow } from "enzyme";
import CreateLearnPost from "../CreateLearnPost";

describe("Test Create Learn Post page", () => {
    it("should be able to render <CreateLearnPost />", () => {
        shallow(<CreateLearnPost />);
    });
});
