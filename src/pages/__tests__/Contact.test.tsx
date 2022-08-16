/**
 * @jest-environment jsdom
 */
import React from "react";
import { shallow } from "enzyme";
import { Contact, sendMessage, verifyEmail } from "../Contact";
import axios from "axios";
import emailjs from "@emailjs/browser";

// Mock jest and set the type
jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

// Mock emailjs
jest.mock("@emailjs/browser");
const mockedEmailjs = emailjs as jest.Mocked<typeof emailjs>;

// test component rendering
describe("Test Contact Page rendering", () => {
    const wrapper = shallow(<Contact />);

    it("should be able to render title Contact Us", () => {
        expect(wrapper.find({ children: "Contact Us" }).length).toBe(1);
    });

    it("should render 4 ListItem", () => {
        expect(wrapper.find("ForwardRef(ListItem)").length).toBe(4);
    });

    it("should be able to render Contact Form", () => {
        expect(wrapper.find("ContactForm").length).toBe(1);
    });
});

// test sendMessage function
describe("Test sendMessage function", () => {
    const setIsError = jest.fn();
    const testData = {
        name: "tester",
        email: "lisa20210219@gmail.com",
        subject: "test",
        message: "test",
    };
    it("should return true when res.status === 200", async () => {
        const res = {
            status: 200,
            text: "ok",
        };
        mockedEmailjs.send.mockResolvedValue(res);
        expect(await sendMessage(testData, setIsError)).toBeTruthy();
    });

    it("should return undefined when receive an error", async () => {
        mockedEmailjs.send.mockRejectedValueOnce(
            new Error("Async error message")
        );
        expect(await sendMessage(testData, setIsError)).toBeUndefined;
    });

    it("should call setIsError when receive an error", async () => {
        mockedEmailjs.send.mockRejectedValueOnce(
            new Error("Async error message")
        );
        await sendMessage(testData, setIsError);
        expect(setIsError).toHaveBeenCalled();
    });
});

// test verifyEmail function
describe("Test verifyEmail function", () => {
    const jsdomAlert = window.alert; // remember the jsdom alert
    beforeAll(() => {
        window.alert = () => void 0; // provide an empty implementation for window.alert
    });
    afterAll(() => {
        window.alert = jsdomAlert; // restore the jsdom alert
    });
    // mock setIsError hook
    const setIsError = jest.fn();
    const testData = {
        name: "tester",
        email: "lisa20210219@gmail.com",
        subject: "test",
        message: "test",
    };
    it("it should return true when res.data.is_deliverable = true", async () => {
        // Provide the data object to be returned
        const res = {
            data: {
                is_deliverable: true,
            },
        };
        mockedAxios.get.mockResolvedValueOnce(res);
        expect(await verifyEmail(testData, setIsError)).toBeTruthy();
    });

    it("find should return false when res.data.is_deliverable = false", async () => {
        const res = {
            data: [
                {
                    is_deliverable: false,
                },
            ],
        };
        mockedAxios.get.mockResolvedValueOnce(res);
        expect(
            await verifyEmail(
                { ...testData, email: "lisa20220219@gmail.com" },
                setIsError
            )
        ).toBe(false);
    });

    it("should return undefined when receive an error", async () => {
        mockedAxios.get.mockRejectedValueOnce(new Error("Async error message"));
        expect(
            await verifyEmail(
                { ...testData, email: "lisa20220219@gmail.com" },
                setIsError
            )
        ).toBeUndefined;
    });

    it("should call setIsError when receive an error", async () => {
        mockedAxios.get.mockRejectedValueOnce(new Error("Async error message"));
        await verifyEmail(
            { ...testData, email: "lisa20220219@gmail.com" },
            setIsError
        );
        expect(setIsError).toHaveBeenCalled();
    });
});
