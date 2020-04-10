import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import FetchingData from "./FetchingData";
import { act } from "react-dom/test-utils";
import { renderHook } from "@testing-library/react-hooks";
import useFetch from "../hooks/useFetch";
import fetchMock from "fetch-mock";
import "whatwg-fetch";

test("boxes are showing or loading is showing", () => {
  const { getByTestId } = render(<FetchingData />);

  getByTestId(/loading/i) || getByTestId(/name/i);
});
