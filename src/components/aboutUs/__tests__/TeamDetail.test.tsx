import React from "react";
import { shallow } from "enzyme";
import TeamDetail from "../TeamDetail";

describe("Test TeamDetail Entry point", () => {
    it("should be able to render <TeamDetail />", () => {
        shallow(<TeamDetail />);
    });
});
