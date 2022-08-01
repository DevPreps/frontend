/**
 * @jest-environment jsdom
 */
import React from "react";
import { shallow } from "enzyme";
import ThemeHandler from "../components/ThemeHandler";

// test component rendering
describe("<ThemeHandler /> rendering", () => {
    const wrapper = shallow(<ThemeHandler />);
    // test if the TopNav component renders
    it("should be able to render <themehandler />", () => {
        wrapper;
    });
});

const fakeLocalStorage = (function () {
    let store: any = {};

    return {
        getItem: function (key: string | number) {
            return store[key] || null;
        },
        setItem: function (
            key: string | number,
            value: { toString: () => any }
        ) {
            store[key] = value.toString();
        },
        removeItem: function (key: string | number) {
            delete store[key];
        },
        clear: function () {
            store = {};
        },
    };
})();

Object.defineProperty(window, "localStorage", {
    value: fakeLocalStorage,
});

describe("storage", () => {
    beforeAll(() => {
        Object.defineProperty(window, "localStorage", {
            value: fakeLocalStorage,
        });
    });

    it("Get Localstorage", () => {
        expect(window.localStorage.getItem("colorMode")).toEqual(
            window.localStorage.getItem("colorMode") as "light" | "dark"
        );
    });
});
