// Test away
import React from "react";
import { render, fireEvent } from "react-testing-library";
import Dashboard from "./Dashboard";
import "jest-dom/extend-expect";
import "react-testing-library/cleanup-after-each";

describe("Dashboard", () => {
  it("should render without failing", () => {
    render(<Dashboard />);
  });
});
