import React from "react";
import { shallow } from "enzyme";
import Heroes from "../Heroes";

describe("Test Heroes page", () => {
    it("should be able to render <Heroes />", () => {
        shallow(<Heroes />);
    });
});
