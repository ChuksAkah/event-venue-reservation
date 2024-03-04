import { render, fireEvent, waitFor } from "@testing-library/react";
import axios from "axios";
import Login from "./Login.js";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./store.js";
import { Provider } from "react-redux";

jest.mock("axios");
axios.post.mockResolvedValue({});

test("submits the form and checks for post request on the page", async () => {
  const username = "richard";
  const password = "richardugonna";

  const { getByLabelText, getByRole } = render(
    <Provider store={store}>
      <Router>
        <Login />
      </Router>
    </Provider>
  );
  const usernameInput = getByLabelText("Username:");
  const passwordInput = getByLabelText("Password:");
  const loginButton = getByRole("button", { name: /login/i });

  fireEvent.change(usernameInput, { target: { value: username } });
  fireEvent.change(passwordInput, { target: { value: password } });
  fireEvent.click(loginButton);

  await waitFor(() => {
    expect(axios.post).toHaveBeenCalled();
  });  
});
