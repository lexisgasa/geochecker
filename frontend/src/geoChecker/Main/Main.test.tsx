import { render, screen } from "@testing-library/react";
import Main from "./Main";

describe("Given the Main component", () => {
  describe("When it is rendered", () => {
    test("Then it should display 'Supervisor' inside a link", () => {
      const supervisorLinkText = /supervisor/i;

      render(<Main />);

      const supervisorLink = screen.getByRole("link", {
        name: supervisorLinkText,
      });

      expect(supervisorLink).toBeInTheDocument();
    });
  });
});
