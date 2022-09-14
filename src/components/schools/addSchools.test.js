import AddSchool from "./addSchools";
import { renderWithRedux } from "../../testHelpers/renderWithRedux";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { fireEvent, screen, waitFor } from "@testing-library/react";
import axios from "axios";

jest.mock("axios");

describe("Testing the AddSchool page", () => {
  window.matchMedia =
    window.matchMedia ||
    function () {
      return {
        matches: false,
        addListener: function () {},
        removeListener: function () {},
      };
    };

  it("renders correctly", () => {
    renderWithRedux(
      <BrowserRouter>
        <AddSchool />
      </BrowserRouter>
    );
  });

  it("find the add button", () => {
    renderWithRedux(
      <BrowserRouter>
        <AddSchool />
      </BrowserRouter>
    );
    const buttonElement = screen.getByRole("button", {
      name: /Add School/i,
    });
    expect(buttonElement).toBeInTheDocument();
  });

  it("should render input elemnet", () => {
    renderWithRedux(
      <BrowserRouter>
        <AddSchool />
      </BrowserRouter>
    );
    const inputElementName = screen.getByLabelText(/School Name/i);
    fireEvent.change(inputElementName, { target: { value: "School1" } });
    expect(inputElementName.value).toBe("School1");
  });

  it("should trigger a post request on submit", async () => {
    renderWithRedux(
      <BrowserRouter>
        <AddSchool />
      </BrowserRouter>
    );
    const inputSchoolName = screen.getByLabelText(/School Name/i);
    fireEvent.change(inputSchoolName, { target: { value: "School1" } });
    const inputTrainers = screen.getByRole("combobox", {
      name: /Select Trainers/i,
    });
    userEvent.click(inputTrainers);
    fireEvent.click(screen.getAllByText("Joe")[1]);
    const inputDance = screen.getByRole("combobox", {
      name: /Select Dance Styles/i,
    });
    userEvent.click(inputDance);
    fireEvent.click(screen.getByText("Salsa"));
    const inputDescription = screen.getByLabelText(/Description/i);
    fireEvent.change(inputDescription, { target: { value: "Description" } });
    const inputImg = screen.getByLabelText(/Image URL/i);
    fireEvent.change(inputImg, { target: { value: "imgURL" } });
    const addSchoolButton = screen.getByRole("button", {
      name: /Add School/i,
    });
    // Doesn't work with fireEvent.click for Forms or Input. (That works just for button with onClick function)
    fireEvent.submit(addSchoolButton);
    await waitFor(() =>
      expect(axios.post).toHaveBeenCalledWith(
        "http://localhost:8080/api/schools/",
        expect.objectContaining({
          name: "School1",
          description: "Description",
          danceStyles: ["Salsa"],
          imageURL: "imgURL",
        }),
        {"headers": {"Content-Type": "application/json"}}
      )
    );
  });

  it("renders error message when submitting the form with empty inputs", async () => {
    renderWithRedux(
      <BrowserRouter>
        <AddSchool />
      </BrowserRouter>
    );
    const addSchoolButton = screen.getByRole("button", {
      name: /Add School/i,
    });
    fireEvent.click(addSchoolButton);
    await waitFor(() => screen.findByText("School Name is required!"));
  });
});
