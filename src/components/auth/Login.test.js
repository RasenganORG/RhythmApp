import Login from "./LogIn";
import { renderWithRedux } from "../../testHelpers/renderWithRedux";
import { BrowserRouter } from "react-router-dom";
import { fireEvent, waitFor, screen } from "@testing-library/react";
import axios from "axios";

jest.mock("axios");

describe("testing the login page", () => {
  window.matchMedia =
    window.matchMedia ||
    function () {
      return {
        matches: false,
        addListener: function () {},
        removeListener: function () {},
      };
    };

  it("checking if the login button does an axios post with the right url", async () => {
    
    renderWithRedux(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
    const emailInput = screen.getByPlaceholderText("Email");
    fireEvent.change(emailInput, { target: { value: "test123@gmail.com" } });
    const passwordInput = screen.getByPlaceholderText("Password");
    fireEvent.change(passwordInput, { target: { value: "123456" } });
    const logInButton = screen.getByRole("button", { name: /Log in/i });
    fireEvent.submit(logInButton);
    await waitFor(() =>
      expect(axios.get).toHaveBeenCalledWith(
        "http://localhost:8080/api/getLoggedUser/test123@gmail.com/?pwd=123456"
      )
    );
  });
});
