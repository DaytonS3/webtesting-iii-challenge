// Test away!
import React from "react";
import { render } from "react-testing-library";
import Display from "./Display";
import "jest-dom/extend-expect";
import "react-testing-library/cleanup-after-each";

describe("Display", () => {
  it("should render without failing", () => {
    render(<Display />);
  });

  it("should display open if prop is false", () => {
    const { getByText } = render(<Display closed={false} />);
    expect(getByText(/open/i)).toBeInTheDocument();
  });

  it("should display closed if prop is true", () => {
    const { getByText } = render(<Display closed={true} />);
    expect(getByText(/closed/i)).toBeInTheDocument();
  });

  it("should display have the class red-led if closed", () => {
    const { getByText } = render(<Display closed={true} locked={true} />);
    expect(getByText(/closed/i)).toHaveClass("red-led");
    expect(getByText(/locked/i)).toHaveClass("red-led");
  });
  it("should display have the class green-led if open", () => {
    const { getByText } = render(<Display closed={false} locked={false} />);
    expect(getByText(/open/i)).toHaveClass("green-led");
    expect(getByText(/unlocked/i)).toHaveClass("green-led");
  });
});
