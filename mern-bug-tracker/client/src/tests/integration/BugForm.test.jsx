import { render, screen, fireEvent } from "@testing-library/react";
import BugForm from "../../components/BugForm";

test("submits bug", () => {
  render(<BugForm onSubmit={jest.fn()} />);

  fireEvent.change(screen.getByPlaceholderText("Title"), {
    target: { value: "Login failure" }
  });

  fireEvent.click(screen.getByText("Submit"));

  expect(screen.getByText("Submit")).toBeInTheDocument();
});
