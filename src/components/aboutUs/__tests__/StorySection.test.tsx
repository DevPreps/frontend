import React from "react";
import { shallow } from "enzyme";
import StorySection from "../StorySection";

describe("Test StorySection component", () => {
    it("should be able to render <StorySection />", () => {
        shallow(<StorySection />);
    });
});
