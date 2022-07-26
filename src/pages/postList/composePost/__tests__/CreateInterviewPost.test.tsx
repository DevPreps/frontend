import React from "react";
import { shallow } from "enzyme";
import NewInterviewPost from "../CreateInterviewPost";

describe("Test Compose New Interview Post page", () => {
    it("should be able to render <NewInterviewPost />", () => {
        shallow(<NewInterviewPost />);
    });
});
