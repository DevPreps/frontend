import React from "react";
import { shallow } from "enzyme";
import Comments from "../Comments";

describe("Test Comments Entry point", () => {
    it("should be able to render <Comments />", () => {
        shallow(<Comments />);
    });
});