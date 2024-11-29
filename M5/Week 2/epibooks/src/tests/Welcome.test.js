import { render, screen } from "@testing-library/react";
import Welcome from "../Components/Welcome/Welcome.component";

test("renders an alert with 'Non ti sei ancora registrato al nostro servizio'", () => {
  render(<Welcome />);
  const alertElement = screen.getByText(
    /Non ti sei ancora registrato al nostro servizio/i
  );
  const welcomeElement = screen.getByText(
    /Benvenuti in EpiBooks/i
  );
  expect(alertElement).toBeInTheDocument();
  expect(welcomeElement).toBeInTheDocument();
});
