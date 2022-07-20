import React from "react";
import { shallow } from "enzyme";
import NewProjectPost from "../pages/NewProjectPost";

describe("Test Compose New Project Post page", () => {
    it("should be able to render <NewProjectPost />", () => {
        shallow(<NewProjectPost />);
    });
});
