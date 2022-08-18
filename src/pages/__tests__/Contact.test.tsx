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

// clear mocks after each test
afterEach(() => {
    jest.resetAllMocks();
});

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

    it("should not return true and call setIsError when res.status !== 200", async () => {
        const res = {
            status: 204,
            text: "No Content",
        };
        mockedEmailjs.send.mockResolvedValue(res);
        expect(await sendMessage(testData, setIsError)).not.toBeTruthy();
        expect(setIsError).toBeCalledTimes(1);
    });

    it("should not return true when receive an error, and setIsError should be called", async () => {
        mockedEmailjs.send.mockRejectedValueOnce(
            new Error("Async error message")
        );
        const response = await sendMessage(testData, setIsError);
        expect(response).not.toBeTruthy();
        expect(setIsError).toBeCalledTimes(1);
    });
});

// test verifyEmail function
describe("Test verifyEmail function", () => {
    // mock setIsError hook
    const setIsError = jest.fn();
    const setEmailError = jest.fn();
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
        expect(
            await verifyEmail(testData, setEmailError, setIsError)
        ).toBeTruthy();
    });

    it("find should not return true when res.data.is_deliverable != true", async () => {
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
                setIsError,
                setEmailError
            )
        ).not.toBeTruthy();
        expect(setEmailError).toBeCalledTimes(1);
        expect(setIsError).toBeCalledTimes(1);
    });

    it("should should not return true when catch an error", async () => {
        mockedAxios.get.mockRejectedValueOnce(new Error("Async error message"));
        expect(
            await verifyEmail(
                { ...testData, email: "lisa20220219@gmail.com" },
                setEmailError,
                setIsError
            )
        ).not.toBeTruthy();
    });

    it("should call setIsError when receive an error, and setEmailError should not be called", async () => {
        mockedAxios.get.mockRejectedValueOnce(new Error("Async error message"));
        await verifyEmail(
            { ...testData, email: "lisa20220219@gmail.com" },
            setEmailError,
            setIsError
        );
        expect(setEmailError).toBeCalledTimes(0);
        expect(setIsError).toBeCalledTimes(1);
    });
});
