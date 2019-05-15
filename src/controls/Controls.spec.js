// Test away!
// Test away
import React from "react";
import { render, fireEvent, getByTestId } from "react-testing-library";
import Controls from "./Controls";
import "jest-dom/extend-expect";
import "react-testing-library/cleanup-after-each";

describe("Controls", () => {
  it("should render without failing", () => {
    render(<Controls />);
  });

  it("should provide lock button", () => {
    const { getByText } = render(<Controls closed={true} locked={true} />);
    expect(getByText(/lock gate/i)).toBeInTheDocument();
  });
  it("should switch lock gate to unlock button when locked", () => {
    const { getByText } = render(<Controls closed={true} locked={true} />);
    expect(getByText(/unlock gate/i)).toBeInTheDocument();
  });

  it("should provide close button", () => {
    const { getByText } = render(<Controls closed={false} locked={false} />);
    expect(getByText(/close gate/i)).toBeInTheDocument();
  });

  it("should switch close to open button when closed", () => {
    const { getByText } = render(<Controls closed={true} locked={false} />);
    expect(getByText(/open gate/i)).toBeInTheDocument();
  });
});
