import React from "react";
import { shallow } from "enzyme";
import PersonalInfo from "../PersonalInfo";

describe("Test PersonalInfo Page", () => {
    it("should be able to render <PersonalInfo />", () => {
        shallow(<PersonalInfo />);
    });
});
