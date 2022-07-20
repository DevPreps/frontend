import React from "react";
import { shallow } from "enzyme";
import NewGeneralPost from "../pages/NewGeneralPost";

describe("Test Compose New General Post page", () => {
    it("should be able to render <NewGeneralPost />", () => {
        shallow(<NewGeneralPost />);
    });
});
