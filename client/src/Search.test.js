import { render, fireEvent, waitFor } from "@testing-library/react";
import axios from "axios";
import Search from "./Search";

jest.mock("axios");

test("checks if it is making post request or not for search functionality", async () => {
  axios.post.mockResolvedValue({ data: true });

  const { getByLabelText, getByRole } = render(<Search />);

  const venueTypeSelect = getByLabelText("Venue Type:");
  const bookingDateInput = getByLabelText("Booking Date:");
  const bookingHoursInput = getByLabelText("Booking Hours:");
  const searchButton = getByRole("button", { name: /search/i });

  fireEvent.change(venueTypeSelect, { target: { value: "room" } });
  fireEvent.change(bookingDateInput, { target: { value: "2024-03-08" } });
  fireEvent.change(bookingHoursInput, { target: { value: "03:56" } });
  fireEvent.click(searchButton);

  await waitFor(() => {
    expect(axios.post).toHaveBeenCalled();
  });
});
