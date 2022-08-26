import React from "react";

import { shallow } from "enzyme";

import Heroes from "../Heroes";

describe("Test Heroes page", () => {
    const wrapper = shallow(<Heroes />);

    it("should be able to render the title", () => {
        expect(wrapper.find({ "data-testid": "hero-title" }).exists()).toBe(
            true
        );
    });

    it("should contain a link to the learn posts page", () => {
        expect(wrapper.find({ "data-testid": "hero-subtitle" }).exists()).toBe(
            true
        );
    });

    it("should contain a link to the learn posts page", () => {
        expect(wrapper.find({ children: "Learn Tips" }).prop("href")).toBe(
            "/posts/learn"
        );
    });

    it("should contain a link to the learn posts page", () => {
        expect(
            wrapper.find({ children: "Interview Questions" }).prop("href")
        ).toBe("/posts/interview");
    });

    it("should contain a link to the learn posts page", () => {
        expect(
            wrapper.find({ children: "Open Source Projects" }).prop("href")
        ).toBe("/posts/project");
    });

    it("should contain a link to the learn posts page", () => {
        expect(wrapper.find({ children: "Discussions" }).prop("href")).toBe(
            "/posts/general"
        );
    });
});
